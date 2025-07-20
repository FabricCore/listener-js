let events = {};
let channels = {};
let customChannels = {};
let prelisten = {};

module.exports = {};

// composer: (tailOutput, [currentInputs...]) =>
//     [pass = false, returnValue]
//     [pass = true, [nextInputs...]]
//
// tail: (currentOutput, [currentInputs...]) => correctedOutput
Object.assign(module.exports, {
    addEvent: (
        key,
        channel,
        interface,
        method,
        tail = (v) => v,
        composer = function (_, inputs) {
            return [true, inputs];
        },
    ) => {
        key = key.toLowerCase();
        events[key] = {
            key,
            channel,
            interface,
            method,
            tail,
            composer,
        };
        channels[channel] = {
            key,
            channel,
            interface,
            method,
            tail,
            composer,
        };

        let queuedListeners = prelisten[key.toLowerCase()];
        if (queuedListeners) {
            let { addEventListener } = module.globals.listener;

            for (let [callback, options] of queuedListeners) {
                addEventListener(key, callback, options);
            }
        }

        delete prelisten[key.toLowerCase()];
    },

    createChannel: (
        key,
        tail = (v) => v,
        composer = function (_, inputs) {
            return [true, inputs];
        },
    ) => {
        module.exports.addEvent(key, null, null, null, tail, composer);
    },

    getByName: (name) => events[name.toLowerCase()],
    getByChannel: (channel) => channels[channel],

    registerCustomCallback: (name, method) => {
        name = name.toLowerCase();
        customChannels[name] = method;
    },
    dispatchCustomEvent: (name, args) => {
        name = name.toLowerCase();
        if (customChannels[name]) customChannels[name].apply(null, args);
        else throw new Error(`no such custom event ${name} `);
    },

    addPrelisten: (name, callback, options) => {
        name = name.toLowerCase();
        prelisten[name] ??= [];
        prelisten[name].push([callback, options]);
    },

    removePrelisten: (name, id) => {
        name = name.toLowerCase();
        prelisten[name] ??= [];
        prelisten[name] = prelisten[name].filter(([_, { _id }]) => _id != id);
    },
});
