---
id: slider
title: Slider
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='slider' />​

## Description

The Slider component places a slider into your prism. Use sliders to provide a visual reference to a specific range and the current value within that range, like a volume slider. Sliders can use either icons or labels. The default slider is white and uses 100% opacity for the active part of the slider. Sliders inherit the width from a parent component, such as `RectLayout`. If the slider does not have a parent, it is one meter wide unless otherwise constrained. The default minimum and maximum values in the range are `0` and `1`.

## Example

```javascript
import React from "react";
import { Text, Slider, Image, LinearLayout, View, Prism, Scene } from "magic-script-components";

export default class MyApp extends React.Component {
  state = {
    red: undefined,
    green: undefined,
    blue: undefined,
    alpha: undefined
  };

  onRedChanged = eventData => this.setState({ red: eventData.Value });
  onGreenChanged = eventData => this.setState({ green: eventData.Value });
  onBlueChanged = eventData => this.setState({ blue: eventData.Value });
  onAlphaChanged = eventData => this.setState({ alpha: eventData.Value });

  _setInitialSliderValue = (sliderProps, currentValue, initialValue) => {
    if (currentValue === undefined) {
      sliderProps.value = initialValue;
    }
    return sliderProps;
  };

  render() {
    const sliderProps = { width: 0.8, height: 0.02, min: 0, max: 1 };
    const redProps = this._setInitialSliderValue(
      { ...sliderProps },
      this.state.red,
      0.5
    );
    const greenProps = this._setInitialSliderValue(
      { ...sliderProps },
      this.state.green,
      0.5
    );
    const blueProps = this._setInitialSliderValue(
      { ...sliderProps },
      this.state.blue,
      0.5
    );
    const alphaProps = this._setInitialSliderValue(
      { ...sliderProps },
      this.state.alpha,
      0.5
    );

    const color = [
      this.state.red === undefined ? redProps.value : this.state.red,
      this.state.green === undefined ? greenProps.value : this.state.green,
      this.state.blue === undefined ? blueProps.value : this.state.blue,
      this.state.alpha === undefined ? alphaProps.value : this.state.alpha
    ];

    return (
      <Scene>
        <Prism size={[1, 1, 0.2]} >
          <View name="main-view" alignment={'center-center'}>
            <LinearLayout
              name="main-view"
              orientation="vertical"
              defaultItemAlignment="center-left"
              defaultItemPadding={[0.012, 0.012, 0.012, 0.012]}
              localPosition={[-0.45, 0.45, 0]}
            >
              <Image width={0.8} height={0.3} color={color} useFrame={true} />
              <Text textSize={0.05} textColor={[1, 0, 0, 1]} text="Red" />
              <Slider {...redProps} onSliderChanged={this.onRedChanged} />
              <Text textSize={0.05} textColor={[0, 1, 0, 1]} text="Green" />
              <Slider {...greenProps} onSliderChanged={this.onGreenChanged} />
              <Text textSize={0.05} textColor={[0, 0, 1, 1]} text="Blue" />
              <Slider {...blueProps} onSliderChanged={this.onBlueChanged} />
              <Text textSize={0.05} text="Alpha" />
              <Slider {...alphaProps} onSliderChanged={this.onAlphaChanged} />
            </LinearLayout>
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
| width  | number |      n/a      |    N     | The width of the slider.  |
| height | number |       0       |    N     | The height of the slider. |

## Element Properties

| Name  | Type   | Default Value | Description                                                                                                                       |
| :---- | :----- | :-----------: | --------------------------------------------------------------------------------------------------------------------------------- |
| min   | number |      `0`      | Sets the minimum slider value. This value is set only if it is less than the slider's maximum value. The default value is `0`.    |
| max   | number |      `1`      | Sets the maximum slider value. This value is set only if it is greater than the slider's minimum value. The default value is `1`. |
| value | number |      n/a      | Sets the slider value. The value will be clamped within the current minimum and maximum range.                                    |