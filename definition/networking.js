let { C2SPlayChannelEvents, ClientPlayConnectionEvents } =
    net.fabricmc.fabric.api.client.networking.v1;
let {
    S2CPlayChannelEvents,
    ServerLoginConnectionEvents,
    ServerPlayConnectionEvents,
} = net.fabricmc.fabric.api.networking.v1;

let { addEvent } = module.require("./build");

addEvent(
    "C2SPlayChannelRegisterEvent",
    C2SPlayChannelEvents.REGISTER,
    C2SPlayChannelEvents.Register,
    "onChannelRegister",
);

addEvent(
    "C2SPlayChannelUnregisterEvent",
    C2SPlayChannelEvents.UNREGISTER,
    C2SPlayChannelEvents.Unregister,
    "onChannelUnregister",
);

addEvent(
    "ClientPlayConnectionDisconnectEvent",
    ClientPlayConnectionEvents.DISCONNECT,
    ClientPlayConnectionEvents.Disconnect,
    "onPlayDisconnect",
);

addEvent(
    "ClientPlayConnectionInitEvent",
    ClientPlayConnectionEvents.INIT,
    ClientPlayConnectionEvents.Init,
    "onPlayInit",
);

addEvent(
    "ClientPlayConnectionJoinEvent",
    ClientPlayConnectionEvents.JOIN,
    ClientPlayConnectionEvents.Join,
    "onPlayJoin",
);

addEvent(
    "S2CPlayChannelRegisterEvent",
    S2CPlayChannelEvents.REGISTER,
    S2CPlayChannelEvents.Register,
    "onChannelRegister",
);

addEvent(
    "S2CPlayChannelUnegisterEvent",
    S2CPlayChannelEvents.UNREGISTER,
    S2CPlayChannelEvents.Unregister,
    "onChannelUnregister",
);

addEvent(
    "ServerLoginConnectionDisconnectEvent",
    ServerLoginConnectionEvents.DISCONNECT,
    ServerLoginConnectionEvents.Disconnect,
    "onLoginDisconnect",
);

addEvent(
    "ServerLoginConnectionInitEvent",
    ServerLoginConnectionEvents.INIT,
    ServerLoginConnectionEvents.Init,
    "onLoginInit",
);

addEvent(
    "ServerLoginConnectionQueryStartEvent",
    ServerLoginConnectionEvents.QUERY_START,
    ServerLoginConnectionEvents.QueryStart,
    "onLoginStart",
);

addEvent(
    "ServerPlayConnectionDisconnectEvent",
    ServerPlayConnectionEvents.DISCONNECT,
    ServerPlayConnectionEvents.Disconnect,
    "onPlayDisconnect",
);

addEvent(
    "ServerPlayConnectionInitEvent",
    ServerPlayConnectionEvents.INIT,
    ServerPlayConnectionEvents.Init,
    "onPlayInit",
);

addEvent(
    "ServerPlayConnectionJoinEvent",
    ServerPlayConnectionEvents.JOIN,
    ServerPlayConnectionEvents.Join,
    "onPlayReady",
);
