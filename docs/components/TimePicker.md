---
id: timePicker
title: TimePicker
---
## Description
The TimePicker component is a dialog that allows the user to select a time.

## Example

```javascript
import React from 'react';
import { View, TimePicker } from 'magic-script-components';

export default class MyApp extends React.Component {
  render () {
    return (
      <View name='main-view'>
        <TimePicker label='Pick Time' />
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name        | Type   | Default Value  | Description                                                                                               |
| ----------- | ------ | :------------: | --------------------------------------------------------------------------------------------------------- |
| label       | string |      n/a       | The text label that appears with the TimePicker.                                                          |
| labelSide   | string |     `top`      | Side enum specifying whether the label appears on the side or top. Only `top` and `left` are currently supported. |
| defaultTime | string | (current Time) | The default time to set for the TimePicker.                                                               |

### LabelSide values:

- bottom
- left
- right
- top

## Element Properties

| Name  | Type   | Description                                                           |
| :---- | :----- | --------------------------------------------------------------------- |
| color | string | Sets the TimePicker component's color. This doesn't affect the label. |
| time  | number | Sets the time. This ignores values that aren't in `hh:mm:ss` format.  |
| showHint | boolean | To show the selected Time eg. 12:30:00 or the format hint eg. hh:mm:ss. This will only have an affect when not currently focused. The full hint is always displayed on creation. Each field will continue to show the hint, eg. hh or mm or ss, until that field is focused. This can override that behavior and display the Time immediately if desired. The full Time will be shown when the user confirms a selected Time. |