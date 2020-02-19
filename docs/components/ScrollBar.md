---
id: scrollBar
title: ScrollBar
---

## Description

The ScrollBar component creates a scroll bar used in conjunction with a ScrollView component. This creates the visual indicator that the content can be scrolled and provides the controls used to scroll the view. By default, the scroll bar is as long as the ScrollView. The ends of the scroll bar cannot be interacted with, so the scroll range is less than the entire length of the scroll bar. You generally do not need to change either.

## Example

```javascript
import React from "react";
import {
  View,
  ScrollView,
  ScrollBar,
  Text,
  LinearLayout
} from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    const alphabet = [
      "Alfa",
      "Bravo",
      "Charlie",
      "Delta",
      "Echo",
      "Foxtrot",
      "Golf",
      "Hotel",
      "India",
      "Juliett",
      "Kilo",
      "Lima",
      "Mike",
      "November",
      "Oscar",
      "Papa",
      "Quebec",
      "Romeo",
      "Sierra",
      "Tango",
      "Uniform",
      "Victor",
      "Whiskey",
      "X-ray",
      "Yankee",
      "Zulu"
    ];

    const aabb = {
      min: [-0.25, -0.45, -0.1],
      max: [0.25, 0.35, 0.1]
    };

    const calculateValue = (number, multiplier) =>
      ((number + 1 * multiplier) % 10) * 0.1;

    return (
      <View name="main-view">
        <Text
          text="Phonetic Alphabet"
          textSize={0.07}
          localPosition={[-0.15, 0.4, 0]}
        />
        <ScrollView scrollBarVisibility="always" scrollBounds={aabb}>
          <ScrollBar length={0.6} thumbSize={0.03} orientation="vertical" />
          <LinearLayout
            defaultItemAlignment="center-left"
            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
            orientation="vertical"
          >
            {alphabet.map((word, index) => (
              <Text
                textSize={0.05}
                key={index}
                text={`${word[0]} - ${word}`}
                textColor={[
                  calculateValue(index, 1),
                  calculateValue(index, 2),
                  calculateValue(index, 3),
                  0.8
                ]}
              />
            ))}
          </LinearLayout>
        </ScrollView>
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description                                                                                                                             |
| ------ | ------ | :-----------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| length  | number |      n/a      | This is the length of the scroll bar. This is a little bit longer than the scroll range (which is the range the scroll bar thumb runs). |
| thickness | number |      `0`      | This is the width of the scroll bar. A user should normally not care about this unless they intend to change the skin of an app.        |

## Element Properties

| Name          | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| :------------ | :----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| thumbSize     | number | Sets the size of the scroll bar thumb. This updates the size of the scroll bar thumb according to the size of the scroll bounds in respect to the size of the scroll content. If the ratio is out of the range 0-1, the thumb is hidden.                                                                                                                                                               |
| thumbPosition | number | Sets the position of the scroll bar thumb along the track according to the value passed. A value of `0` places the thumb at the left or upper most possible position along the track. A value of `1` places the thumb at the right or bottom most possible position along the track. This value must reflect the position of the ScrollView's scroll bounds in respect to ScrollView's scroll content. |
| orientation   | string | Sets how the scroll bar is orientated. This is used only when adding ScrollBar to ScrollView.                                                                                                                                                                                                                                                                                                          |

### orientation options: [Orientation](../types/Orientation.md)
