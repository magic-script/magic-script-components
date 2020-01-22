---
id: platform
title: Platform
---

## Description

The Audio component allows you to play audio resources and 3D sound effects. It supports spatialization and basic controls - such as stop and start - using WAV, MP3, and OGG format files. _Loaded file_ and _Streamed file_ audio components require an audio resource, which is the audio file you want to play.

## Example

```javascript
import React from "react";
import { Platform, Text } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    return (
      <View name="main-view">
        <Text textSize={0.1} textColor={[0.5, 0.5, 0.5, 0.5]}>
          {(Platform.OS, Platform.Version)}
        </Text>
      </View>
    );
  }
}
```

## Element Properties

| Name    | Type   | Default Value | Description       |
| ------- | ------ | :-----------: | ----------------- |
| OS      | string |      n/a      | Name of the OS    |
| Version | string |      n/a      | Version of the OS |
