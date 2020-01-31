---
id: tab
title: Tab
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='tab' />​

## Description

The tab component allows you to change a content view using button controls. You can organize an extensive amount of data in a compact form. Only one tab can be active at a time, and the active tab can be scrollable.

## Example

```javascript
import React from "react";
import { LinearLayout, Tab, Text, PageView, Line, Content } from "magic-script-components";

export default class MyApp extends React.Component {
  state = { activePage: 0 }

  onHomeClicked = () => this.setState({ activePage: 0 })
  onAboutClicked = () => this.setState({ activePage: 1 })
  onContactClicked = () => this.setState({ activePage: 2 })

  render() {
    return (
      <LinearLayout
        name='top-layout'
        orientation='vertical'
        defaultItemAlignment="center-left"
      >
        <Text textSize={0.05} text='Tabs' />
        <LinearLayout
          name='tab-page-layout'
          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
          defaultItemAlignment="center-left"
          orientation='vertical'
        >
          <LinearLayout
            name='tab-layout'
            defaultItemAlignment="center-left"
            defaultItemPadding={[0.01, 0.02, 0.01, 0.02]}
            orientation='horizontal'
          >
            <Tab text='Home' onClick={this.onHomeClicked}/>
            <Tab text='About' onClick={this.onAboutClicked}/>
            <Tab text='Contact' onClick={this.onContactClicked}/>
          </LinearLayout>
          <Line points={[
              [-0.35, 0.2, 0],
              [ 0.35, 0.2, 0]
            ]}
          />
          <PageView visiblePage={this.state.activePage}>
            <Content name="page-home">
              <Text textSize={0.05}>Welcome ...</Text>
            </Content>
            <Content name="page-about">
              <Text textSize={0.05}>About us ...</Text>
            </Content>
            <Content name="page-contact">
              <Text textSize={0.05}>Contact ...</Text>
            </Content>
          </PageView>
        </LinearLayout>
      </LinearLayout>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name | Type   | Default Value | Required | Description                                                   |
| ---- | ------ | :-----------: | :------: | ------------------------------------------------------------- |
| text | string |      n/a      |          | The UTF-8 encoded text to initially set the Eclipse label to. |
| type | string |      n/a      |          | The EclipseLabelType                                          |

## [Eclipse Label Types](../types/EclipseLabelType.md)
