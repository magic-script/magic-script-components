---
id: colorPicker
title: ColorPicker
---
## Description
Dialog which allows the user to select color.

## Example

```javascript
import React from 'react';
import { View, ColorPicker } from 'magic-script-components';

export default class MyApp extends React.Component {
  render () {
    return (
      <View name='main-view'>
        <ColorPicker color={[1, 0.5, 1, 0.8]} />
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   |    Default Value     | Description                             |
| ------ | ------ | :------------------: | --------------------------------------- |
| color  | string | [1.0, 1.0, 1.0, 1.0] | The initial color for the color picker. |
| height | number |          0           | Optional height for the color picker.   |

## Element Properties

| Name  | Type   | Description                             |
| :---- | :----- | --------------------------------------- |
| color | string | The initial color for the color picker. |
