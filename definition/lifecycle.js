let { CommonLifecycleEvents, ServerLifecycleEvents } =
    net.fabricmc.fabric.api.event.lifecycle.v1;

let { addEvent } = module.require("./build");

addEvent(
    "TagsLoadedEvent",
    CommonLifecycleEvents.TAGS_LOADED,
    CommonLifecycleEvents.TagsLoaded,
    "onTagsLoaded",
);

addEvent(
    "ServerAfterSaveEvent",
    ServerLifecycleEvents.AFTER_SAVE,
    ServerLifecycleEvents.AfterSave,
    "onAfterSave",
);

addEvent(
    "ServerBeforeSaveEvent",
    ServerLifecycleEvents.BEFORE_SAVE,
    ServerLifecycleEvents.BeforeSave,
    "onBeforeSave",
);

addEvent(
    "ServerEndDataPackReloadEvent",
    ServerLifecycleEvents.END_DATA_PACK_RELOAD,
    ServerLifecycleEvents.EndDataPackReload,
    "endDataPackReload",
);

addEvent(
    "ServerStartedEvent",
    ServerLifecycleEvents.SERVER_STARTED,
    ServerLifecycleEvents.ServerStarted,
    "onServerStarted",
);

addEvent(
    "ServerStartingEvent",
    ServerLifecycleEvents.SERVER_STARTING,
    ServerLifecycleEvents.ServerStarting,
    "onServerStarting",
);

addEvent(
    "ServerStoppedEvent",
    ServerLifecycleEvents.SERVER_STOPPED,
    ServerLifecycleEvents.ServerStopped,
    "onServerStopped",
);

addEvent(
    "ServerStoppingEvent",
    ServerLifecycleEvents.SERVER_STOPPING,
    ServerLifecycleEvents.ServerStopping,
    "onServerStopping",
);

addEvent(
    "ServerStartDataPackEvent",
    ServerLifecycleEvents.START_DATA_PACK_RELOAD,
    ServerLifecycleEvents.StartDataPackReload,
    "startDataPackReload",
);

addEvent(
    "ServerSyncDataPackContents",
    ServerLifecycleEvents.SYNC_DATA_PACK_CONTENTS,
    ServerLifecycleEvents.SyncDataPackContents,
    "onSyncDataPackContents",
);
