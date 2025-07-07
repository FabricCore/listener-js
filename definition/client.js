let {
    ClientBlockEntityEvents,
    ClientChunkEvents,
    ClientLifecycleEvents,
    ClientTickEvents,
    ItemTooltipCallback,
    ScreenEvents,
} = Packages.net.fabricmc.fabric.api.client.event.lifecycle.v1;
let { ClientCommandRegistrationCallback } =
    Packages.net.fabricmc.fabric.api.client.command.v2;

let { addEvent } = module.require("./build");

addEvent(
    "ClientBlockEntityLoad",
    ClientBlockEntityEvents.BLOCK_ENTITY_LOAD,
    ClientBlockEntityEvents.Load,
    "onLoad",
);

addEvent(
    "ClientBlockEntityUnload",
    ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD,
    ClientBlockEntityEvents.Unload,
    "onUnload",
);

addEvent(
    "ClientChunkLoad",
    ClientChunkEvents.CHUNK_LOAD,
    ClientChunkEvents.Load,
    "onLoad",
);

addEvent(
    "ClientChunkUnload",
    ClientChunkEvents.CHUNK_UNLOAD,
    ClientChunkEvents.Unload,
    "onUnload",
);

addEvent(
    "ClientCommandRegistrationCallback",
    ClientCommandRegistrationCallback.EVENT,
    ClientCommandRegistrationCallback,
    "register",
);

addEvent(
    "ClientStarted",
    ClientLifecycleEvents.CLIENT_STARTED,
    ClientLifecycleEvents.ClientStarted,
    "onClientStarted",
);

addEvent(
    "ClientStopping",
    ClientLifecycleEvents.CLIENT_STOPPING,
    ClientLifecycleEvents.ClientStopping,
    "onClientStopping",
);

addEvent(
    "ClientEndClientTick",
    ClientTickEvents.END_CLIENT_TICK,
    ClientTickEvents.EndTick,
    "onEndTick",
);

addEvent(
    "ClientEndWorldTick",
    ClientTickEvents.END_WORLD_TICK,
    ClientTickEvents.EndWorldTick,
    "onEndTick",
);

addEvent(
    "ClientStartClientTick",
    ClientTickEvents.START_CLIENT_TICK,
    ClientTickEvents.StartTick,
    "onStartTick",
);

addEvent(
    "ClientStartWorldTick",
    ClientTickEvents.START_WORLD_TICK,
    ClientTickEvents.StartWorldTick,
    "onStartTick",
);

addEvent(
    "ClientItemTooltipCallback",
    ItemTooltipCallback.EVENT,
    ItemTooltipCallback,
    "getTooltip",
);

addEvent(
    "ClientScreenAfterInit",
    ScreenEvents.AFTER_INIT,
    ScreenEvents.AfterInit,
    "afterInit",
);

addEvent(
    "ClientScreenBeforeInit",
    ScreenEvents.BEFORE_INIT,
    ScreenEvents.BeforeInit,
    "beforeInit",
);
