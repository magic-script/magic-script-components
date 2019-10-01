---
id: datePicker
title: DatePicker
---

## Example

```javascript
<DatePicker
    label='This is label'
    labelSide='left'
    height={0.5}
    defaultDate='03/21/1990'
    yearMin={1990}
    yearMax={2100}
    localScale={[2, 2, 0]}
/>
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name        | Type   |   Default Value    | Description                                                                                               |
| ----------- | ------ | :----------------: | --------------------------------------------------------------------------------------------------------- |
| label       | string |        n/a         | The text label that appears with the DatePicker.                                                          |
| labelSide   | string |       `top`        | Side enum specifying whether the label appears on the side or top. Only top and left currently supported. |
| defaultDate | string | (current DateTime) | The default date to appear on the picker instead of the placeholder strings.                              |
| yearMin     | number |        `-1`        | The minimum year available to choose from.                                                                |
| yearMax     | number |        `-1`        | The maximum year available to choose from.                                                                |

### LabelSide values:

- bottom
- left
- right
- top

## Element Properties

| Name  | Type   | Description                                                                       |
| :---- | :----- | --------------------------------------------------------------------------------- |
| color | string | Sets the DatePicker component's color, doesn't affect label.                      |
| date  | number | Sets the Date manually. This will only have an affect when not currently focused. |
