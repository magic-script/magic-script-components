---
id: slider
title: Slider
---
## Description
The Slider component places a slider into your prism. Use sliders to provide a visual reference to a specific range and the current value within that range, like a volume slider. Sliders can use either icons or labels. The default slider is white and uses 100% opacity for the active part of the slider. Sliders inherit the width from a parent component, such as `RectLayout`. If the slider does not have a parent, it is one meter wide unless otherwise constrained. The default minimum and maximum values in the range are `0` and `1`.

## Example

```javascript
import React from "react";
import { Text, Slider, Image, LinearLayout } from "magic-script-components";

export default class MyApp extends React.Component {
  state = { red: undefined, green: undefined, blue: undefined, alpha: undefined }

  onRedChanged = (eventData) => this.setState({red: eventData.Value})
  onGreenChanged = (eventData) => this.setState({green: eventData.Value})
  onBlueChanged = (eventData) => this.setState({blue: eventData.Value})
  onAlphaChanged = (eventData) => this.setState({alpha: eventData.Value})

  _setInitialSliderValue = (sliderProps, currentValue, initialValue) => {
    if (currentValue === undefined) {
      sliderProps.value = initialValue;
    }
    return sliderProps;
  }

  render() {
    const sliderProps = { width: 0.8, height: 0.02, min: 0, max: 1 };
    const redProps = this._setInitialSliderValue({ ...sliderProps }, this.state.red, 0.5);
    const greenProps = this._setInitialSliderValue({ ...sliderProps }, this.state.green, 0.5);
    const blueProps = this._setInitialSliderValue({ ...sliderProps }, this.state.blue, 0.5);
    const alphaProps = this._setInitialSliderValue({ ...sliderProps }, this.state.alpha, 0.5);

    const color = [
      this.state.red === undefined ? redProps.value : this.state.red,
      this.state.green === undefined ? greenProps.value : this.state.green,
      this.state.blue === undefined ? blueProps.value : this.state.blue,
      this.state.alpha === undefined ? alphaProps.value : this.state.alpha
    ];

    return (
      <LinearLayout
        name='main-view'
        orientation='vertical'
        defaultItemAlignment='center-left'
        defaultItemPadding={[0.012, 0.012, 0.012, 0.012]}
        localPosition={[-0.45, 0.45, 0]}
      >
        <Image width={0.8} height={0.3} color={color} useFrame={true}/>
        <Text textSize={0.05} textColor={[1, 0, 0, 1]} text='Red'/>
        <Slider {...redProps} onSliderChanged={this.onRedChanged}/>
        <Text textSize={0.05} textColor={[0, 1, 0, 1]} text='Green' />
        <Slider {...greenProps} onSliderChanged={this.onGreenChanged}/>
        <Text textSize={0.05} textColor={[0, 0, 1, 1]} text='Blue'/>
        <Slider {...blueProps} onSliderChanged={this.onBlueChanged}/>
        <Text textSize={0.05} text='Alpha' />
        <Slider {...alphaProps} onSliderChanged={this.onAlphaChanged}/>
      </LinearLayout>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description |
| ------ | ------ | :-----------: | ----------- |
| width  | number |      n/a      | The width of the slider.  |
| height | number |       0       | The height of the slider.      |

## Element Properties

| Name   | Type   | Description |
| :----- | :----- | ----------- |
| min    | number | Sets the minimum slider value. This value is set only if it is less than the slider's maximum value. The default value is `0`. |
| max    | number | Sets the maximum slider value. This value is set only if it is greater than the slider's minimum value. The default value is `1`. |
| value  | number | Sets the slider value. The value will be clamped within the current minimum and maximum range. |
