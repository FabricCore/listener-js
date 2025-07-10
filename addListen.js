let { Runtime } = Packages.ws.siri.jscore.runtime;

let { getByName, getByChannel } = module.require("./definition");

function buildListenerOrder(key) {
    module.globals.listener.events[key].orderedListeners = Object.values(
        module.globals.listener.events[key].registeredListeners,
    )
        .sort(
            ({ priority: prioritya }, { priority: priorityb }) =>
                prioritya - priorityb,
        )
        .map(({ callback }) => callback);
}

function addEventListener(eventType, callback, { priority = 10000, id }) {
    let def =
        typeof eventType == "string"
            ? getByName(eventType)
            : getByChannel(eventType);

    if (def == undefined) {
        throw new Error(`No event definition for ${eventType}`);
    }

    module.globals ??= {};
    module.globals.listener ??= {};
    module.globals.listener.events ??= {};
    module.globals.listener.idToEvent ??= {};

    if (module.globals.listener.events[def.key] == undefined) {
        module.globals.listener.events[def.key] = {
            registeredListeners: {},
            orderedListeners: [],
            def,
        };

        let interfaceInternal = {};
        interfaceInternal[def.method] = function (...args) {
            let res;
            let event = module.globals.listener.events[def.key];
            // step 1: wrap all args
            for (let i = 0; i < args.length; i++) {
                args[i] = Runtime.autoWrap(args[i]);
            }

            // step 2: call all listeners
            let listeners = event.orderedListeners;
            for (let i = 0; i < listeners.length; i++) {
                res = event.def.tail(listeners[i].apply(null, args), args);
                let [pass, nextArgs] = event.def.composer(res, args);

                if (pass) {
                    args = nextArgs;
                } else {
                    res = nextArgs;
                    break;
                }
            }

            // step 3: unwrap stuff?
            return Runtime.unwrap(res);
        };

        let interfaceWrapped = new def.interface(interfaceInternal);
        def.channel.register(interfaceWrapped);
    }

    if (id == undefined)
        do {
            id = Math.floor(Math.random() * 4294967295)
                .toString(16)
                .padStart(8, 0);
        } while (
            module.globals.listener.events[def.key].registeredListeners[id] !=
            undefined
        );

    module.globals.listener.events[def.key].registeredListeners[id] = {
        callback,
        priority,
    };

    buildListenerOrder(def.key);
    module.globals.listener.idToEvent[id] = def.key;

    return {
        eventKey: def.key,
        id,
        cancel: () => {
            delete module.globals.listener.events[def.key].registeredListeners[
                id
            ];
            buildListenerOrder(def.key);
        },
    };
}

module.exports = {
    addEventListener,
};
