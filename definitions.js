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

let events = {
    ClientBlockEntityLoadEvent: {
        channel: ClientBlockEntityEvents.BLOCK_ENTITY_LOAD,
        interface: ClientBlockEntityEvents.Load,
        method: "onLoad",
    },
    ClientBlockEntityUnloadEvent: {
        channel: ClientBlockEntityEvents.BLOCK_ENTITY_UNLOAD,
        interface: ClientBlockEntityEvents.Unload,
        method: "onUnload",
    },
    ClientChunkLoadEvent: {
        channel: ClientChunkEvents.CHUNK_LOAD,
        interface: ClientChunkEvents.Load,
        method: "onLoad",
    },
    ClientChunkUnloadEvent: {
        channel: ClientChunkEvents.CHUNK_UNLOAD,
        interface: ClientChunkEvents.Unload,
        method: "onUnload",
    },
    ClientCommandRegistrationCallbackEvent: {
        channel: ClientCommandRegistrationCallback.EVENT,
        interface: ClientCommandRegistrationCallback,
        method: "register",
    },
    ClientStartedEvent: {
        channel: ClientLifecycleEvents.CLIENT_STARTED,
        interface: ClientLifecycleEvents.ClientStarted,
        method: "onClientStarted",
    },
    ClientStoppingEvent: {
        channel: ClientLifecycleEvents.CLIENT_STOPPING,
        interface: ClientLifecycleEvents.ClientStopping,
        method: "onClientStopping",
    },
    ClientEndClientTickEvent: {
        channel: ClientTickEvents.END_CLIENT_TICK,
        interface: ClientTickEvents.EndTick,
        method: "onEndTick",
    },
    ClientEndWorldTickEvent: {
        channel: ClientTickEvents.END_WORLD_TICK,
        interface: ClientTickEvents.EndWorldTick,
        method: "onEndTick",
    },
    ClientStartClientTickEvent: {
        channel: ClientTickEvents.START_CLIENT_TICK,
        interface: ClientTickEvents.StartTick,
        method: "onStartTick",
    },
    ClientStartWorldTickEvent: {
        channel: ClientTickEvents.START_WORLD_TICK,
        interface: ClientTickEvents.StartWorldTick,
        method: "onStartTick",
    },
    ClientItemTooltipCallbackEvent: {
        channel: ItemTooltipCallback.EVENT,
        interface: ItemTooltipCallback,
        method: "getTooltip",
    },
    ClientScreenAfterInitEvent: {
        channel: ScreenEvents.AFTER_INIT,
        interface: ScreenEvents.AfterInit,
        method: "afterInit",
    },
    ClientScreenBeforeInitEvent: {
        channel: ScreenEvents.BEFORE_INIT,
        interface: ScreenEvents.BeforeInit,
        method: "beforeInit",
    },
};
