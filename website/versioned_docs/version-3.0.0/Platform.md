---
id: platform
title: Platform
---

## Description

The Platform component allows you to get information about platform your app runs.

## Example

```javascript
import React from "react";
import { Platform, Text, Scene, Prism } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    return (
      <Scene>
        <Prism size={[1, 1, 0.2]} >
          <View name="main-view">
            <Text textSize={0.1} textColor={[0.5, 0.5, 0.5, 0.5]}>
              {(Platform.OS, Platform.Version)}
            </Text>
          </View>
        </Prism>
      </Scene>
    );
  }
}
```

## Element Properties

| Name    | Type   | Default Value | Description       |
| ------- | ------ | :-----------: | ----------------- |
| OS      | string |      n/a      | Name of the OS    |
| Version | string |      n/a      | Version of the OS |
