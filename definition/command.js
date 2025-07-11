let { CommandRegistrationCallback } = net.fabricmc.fabric.api.command.v2;

let { addEvent } = module.require("./build");

addEvent(
    "CommandRegistrationCallback",
    CommandRegistrationCallback.EVENT,
    CommandRegistrationCallback,
    "register",
);
