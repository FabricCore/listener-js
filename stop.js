module.globals ??= {};
module.globals.listener ??= {};
module.globals.listener.events ??= {};

for (let key in module.globals.listener.events) {
    module.globals.listener.events[key].registeredListeners = {};
    module.globals.listener.events[key].orderedListeners = [];
}
