---
id: webView
title: WebView
---

## Description

WebView renders HTML, CSS, and JavaScript content in a prism. When you enable web inspectors in your app, use web inspector clients, such as Chrome DevTools, to debug the displayed WebView content.



## Example

> | ⚠️ Don't forget to include the `WebView` and `Internet` privileges in your `manifest.xml` file! |
> | -------------------------------------------------------------------------------|
> | `<uses-privilege ml:name="WebView"/>`  |
> | `<uses-privilege ml:name="Internet"/>` |

```javascript
import React from "react";

import { View, WebView, Text } from "magic-script-components";
export default class MyApp extends React.Component {

  render() {

    return (
      <View name='main-view' >
        <Text text='WebView' textSize={0.05} localPosition={[0, 0.45, 0]} />
        <WebView localPosition={[-0.4, 0.4, 0]} width={0.8} height={0.8} url={'http://google.com'}/>
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description               |
| ------ | ------ | :-----------: | ------------------------- |
| width  | number |      `0`      | The width of the WebView. |
| height | number |      `0`      | the width of the WebView. |

## Element Properties

| Name     | Type   | Description                                                                                   |
| -------- | ------ | --------------------------------------------------------------------------------------------- |
| url      | string | Sets the URL to load in the WebView.                                                          |
| action   | string | Requests the specified action.                                                                |
| scrollBy | vec2   | Scrolls the WebView in the given direction. Enter an array of two numbers: [xPixels, yPixels] |

### action options: [WebViewAction](../types/WebViewAction.md)
