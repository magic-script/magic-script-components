---
id: webView
title: WebView
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='webview' />​

## Description

WebView renders HTML, CSS, and JavaScript content in a prism. When you enable web inspectors in your app, use web inspector clients, such as Chrome DevTools, to debug the displayed WebView content.

## Example

> | ⚠️ Don't forget to include the `WebView` and `Internet` privileges in your `manifest.xml` file! |
> | -------------------------------------------------------------------------------|
> | `<uses-privilege ml:name="WebView"/>`  |
> | `<uses-privilege ml:name="Internet"/>` |

```javascript
import React from "react";
import { View, WebView, Prism, Scene } from "magic-script-components";

export class ExampleWebView extends React.Component {

  render() {
    return (
      <Scene>
        <Prism size={[1, 1, 0.2]} >
          <View name="main-view" alignment={'center-center'}>
            <WebView width={1} height={0.8} url={'https://www.magicleap.com'} />
          </View>
        </Prism>
      </Scene>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Required | Description               |
| ------ | ------ | :-----------: | :------: | ------------------------- |
| width  | number |      n/a      |    Y     | The width of the WebView. Must be greater than `0` |
| height | number |      n/a      |    Y     | the width of the WebView. Must be greater than `0` |

## Element Properties

| Name     | Type   | Default Value | Description                                                                                   |
| -------- | ------ | :-----------: | --------------------------------------------------------------------------------------------- |
| url      | string |      n/a      | Sets the URL to load in the WebView.                                                          |
| action   | string |      n/a      | Requests the specified action.                                                                |
| scrollBy | vec2   |      n/a      | Scrolls the WebView in the given direction. Enter an array of two numbers: [xPixels, yPixels] |

### action options: [WebViewAction](../types/WebViewAction.md)
