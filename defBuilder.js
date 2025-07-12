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
        register: (callback, { priority, id }) => {
            return module.globals.listener.addEventListener(callback, {
                priority: priority ?? 10000,
                id,
            });
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
    channels[key] = {
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
