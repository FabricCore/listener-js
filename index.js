let defintions = module.require("./definition");

module.exports = {
    defs: () => defintions,
    addDef: (key, channel, interface, method) =>
        (defintions[key] = {
            channel,
            interface,
            method,
        }),
};
