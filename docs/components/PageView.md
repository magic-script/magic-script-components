---
id: pageView
title: PageView
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='pageview' />​

## Description

The PageView component is used to switch between displaying individual page node hierarchies. Use the PageView component to toggle between individual page node hierarchies. By default, the width and height of the PageView is `0` to allow the page view to expand to fit the content. You can constrain one or both values. There is no padding for views by default. Unless otherwise set, all pages within the view are aligned to the top left.

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

| Name   | Type   | Default Value | Required | Description                                                                                  |
| ------ | ------ | :-----------: | :------: | -------------------------------------------------------------------------------------------- |
| width  | number |      `0`      |    N     | The width of the page view. The default (`0`) allows the view to expand to fit the content.  |
| height | number |      `0`      |    N     | The height of the page view. The default (`0`) allows the view to expand to fit the content. |

## Element Properties

| Name        | Type   | Default Value | Description                               |
| ----------- | ------ | :-----------: | ----------------------------------------- |
| visiblePage | number |      `0`      | The index (zero based) of the added pages |
