---
id: button
title: Button
---

Button is a component used to interact with an application.

## Example

```javascript
<Button />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name      | Type   | Default Value | Description                                                    |
| --------- | ------ | :-----------: | -------------------------------------------------------------- |
| text      | string |      n/a      | The UTF-8 encoded text to initially set the UiButton label to. |
| width     | number |      `0`      | The width of the button, 0 for default.                        |
| height    | number |      `0`      | The height of the button, 0 for default.                       |
| roundness | number |      1.0      | The ratio of corner rounding (0-1). 1 [default] = fully rounded (circle, capsule), 0 = sharp corner. |

## Element Properties

| Name      | Type   | Description                               |
| :-------- | :----- | ----------------------------------------- |
| iconColor | vec4   | Sets the RGBA color of the button icon.   |
| iconSize  | vec2   | Sets the button icon size in scene units. |
| text      | string | Sets the UTF-8 encoded button text.       |
| textColor | vec4   | Sets the RGBA color of the button text.   |
| textSize  | number | Size of text.                             |
