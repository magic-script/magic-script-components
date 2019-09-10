---
id: slider
title: Slider
---

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