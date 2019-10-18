---
id: spinner
title: Spinner
---
## Description
The Spinner component shows the loading state using specific visual effects. There are two types of loading spinners (`sprite-animation`, `particle-package`) with different effects.

## Example

```javascript
import React from "react";
import { GridLayout, LinearLayout, Spinner, Button } from "magic-script-components";

export default class MyApp extends React.Component {
  state = { progress: 0 }

  clickHanlder = (eventData) => this.setState(state => ({ progress: state.progress < 1 ? state.progress + 0.2 : 0 }));

  render() {
    return (
      <GridLayout
        name='main-view'
        rows={3}
        columns={2}
        defaultItemAlignment='center-center'
        defaultItemPadding={[0.015, 0.015, 0.015, 0.015]}
        localPosition={[-0.45, 0.45, 0]}
      >
        <Spinner type='sprite-animation' height={0.2} determinate={false}/>
        <Spinner type='sprite-animation' height={0.2} determinate={true} value={0.5}/>
        <Spinner type='particle-package' height={0.2} determinate={false}/>
        <LinearLayout
          orientation='horizontal'
          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
        >
          <Spinner type='particle-package' height={0.2} determinate={true} value={this.state.progress}/>
          <Button type='icon' iconType='add' height={0.1} onClick={this.clickHanlder}/>
        </LinearLayout>
      </GridLayout>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name         | Type    | Default Value | Description |
| ------------ | ------- | :-----------: | ----------- |
| type         | string  |      n/a      | The loading spinner type (`sprite-animation` or `particle-package`). |
| resourceId   | number  |       0       | The resource ID. |
| resourcePath | string  |      ''       | The resource path in the resource (optional). |
| height       | number  |      `0`      | The height of the loading spinner (optional). |
| determinate  | boolean |    `false`    | If `true`, this creates a determinate loading spinner component using default settings. |

## Element Properties

| Name  | Type   | Description |
| :---- | :----- | ----------- |
| value | number | Sets a normalized value between 0-1 for loading completeness, with `0` being no progress and `1` fully complete. This is used only when the loading spinner is determinate. |
| size  | vec2   | Sets the loading spinner size. This affects the visual scale of all sprite-based loading spinners but has no affect on the visual scale of a particle-based spinner. Modify the particle files directly to adjust the particle effect size. This does affect, and should be used to adjust, the bounds of all loading spinners.|

### type options: [LoadingSpinnerType](../types/LoadingSpinnerType.md)
