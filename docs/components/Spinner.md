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
  GridLayout,
  LinearLayout,
  Spinner,
  Button
} from "magic-script-components";

export class ExampleSpinner extends React.Component {
  state = { progress: 0 };

  clickHanlder = eventData =>
    this.setState(state => ({
      progress: state.progress < 1 ? state.progress + 0.2 : 0
    }));

  render() {
    return (
      <GridLayout
        name="main-view"
        rows={3}
        columns={2}
        defaultItemAlignment="center-center"
        defaultItemPadding={[0.015, 0.015, 0.015, 0.015]}
        localPosition={[-0.45, 0.45, 0]}
      >
        <Spinner type="sprite-animation" height={0.2} determinate={false} />
        <Spinner
          type="sprite-animation"
          height={0.2}
          determinate={true}
          value={0.5}
        />
        <Spinner type="particle-package" height={0.2} determinate={false} />
        <LinearLayout
          orientation="horizontal"
          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
        >
          <Spinner
            type="particle-package"
            height={0.2}
            determinate={true}
            value={this.state.progress}
          />
          <Button
            type="icon"
            iconType="add"
            height={0.1}
            onClick={this.clickHanlder}
          />
        </LinearLayout>
      </GridLayout>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name         | Type    | Default Value | Required | Description                                                                             |
| ------------ | ------- | :-----------: | :------: | --------------------------------------------------------------------------------------- |
| type         | string  |      n/a      |          | The loading spinner type (`sprite-animation` or `particle-package`).                    |
| resourceId   | number  |       0       |    N     | The resource ID.                                                                        |
| resourcePath | string  |      ''       |    N     | The resource path in the resource (optional).                                           |
| height       | number  |      `0`      |    N     | The height of the loading spinner (optional).                                           |
| determinate  | boolean |    `false`    |    N     | If `true`, this creates a determinate loading spinner component using default settings. |

## Element Properties

| Name  | Type   | Default Value | Description                                                                                                                                                                                                                                                                                                                     |
| :---- | :----- | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value | number |       `0`        | Sets a normalized value between 0-1 for loading completeness, with `0` being no progress and `1` fully complete. This is used only when the loading spinner is determinate.                                                                                                                                                     |
| size  | vec2   |               | Sets the loading spinner size. This affects the visual scale of all sprite-based loading spinners but has no affect on the visual scale of a particle-based spinner. Modify the particle files directly to adjust the particle effect size. This does affect, and should be used to adjust, the bounds of all loading spinners. |

### type options: [LoadingSpinnerType](../types/LoadingSpinnerType.md)
