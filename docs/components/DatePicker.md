---
id: datepicker
title: DatePicker
---

## Tag: `<DatePicker>`

- #### Lumin Runtime native component - UiDatePickerNode

## [Common Events](../Events.md)

## [Common Properties](../Properties.md)

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
