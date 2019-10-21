---
id: datePicker
title: DatePicker
---

## Description

Dialog which allows the user to select date.

## Example

```javascript
import React from "react";
import { View, DatePicker } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    return (
      <DatePicker
        label="Select Date"
        labelSide="left"
        color={[0.112, 0.655, 0.766, 1]}
        defaultDate="03/21/2019"
        showHint={false}
        height={0.5}
        yearMin={1990}
        yearMax={2020}
        localScale={[2, 2, 0]}
      />
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name        | Type   |   Default Value    | Description                                                                                                   |
| ----------- | ------ | :----------------: | ------------------------------------------------------------------------------------------------------------- |
| label       | string |        n/a         | The text label that appears with the date picker.                                                             |
| labelSide   | string |       `top`        | Side enum specifying whether the label appears on the side or top. Only top and left are currently supported. |
| defaultDate | string | (current DateTime) | The default date to appear on the date picker instead of the placeholder strings.                             |
| yearMin     | number |        `-1`        | The minimum year available to choose from.                                                                    |
| yearMax     | number |        `-1`        | The maximum year available to choose from.                                                                    |

### LabelSide values:

- bottom
- left
- right
- top

## Element Properties

| Name     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :------- | :------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color    | vec4    | Sets the DatePicker component's color. This does not affect the label.                                                                                                                                                                                                                                                                                                                                                              |
| date     | string  | Sets the date manually. This only has an affect when not currently focused.                                                                                                                                                                                                                                                                                                                                                         |
| showHint | boolean | To show the selected Date eg. 01/01/2019 or the format hint eg. MM/DD/YYYY. This will only have an affect when not currently focused. The full hint is always displayed on creation. Each field will continue to show the hint, ie MM or DD or YYYYY, until that field is focused. This can override that behavior and display the Date immediately if desired. The full Date will be shown when the user confirms a selected Date. |
