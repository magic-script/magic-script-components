---
id: datePicker
title: DatePicker
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs extension='gif' component='datepicker' />​


## Description

Dialog which allows the user to select date.

## Example

```javascript
import React from "react";
import { View, TimePicker, TextEdit, DatePicker, LinearLayout, Button } from "magic-script-components";

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);

    const date = new Date();
    const startHour=date.getHours() +1
    const endHour=date.getHours() +2

    this.state = { startTime: startHour+":00:00", endTime: endHour+":00:00"};
  }

  onDateConfirmed = event => {
    // event.Date, event.DateString
    console.log("onDateConfirmed event received: ", event);
  };

  onTimeConfirmed = event => {
    // event.Time, event.TimeString
    console.log("onTimeConfirmed event received: ", event);
  };

  render() {
    const {startTime, endTime} = this.state
    return (
      <LinearLayout name="main-view"
        localPosition={[0, 0, 0]}
        alignment="center-center"
        itemPadding={[
          { index: 0, padding: [0, 0, 0.06, 0] },
          { index: 2, padding: [0, 0, 0.04, 0] },
          { index: 3, padding: [0, 0, 0.08, 0] },
        ]}>
        <TextEdit hint='Event Title' height={0.075} textSize={0.07} width={0.7} />

        <LinearLayout orientation="horizontal">
          <DatePicker label="Starts"  labelSide="left" showHint={false} onDateConfirmed={this.onDateConfirmed}/>
          <TimePicker labelSide="left" time={startTime}  timeFormat={"HH:MM p"} showHint={false} onTimeConfirmed={this.onTimeConfirmed} />
        </LinearLayout>

        <LinearLayout orientation="horizontal">
          <DatePicker label="Ends" labelSide="left" showHint={false} onDateConfirmed={this.onDateConfirmed}/>
          <TimePicker labelSide="left" time={endTime} timeFormat={"HH:MM p"} showHint={false} onTimeConfirmed={this.onTimeConfirmed}/>
        </LinearLayout>

        <TextEdit hint='Add notes or comments' multiline={true} height={0.15} textSize={0.05} width={0.7} />

        <View>
          <Button localPosition={[-0.2, 0, 0]} text="Accept" textSize={0.06} roundness={1} />
          <Button localPosition={[0.2, 0, 0]} text="Reject" textSize={0.06} roundness={1} />
        </View>
      </LinearLayout>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name        | Type   |   Default Value    | Required | Description                                                                                                   |
| ----------- | ------ | :----------------: | :------: | ------------------------------------------------------------------------------------------------------------- |
| label       | string |        n/a         |    N     | The text label that appears with the date picker.                                                             |
| labelSide   | string |       `top`        |    N     | Side enum specifying whether the label appears on the side or top. Only top and left are currently supported. |
| defaultDate | string | (current DateTime) |    N     | The default date to appear on the date picker instead of the placeholder strings.                             |
| yearMin     | number |        `-1`        |    N     | The minimum year available to choose from.                                                                    |
| yearMax     | number |        `-1`        |    N     | The maximum year available to choose from.                                                                    |
| dateFormat  | string |    `MM/DD/YYYY`    |    N     | Format of date complies with [DateFormat](https://docs.magicscript.org/api_1.6.0/lumin.ui.DateFormat.html)    |

### LabelSide values:

- bottom
- left
- right
- top

## Element Properties

| Name     | Type    | Default Value | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :------- | :------ | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color    | vec4    |      N/A      | Sets the DatePicker component's color. This does not affect the label.                                                                                                                                                                                                                                                                                                                                                              |
| date     | string  |      N/A      | Sets the date manually. This only has an affect when not currently focused.                                                                                                                                                                                                                                                                                                                                                         |
| showHint | boolean |     false     | To show the selected Date eg. 01/01/2019 or the format hint eg. MM/DD/YYYY. This will only have an affect when not currently focused. The full hint is always displayed on creation. Each field will continue to show the hint, ie MM or DD or YYYYY, until that field is focused. This can override that behavior and display the Date immediately if desired. The full Date will be shown when the user confirms a selected Date. |