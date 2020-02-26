---
id: colorPicker
title: ColorPicker
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='colorpicker' />​


## Description

Dialog which allows the user to select color.

## Example

```javascript
import React from 'react';
import { View, ColorPicker } from 'magic-script-components';

export default class MyApp extends React.Component {
    onColorChanged = event => {
        // event.Color
        console.log("onColorChanged event received: ", event);
    };

    onColorConfirmed = event => {
        // event.Color
        console.log("onColorConfirmed event received: ", event);
    };

    onColorCanceled = event => {
        // event.Color
        console.log("onColorCanceled event received: ", event);
    };

    render() {
        return (
            <View name="main-view">
                <ColorPicker
                    color={[1, 0.5, 1, 0.8]}
                    onColorChanged={this.onColorChanged}
                    onColorConfirmed={this.onColorConfirmed}
                    onColorCanceled={this.onColorCanceled} />
            </View>
        );
    }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties
| Name   | Type   |    Default Value     | Required | Description                             | Lumin Os |  IOS  | Android |
| ------ | ------ | :------------------: | :------: | --------------------------------------- | :------: | :---: | :-----: |
| color  | string | [1.0, 1.0, 1.0, 1.0] |    N     | The initial color for the color picker. |    👍    |  👍   |   👍    |
| height | number |          0           |    N     | Optional height for the color picker.   |    👍    |       |         |

## Element Properties

| Name  | Type   |    Default Value     | Description                             |
| :---- | :----- | :------------------: | --------------------------------------- |
| color | string | [1.0, 1.0, 1.0, 1.0] | The initial color for the color picker. |

## Component specific events
| Name             | Event Field     | Description                              |
| :--------------- | :-------------- | ---------------------------------------- |
| onColorChanged   | `Color: string` | Notifiy when color in picker has changed |
| onColorConfirmed | `Color: string` | Notify when user confirm selected color  |
| onColorCanceled  | `Color: string` | Notify when user cancel selected color   |