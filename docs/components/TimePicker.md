---
id: timePicker
title: TimePicker
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='timepicker' />​

## Description

The TimePicker component is a dialog that allows the user to select a time.

## Example

```javascript
import React from "react";
import { View, TimePicker } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    return (
      <View name="main-view" localPosition={[-0.05, 0, 0]} localScale={[2,2,2]}>
        <TimePicker label="Pick Time" />
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name        | Type   | Default Value  | Required | Description                                                                                                       |
| ----------- | ------ | :------------: | :------: | ----------------------------------------------------------------------------------------------------------------- |
| label       | string |      n/a       |    N     | The text label that appears with the TimePicker.                                                                  |
| labelSide   | string |     `top`      |    N     | Side enum specifying whether the label appears on the side or top. Only `top` and `left` are currently supported. |
| defaultTime | string | (current Time) |    N     | The default time to set for the TimePicker.                                                                       |

### LabelSide values:

- bottom
- left
- right
- top

## Element Properties

| Name     | Type    | Default Value | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------- | :------ | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color    | string  |               | Sets the TimePicker component's color. This doesn't affect the label.                                                                                                                                                                                                                                                                                                                                                         |
| time     | number  |               | Sets the time. This ignores values that aren't in `hh:mm:ss` format.                                                                                                                                                                                                                                                                                                                                                          |
| showHint | boolean |               | To show the selected Time eg. 12:30:00 or the format hint eg. hh:mm:ss. This will only have an affect when not currently focused. The full hint is always displayed on creation. Each field will continue to show the hint, eg. hh or mm or ss, until that field is focused. This can override that behavior and display the Time immediately if desired. The full Time will be shown when the user confirms a selected Time. |
