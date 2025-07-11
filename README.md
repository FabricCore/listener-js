Events are defined manually in `/definition/`

## Usage

```js
let { addEventListener } = require("listener");

let counter = 0;

let listener = addEventListener("clientStartWorldTick", () => {
  counter++;
  console.log(`${counter} ticks has passed`);
});

listener.cancel(); // cancels the listener
```

#### Missing events

As taken from [FabricMC event index](https://wiki.fabricmc.net/tutorial:event_index), which may be outdated.

| Event                                | Reason                          |
| ------------------------------------ | ------------------------------- |
| ClientPickBlockApplyCallback         | Could not find on Fabric GitHub |
| ModifyItemAttributeModifiersCallback | Not found                       |
