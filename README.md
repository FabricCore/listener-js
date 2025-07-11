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

| Event                                | Reason                          |
| ------------------------------------ | ------------------------------- |
| ClientPickBlockApplyCallback         | Could not find on Fabric GitHub |
| ModifyItemAttributeModifiersCallback | Not found                       |
