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
          localPosition={[0.1, -0.25, 0]}
          text="Switch Page"
          onToggleChanged={this.onSwitchHandler}
        />
        <PageView alignment="center-center" name="page-view" visiblePage={this.state.pageIndex}>
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

| Name   | Type   | Default Value | Required | Description                                                                                                     |
| ------ | ------ | :-----------: | :------: | --------------------------------------------------------------------------------------------------------------- |
| text   | string |      n/a      |    N     | The UTF-8 encoded text to initially set the Toggle label to.                                                    |
| type   | string |     `default` |    N     | The type of the toggle, can be either `default`, `radio` or `checkbox`. The `default` stands for switch type.   |
| height | string |      0.0      |    N     | The height of the toggle, 0 for default.                                                                        |

## Element Properties

| Name | Type    | Default Value | Description                          |
| :--- | :------ | :-----------: | ------------------------------------ |
| on   | boolean |    `false`    | Sets whether the toggle state is ON. |

### type options: [ToggleType](../types/ToggleType.md)
