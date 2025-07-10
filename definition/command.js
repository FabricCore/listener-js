let { CommandRegistrationCallback } = Packages.CommandRegistrationCallback;

let { addEvent } = module.require("./build");

addEvent(
    "CommandRegistrationCallback",
    CommandRegistrationCallback.EVENT,
    CommandRegistrationCallback,
    register
)
