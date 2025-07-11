let { DynamicRegistrySetupCallback } = net.fabricmc.fabric.api.event.registry;

let { addEvent } = module.require("./build");

addEvent(
    "DynamicRegistrySetupCallbackEvent",
    DynamicRegistrySetupCallback.EVENT,
    DynamicRegistrySetupCallback,
    "onRegistrySetup",
);
