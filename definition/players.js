let {
    AttackBlockCallback,
    AttackEntityCallback,
    UseBlockCallback,
    UseEntityCallback,
    UseItemCallback,
} = net.fabricmc.fabric.api.event.player;
let { TypedActionResult } = Yarn.net.minecraft.util;

let { addEvent } = module.require("./build");

addEvent(
    "AttackBlockCallbackEvent",
    AttackBlockCallback.EVENT,
    AttackBlockCallback,
    "interact",
    (b) => b ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

addEvent(
    "AttackEntityCallbackEvent",
    AttackEntityCallback.EVENT,
    AttackEntityCallback,
    "interact",
    (b) => b ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

addEvent(
    "UseBlockCallbackEvent",
    UseBlockCallback.EVENT,
    UseBlockCallback,
    "interact",
    (b) => b ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

addEvent(
    "UseEntityCallbackEvent",
    UseEntityCallback.EVENT,
    UseEntityCallback,
    "interact",
    (b) => b ?? ActionResult.PASS,
    (res, args) => (res == ActionResult.PASS ? [true, args] : [false, res]),
);

addEvent(
    "UseItemCallbackEvent",
    UseItemCallback.EVENT,
    UseItemCallback,
    "interact",
    (b, [player, _, _]) =>
        b ??
        TypedActionResult.pass(
            player.getStackInHand(hand).getItem().getDefaultStack(),
        ),
    (res, args) =>
        res.getResult() == ActionResult.PASS ? [true, args] : [false, res],
);
