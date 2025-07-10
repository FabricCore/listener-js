let defs = module.require("./definition");

module.exports = {
    get events() {
        return defs.getEventObjects();
    },
};
Object.assign(module.exports, defs);
Object.assign(module.exports, module.require("./addListen"));
