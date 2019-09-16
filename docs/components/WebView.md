---
id: webView
title: WebView
---
## Description
WebView renders HTML, CSS, and JavaScript content in a volume. When you enable web inspectors in your app, use web inspector clients, such as Chrome DevTools, to debug the displayed WebView content.

## Example

```javascript
<WebView />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description              |
| ------ | ------ | :-----------: | ------------------------ |
| width  | number |      `0`      | The width of the WebView |
| height | number |      `0`      | the width of the WebView |

## Element Properties
| Name     | Type   | Description                            |
| -------- | ------ | -------------------------------------- |
| url      | string | Set the URL to load in the webview     |
| action   | string | Requests the specified action          |
| scrollBy | vec2   | Scroll webview in the given direction. Expects an array of two numbers: [xPixels, yPixels] |
