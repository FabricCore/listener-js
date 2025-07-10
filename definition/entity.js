let { EntityElytraEvents, EntitySleepEvents } =
    net.fabricmc.fabric.api.entity.event.v1;

let { ActionResult } = net.minecraft.util;

addEvent(
    "EntityElytraAllow",
    EntityElytraEvents.ALLOW,
    EntityElytraEvents.Allow,
    "allowElytraFlight",
    (b) => b ?? true,
    (res, args) => (res ? [res, args] : [false, false]),
);

addEvent(
    "EntityElytraCustom",
    EntityElytraEvents.CUSTOM,
    EntityElytraEvents.Custom,
    "useCustomElytra",
    (b) => b ?? true,
    (res, args) => (res ? [res, args] : [false, false]),
);

addEvent(
    "EntityAllowSleeping",
    EntitySleepEvents.ALLOW_SLEEPING,
    EntitySleepEvents.AllowSleeping,
    "allowSleep",
    (b) => b ?? null,
    (res, args) => (res == null ? [true, args] : [false, res]),
);

addEvent(
    "EntityStartSleeping",
    EntitySleepEvents.START_SLEEPING,
    EntitySleepEvents.StartSleeping,
    "onStartSleeping",
);

addEvent(
    "EntityStopSleeping",
    EntitySleepEvents.STOP_SLEEPING,
    EntitySleepEvents.StopSleeping,
    "onStopSleeping",
);

addEvent(
    "EntityAllowBed",
    EntitySleepEvents.ALLOW_BED,
    EntitySleepEvents.AllowBed,
    "allowBed",
    (b) => b ?? ActionResult.Pass,
    (res, args) => (res == ActionResult.Pass ? [true, args] : [false, res]),
);

addEvent(
    "EntityAllowSleepTime",
    EntitySleepEvents.ALLOW_SLEEP_TIME,
    EntitySleepEvents.AllowSleepTime,
    "allowSleepTime",
    (b) => b ?? ActionResult.Pass,
    (res, args) => (res == ActionResult.Pass ? [true, args] : [false, res]),
);

addEvent(
    "EntityAllowNearbyMonsters",
    EntitySleepEvents.ALLOW_NEARBY_MONSTERS,
    EntitySleepEvents.AllowNearbyMonsters,
    "allowSleepTime",
    (b) => b ?? ActionResult.Pass,
    (res, args) => (res == ActionResult.Pass ? [true, args] : [false, res]),
);

addEvent(
    "EntityAllowResettingTime",
    EntitySleepEvents.ALLOW_RESETTING_TIME,
    EntitySleepEvents.AllowResettingTime,
    "allowResettingTime",
    (b) => b ?? true,
    (res, args) => (res ? [res, args] : [false, false]),
);

addEvent(
    "EntityModifySleepingDirection",
    EntitySleepEvents.MODIFY_SLEEPING_DIRECTION,
    EntitySleepEvents.ModifySleepingDirection,
    "modifySleepingDirection",
    (b, [_, _, direction]) => b ?? direction,
    (res, args) => {
        args[2] = res;
        return [true, args];
    },
);

addEvent(
    "EntityAllowSettingSpawn",
    EntitySleepEvents.ALLOW_SETTING_SPAWN,
    EntitySleepEvents.AllowSettingSpawn,
    "allowSettingSpawn",
    (b) => b ?? true,
    (res, args) => (res ? [res, args] : [false, false]),
);

addEvent(
    "EntitySetBedOccupationState",
    EntitySleepEvents.SET_BED_OCCUPATION_STATE,
    EntitySleepEvents.SetBedOccupationState,
    "setBedOccupationState",
    (b) => b ?? true,
    (res, args) => (res ? [res, args] : [false, false]),
);

addEvent(
    "EntityModifyWakeUpPosition",
    EntitySleepEvents.MODIFY_WAKE_UP_POSITION,
    EntitySleepEvents.ModifyWaveUpPosition,
    "modifyWakeUpPosition",
    (b, [_, _, _, direction]) => b ?? direction,
    (res, args) => {
        args[3] = res;
        return [true, args];
    },
);
