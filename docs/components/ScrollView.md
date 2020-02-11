---
id: scrollView
title: ScrollView
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='scrollview' />​

## Description

The ScrollView component represents a scrollable content view so objects, such as images or text, can overflow the viewable area. The ScrollView creates a 3D box that you specify a minimum and maximum corner that contains all of your content. The scroll bounds sets the viewable area (AABB) of the 3D box. Content outside the scroll bounds is clipped. You can scroll horizontally, vertically, or both. When scrolling, the cursor snaps to contents of the scroll view when gravity wells and snap are enabled.

By default, the scroll view is the size of your prism and scrolls vertically with a .5f scroll rate and a 2.0f activity duration.

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
          <ScrollBar width={0.6} thumbSize={0.03} orientation="vertical" />
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

## Element Properties

| Name                | Type     | Default Value | Description                                                                                                                                                                                                                             |
| :------------------ | :------- | :-----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scrollBarVisibility | string   |               | Sets the visibility mode of any attached scrollbars. The visibility mode affects the visibility of any attached scroll bars.                                                                                                            |
| scrollDirection     | string   |  `vertical`   | Sets the scroll direction for the scroll view. The default is vertical.                                                                                                                                                                 |
| scrollMask          | number   |               | Applies the texture resource as a mask for ScrollView content.                                                                                                                                                                          |
| scrollOffset        | vec3     |               | Sets the scroll content offset manually.                                                                                                                                                                                                |
| scrollSpeed         | number   |               | Sets the scroll speed in scene units per second.                                                                                                                                                                                        |
| scrollValue         | number   |               | Sets the scroll content position manually with a normalized value between 0 and 1.                                                                                                                                                      |
| scrollBounds        | _object_ |      n/a      | Sets the scroll bounds. The bounds are defined within the ScrollView's local coordinate system. The scroll bounds is used to both clip content visually and to automatically clamp content scrolling extents to stay within the bounds. |

### scrollBounds

```javascript
{
    min: <vec3>,
    max: <vec3>
}
```

### scrollBarVisibility options: [ScrollBarVisibility](../types/ScrollBarVisibility.md)

### ScrollDirection options: [ScrollDirection](../types/ScrollDirection.md)

## Investigate before release:
scrollBarVisibility, scrollMask, scrollOffset,scrollSpeed,scrollValue is not implemented in Android