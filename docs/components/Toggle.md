---
id: toggle
title: Toggle
---

## Description

Toggle creates a two option, toggleable element. Toggles are generally used in app menus or as action buttons. Toggles can be grouped together and depend on the state of a parent toggle. If the parent toggle is off, the descendent toggles are usually disabled.

## Example

```javascript
<Toggle />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description                                                                                                     |
| ------ | ------ | :-----------: | --------------------------------------------------------------------------------------------------------------- |
| text   | string |      n/a      | The UTF-8 encoded text to initially set the Toggle label to.                                                    |
| type   | string |     `top`     | The location of the toggle label. Only placing the label to top and left of the toggle are currently supported. |
| height | string |      0.0      | The height of the toggle, 0 for default.                                                                        |

## Element Properties

| Name | Type    | Description                          |
| :--- | :------ | ------------------------------------ |
| on   | boolean | Sets whether the toggle state is ON. |

### type options: [ToggleType](../types/ToggleType.md)
