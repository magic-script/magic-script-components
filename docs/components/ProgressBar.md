---
id: progressBar
title: ProgressBar
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='progressbar' />​

## Description

The ProgressBar component is used to show the progress of an event. By default, the component creates a horizontal progress bar. You cannot modify the progress bar size after you create it.

## Example

```javascript
import React from "react";
import { View, ProgressBar } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    const colors = {
      beginColor: [0.25, 0, 25, 0.8],
      endColor: [0.75, 0, 75, 0.8]
    };

    return (
      <View name="main-view">
        <ProgressBar
          width={0.8}
          height={0.03}
          value={0.6}
          progressColor={colors}
        />
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Required | Description                                      |
| ------ | ------ | :-----------: | :------: | ------------------------------------------------ |
| width  | number |      n/a      |          | The width of the progress bar.                   |
| height | number |      n/a      |          | The height of the progress bar, `0` for default. |

## Element Properties

| Name          | Type     |  Default Value   | Description                                                                                                                                              |
| :------------ | :------- | :--------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| min           | number   |        0         | Sets the progress bar minimum value. Default value for min is `0`. The minimum value is set only if it is less than the progress bar's maximum value.    |
| max           | number   |        0         | Sets the progress bar maximum value. Default value for max is `1`. The maximum value is set only if it is greater than the progress bar's minimum value. |
| value         | number   |        0         | Sets the progress bar value. The value is constrained within the current min and max range.                                                              |
| progressColor | _object_ | `<white, white>` | Sets the progress bar indicator color.                                                                                                                   |

### progressColor

```javascript
{
    beginColor: <vec4>,
    endColor: <vec4>
}
```

## Investigate before release:
Android default width=0.5, height=0.004