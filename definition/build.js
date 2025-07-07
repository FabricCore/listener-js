let events = {};

module.exports = {};

// composer: (tailOutput, currentInputs...) =>
//     [pass = false, returnValue]
//     [pass = true, nextInputs...]
//
// tail: (currentOutput, currentInputs...) => correctedOutput
module.exports.addEvent = (key, channel, interface, method, composer, tail) =>
    (events[key] = {
        channel,
        interface,
        method,
        composer,
        tail,
    });

module.exports.getEvents = () => {
    return events;
};
