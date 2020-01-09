---
id: toggle
title: Toggle
---

## Description

Toggle creates a two option, toggleable element. Toggles are generally used in app menus or as action buttons. Toggles can be grouped together and depend on the state of a parent toggle. If the parent toggle is off, the descendent toggles are usually disabled.

## Example

```javascript
import React from "react";
import { View, PageView, Content, Text, Toggle } from "magic-script-components";
export default class MyApp extends React.Component {
  state = { pageIndex: 0 };
  onSwitchHandler = eventData => {
    this.setState({ pageIndex: eventData.On ? 1 : 0 });
  };
  render() {
    return (
      <View name="main-view">
        <Toggle
          localPosition={[0, 0.25, 0]}
          text="Switch Page"
          onToggleChanged={this.onSwitchHandler}
        />
        <PageView name="page-view" visiblePage={this.state.pageIndex}>
          <Content name="page-0">
            <Text textSize={0.1}>Page One</Text>
          </Content>
          <Content name="page-1">
            <Text textSize={0.1}>Page Two</Text>
          </Content>
        </PageView>
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description                                                                                                     |
| ------ | ------ | :-----------: | --------------------------------------------------------------------------------------------------------------- |
| text   | string |      n/a      | The UTF-8 encoded text to initially set the Toggle label to.                                                    |
| type   | string |     `top`     | The location of the toggle label. Only placing the label to top and left of the toggle are currently supported. |
| height | string |      0.0      | The height of the toggle, 0 for default.                                                                        |

## Element Properties

| Name | Type    | Description                          |
| :--- | :------ | ------------------------------------ |
| on   | boolean | Sets whether the toggle state is ON. |

### type options: [ToggleType](../types/ToggleType.md)
