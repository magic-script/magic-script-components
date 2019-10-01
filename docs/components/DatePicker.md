---
id: datePicker
title: DatePicker
---
## Description
Dialog which allows the user to select date.

## Example

```javascript
<DatePicker
    label='This is label'
    labelSide='left'
    defaultDate='03/21/1990'
    color={[0.23, 0.13, 0.98, 1]}
    height={0.5}
    yearMin={1990}
    yearMax={2020}
    localScale={[2, 2, 0]}
/>
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name        | Type   |   Default Value    | Description                                                                  |
| ----------- | ------ | :----------------: | ---------------------------------------------------------------------------- |
| label       | string |        n/a         | The text label that appears with the date picker.                             |
| labelSide   | string |       `top`        | Side enum specifying whether the label appears on the side or top. Only top and left are currently supported. |
| defaultDate | string | (current DateTime) | The default date to appear on the date picker instead of the placeholder strings. |
| yearMin     | number |        `-1`        | The minimum year available to choose from.                                   |
| yearMax     | number |        `-1`        | The maximum year available to choose from.                                   |

### LabelSide values:

- bottom
- left
- right
- top

## Element Properties

| Name  | Type   | Description                                                                       |
| :---- | :----- | --------------------------------------------------------------------------------- |
| color | vec4   | Sets the DatePicker component's color. This does not affect the label.            |
| date  | string | Sets the date manually. This only has an affect when not currently focused.       |
