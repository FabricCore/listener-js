let { ServerMessageEvents } = net.fabricmc.fabric.api.message.v1;

let { addEvent } = module.require("./build");

addEvent(
    "ServerAllowChatMessageEvent",
    ServerMessageEvents.ALLOW_CHAT_MESSAGE,
    ServerMessageEvents.AllowChatMessage,
    "allowChatMessage",
    (b) => b ?? true,
    ([res, args]) => (res ? [true, args] : [false, false]),
);

addEvent(
    "ServerAllowCommandMessageEvent",
    ServerMessageEvents.ALLOW_COMMAND_MESSAGE,
    ServerMessageEvents.AllowCommandMessage,
    "allowCommandMessage",
    (b) => b ?? true,
    ([res, args]) => (res ? [true, args] : [false, false]),
);

addEvent(
    "ServerAllowGameMessageEvent",
    ServerMessageEvents.ALLOW_GAME_MESSAGE,
    ServerMessageEvents.AllowGameMessage,
    "allowGameMessage",
    (b) => b ?? true,
    ([res, args]) => (res ? [true, args] : [false, false]),
);

addEvent(
    "ServerChatMessageEvent",
    ServerMessageEvents.CHAT_MESSAGE,
    ServerMessageEvents.ChatMessage,
    "onChatMessage",
);

addEvent(
    "ServerCommandMessageEvent",
    ServerMessageEvents.COMMAND_MESSAGE,
    ServerMessageEvents.CommandMessage,
    "onCommandMessage",
);

addEvent(
    "ServerGameMessageEvent",
    ServerMessageEvents.GAME_MESSAGE,
    ServerMessageEvents.GameMessage,
    "onGameMessage",
);
