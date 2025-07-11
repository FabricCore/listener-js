let {
    HudRenderCallback,
    InvalidateRenderStateCallback,
    LivingEntityFeatureRendererRegistrationCallback,
    LivingEntityFeatureRenderEvents,
} = net.fabricmc.fabric.api.client.rendering.v1;

let { addEvent } = module.require("./build");

addEvent(
    "HudRenderCallbackEvent",
    HudRenderCallback.EVENT,
    HudRenderCallback,
    "onHudRender",
);

addEvent(
    "InvalidateRenderStateCallbackEvent",
    InvalidateRenderStateCallback.EVENT,
    InvalidateRenderStateCallback,
    "onInvalidate",
);

addEvent(
    "LivingEntityFeatureRendererRegistrationCallbackEvent",
    LivingEntityFeatureRendererRegistrationCallback.EVENT,
    LivingEntityFeatureRendererRegistrationCallback,
    "registerRenderers",
);

addEvent(
    "LivingEntityFeatureAllowCapeRenderEvent",
    LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER,
    LivingEntityFeatureRenderEvents.AllowCapeRender,
    "allowCapeRender",
    (b) => b ?? true,
    ([res, args]) => (res ? [true, args] : [false, false]),
);
