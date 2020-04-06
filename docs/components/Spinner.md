---
id: spinner
title: Spinner
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='spinner' />​

## Description

The Spinner component shows the loading state using specific visual effects. There are two types of loading spinners (`sprite-animation`, `particle-package`) with different effects.

## Example

```javascript
import React from "react";
import {
  View,
  Spinner,
  Text,
  LinearLayout
} from "magic-script-components";

export default class MyApp extends React.Component {
   render() {
    return (
      <View>
        <LinearLayout alignment='center-center' defaultItemAlignment='center-center' defaultItemPadding={[0.05, 0, 0, 0]}>
          <Spinner type="sprite-animation" height={0.25} determinate={false} />
          <Text textSize={0.04} >Your content is loading...</Text>
        </LinearLayout>
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name         | Type    | Default Value | Required | Description                                                                             | Lumin | Android |  IOS  |
| ------------ | ------- | :-----------: | :------: | --------------------------------------------------------------------------------------- | :---: | :-----: | :---: |
| type         | string  |      n/a      |          | The loading spinner type (`sprite-animation` or `particle-package`).                    |  👍   |         |       |
| resourceId   | number  |       0       |    N     | The resource ID.                                                                        |  👍   |         |       |
| resourcePath | string  |      ''       |    N     | The resource path in the resource (optional).                                           |  👍   |         |       |
| height       | number  |      `0`      |    N     | The height of the loading spinner (optional).                                           |  👍   |         |       |
| determinate  | boolean |    `false`    |    N     | If `true`, this creates a determinate loading spinner component using default settings. |  👍   |   👍    |  👍   |

## Element Properties

| Name  | Type   | Default Value | Description                                                                                                                                                                                                                                                                                                                     | Lumin | Android |  IOS  |
| :---- | :----- | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---: | :-----: | :---: |
| value | number |      `0`      | Sets a normalized value between 0-1 for loading completeness, with `0` being no progress and `1` fully complete. This is used only when the loading spinner is determinate.                                                                                                                                                     |  👍   |         |       |
| size  | vec2   |               | Sets the loading spinner size. This affects the visual scale of all sprite-based loading spinners but has no affect on the visual scale of a particle-based spinner. Modify the particle files directly to adjust the particle effect size. This does affect, and should be used to adjust, the bounds of all loading spinners. |  👍   |         |       |

### type options: [LoadingSpinnerType](../types/LoadingSpinnerType.md)
