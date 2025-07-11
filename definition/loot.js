let { LootTableEvents } = net.fabricmc.fabric.api.loot.v2;

let { addEvent } = module.require("./build");

addEvent(
    "LootTableLoadedEvent",
    LootTableEvents.ALL_LOADED,
    LootTableEvents.Loaded,
    "onLootTablesLoaded",
);

addEvent(
    "LootTableModifyEvent",
    LootTableEvents.MODIFY,
    LootTableEvents.Modify,
    "modifyLootTable",
);

addEvent(
    "LootTableReplaceEvent",
    LootTableEvents.REPLACE,
    LootTableEvents.Replace,
    "replaceLootTable",
    (res, [_, _, _, original]) => res ?? original,
    (res, args) => {
        args[3] = res;
        return args;
    },
);
