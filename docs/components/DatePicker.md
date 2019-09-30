---
id: datePicker
title: DatePicker
---
## Description
Dialog which allows the user to select date.

## Example

```javascript
import React from 'react';
import { View, DatePicker } from 'magic-script-components';

export default class MyApp extends React.Component {
  render () {
    return (
      <View name='main-view'>
        <DatePicker label='Pick Date' />
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name        | Type   |   Default Value    | Description                                                                  |
| ----------- | ------ | :----------------: | ---------------------------------------------------------------------------- |
| label       | string |        n/a         | The text label that appears with the DatePicker.                             |
| labelSide   | string |       `top`        | Side enum specifying whether the label appears on the side or top. Only top and left currently supported. |
| defaultDate | string | (current DateTime) | The default date to appear on the picker instead of the placeholder strings. |
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
| color | string | Sets the DatePicker component's color, doesn't affect label.                      |
| date  | number | Sets the Date manually. This will only have an affect when not currently focused. |