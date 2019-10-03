---
id: slider
title: Slider
---
## Description
The Slider component places a slider into your prism. Use sliders to provide a visual reference to a specific range and the current value within that range, like a volume slider. Sliders can use either icons or labels. The default slider is white and uses 100% opacity for the active part of the slider. Sliders inherit the width from a parent component, such as `RectLayout`. If the slider does not have a parent, it is one meter wide unless otherwise constrained. The default minimum and maximum values in the range are `0` and `1`.

## Example

```javascript
<Slider />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description |
| ------ | ------ | :-----------: | ----------- |
| width  | number |      n/a      | The width of the slider.  |
| height | number |       0       | The height of the slider.      |

## Element Properties

| Name   | Type   | Description |
| :----- | :----- | ----------- |
| min    | number | Sets the minimum slider value. This value is set only if it is less than the slider's maximum value. The default value is `0`. |
| max    | number | Sets the maximum slider value. This value is set only if it is greater than the slider's minimum value. The default value is `1`. |
| value  | number | Sets the slider value. The value will be clamped within the current minimum and maximum range. |
