let events = {};
let channels = {};

module.exports = {};

// composer: (tailOutput, currentInputs...) =>
//     [pass = false, returnValue]
//     [pass = true, nextInputs...]
//
// tail: (currentOutput, currentInputs...) => correctedOutput
module.exports.addEvent = (
    key,
    channel,
    interface,
    method,
    tail = (v) => v,
    composer = function (_, ...inputs) {
        return [true].concat(inputs);
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
