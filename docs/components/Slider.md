---
id: slider
title: Slider
---
## Description
The Slider class places a slider into your volume. Use sliders to provide a visual reference to a specific range and the current value within that range, like a volume slider. You can create two types of sliders: horizontal and radial. Horizontal sliders can use either icons or labels. Radial sliders must use icons. The default slider is white and uses 100% opacity for the active part of the slider. Sliders inherit the width from a parent node, such as RectLayout. If the slider does not have a parent, it is one meter wide unless otherwise constrained. The default minimum and maximum values in the range are 0 and 1.

## Example

```javascript
<Slider />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description |
| ------ | ------ | :-----------: | ----------- |
| width  | number |      n/a      | Width       |
| height | number |       0       | Height      |

## Element Properties

| Name   | Type   | Description |
| :----- | :----- | ----------- |
| min    | number | Sets the min slider value. This min value is set only if it is less than the slider's max value. |
| max    | number | Sets the slider min and max values. These values are set only if min is less than max. Default values for min and max are 0 and 1. |
| value  | number | Sets the slider value. The value will be clamped within the current min and max range. |