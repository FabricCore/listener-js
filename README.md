Events are defined manually in `/definition/`

## Usage

```js
let { waitUntil } = require("listener");

let counter = 0;

let listener = addEventListener("clientStartWorldTick", () => {
  counter++;
  console.log(`${counter} ticks has passed`);
});

listener.cancel(); // cancels the listener

waitUntil("clientStartWorldTick", () => {
  console.log("This will only run once.");
});
```

#### Missing events

As taken from [FabricMC event index](https://wiki.fabricmc.net/tutorial:event_index), which may be outdated.

| Event                                | Reason                          |
| ------------------------------------ | ------------------------------- |
| ClientPickBlockApplyCallback         | Could not find on Fabric GitHub |
| ModifyItemAttributeModifiersCallback | Not found                       |
| PlayerBreakBlockEvents               | Not found                       |

## Questions

How to deal with UseItemCallback which returns a TypedActionResult? What should be its default value? What to do with the value returned in TypedActionResult.PASS?

TODO: restructure event definitions to match the structure as on the Fabric repository.
