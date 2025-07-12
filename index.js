let build = module.require("./build");

module.exports = {
    get events() {
        return build.getEventObjects();
    },
};
Object.assign(module.exports, build);
Object.assign(module.exports, module.require("./addListen"));
