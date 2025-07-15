let events = {};
let channels = {};

let eventObjects = {};

module.exports = {};

// composer: (tailOutput, [currentInputs...]) =>
//     [pass = false, returnValue]
//     [pass = true, [nextInputs...]]
//
// tail: (currentOutput, [currentInputs...]) => correctedOutput
module.exports.addEvent = (
    key,
    channel,
    interface,
    method,
    tail = (v) => v,
    composer = function (_, inputs) {
        return [true, inputs];
    },
) => {
    eventObjects[key] = {
        register: (callback, opts = {}) => {
            return module.globals.listener.addEventListener(
                key,
                callback,
                opts,
            );
        },
        wait: (callback, opts = {}) => {
            module.globals.listener.waitUntil(key, callback, opts);
        },
    };

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
};

module.exports.getByName = (name) => {
    return events[name.toLowerCase()];
};

module.exports.getByChannel = (channel) => {
    return channels[channel];
};

module.exports.getEventObjects = () => {
    return eventObjects;
};
