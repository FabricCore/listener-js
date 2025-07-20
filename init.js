let { addEventListener, getListenersFromSource } = module.require("./");

// unregister listener if module is unloaded
module.globals.listener.addEventListener(
    "beforePullyModuleUnload",
    (name) => {
        for (let id of getListenersFromSource(name)) {
            module.globals.listener.removeEventListener(id);
        }
    },
    { prelisten: true, id: "listener-unloader" },
);
