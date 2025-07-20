let { getByName } = module.require("./defBuilder");
let { buildListenerOrder } = module.require("./addListen");

function removeEventListener(identifier) {
    switch (typeof identifier) {
        case "string":
            if (
                module.globals == undefined ||
                module.globals.listener == undefined ||
                module.globals.listener.events == undefined ||
                module.globals.listener.idToEvent == undefined
            )
                return;

            let eventKey = module.globals.listener.idToEvent[identifier];
            if (eventKey == undefined) return;

            delete module.globals.listener.idToEvent[identifier];
            let def = getByName(eventKey);

            if (def == undefined) {
            } else {
                delete module.globals.listener.events[def.key]
                    .registeredListeners[identifier];
            }

            buildListenerOrder(eventKey);
            break;
        case "object":
            identifier.cancel();
    }
}

module.globals.listener.removeEventListener = removeEventListener;
