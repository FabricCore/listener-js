let build = module.require("./defBuilder");

module.exports = {
    get events() {
        return build.getEventObjects();
    },
};
Object.assign(module.exports, build);
Object.assign(module.exports, module.require("./addListen"));
Object.assign(module.exports, module.require("./removeListen"));
