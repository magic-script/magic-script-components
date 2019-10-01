---
id: toggle
title: Toggle
---
## Description
Toggle creates a two option, toggleable element. Toggles are generally used in app menus or as action buttons. In addition to the ON/OFF state, Toggles also have a DISABLED/ENABLED state. Toggles can be grouped together and depend on the state of a parent toggle. If the parent toggle is off, the descendent toggles are usually disabled.

## Example

```javascript
<Toggle />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value  | Description                                                                                               |
| ------ | ------ | :------------: | --------------------------------------------------------------------------------------------------------- |
| text   | string |      n/a       | The UTF-8 encoded text to initially set the UiToggle label to.                                            |
| type   | string |     `top`      | Side enum specifying whether the label appears on the side or top. Only top and left currently supported. |
| height | string |      0.0       | The height of the toggle, 0 for default.                                                                  |

## Element Properties

| Name  | Type    | Description                              |
| :---- | :------ | ---------------------------------------- |
| on    | boolean | The ON (true/false) state of the toggle. |

### type options: [ToggleType](../types/ToggleType.md)
