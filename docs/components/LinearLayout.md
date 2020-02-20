---
id: linearLayout
title: LinearLayout
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='linearlayout' />​

## Description

The LinearLayout component automatically lays out multiple elements in a horizontal or vertical orientation. When you add items, they are appended to the previously added item. By default, the linear layout grows to fit vertical content without padding. Padding order is top, right, bottom, left. The default content alignment is top left for items added to the layout.

## Example

```javascript
import React from "react";
import { View, LinearLayout, Text } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    const moons = [
      "Europa",
      "Ganymede",
      "Io",
      "Callisto",
      "Valetudo",
      "Amalthea",
      "Metis",
      "Ananke",
      "Carme"
    ];

    return (
      <View name="main-view">
        <LinearLayout
          defaultItemAlignment="center-left"
          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
          localPosition={[-0.1, 0.25, 0]}
        >
          {moons.map((moon, index) => (
            <Text textSize={0.05} key={index} text={moon} />
          ))}
        </LinearLayout>
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name                 | Type     |     Default Value      | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | -------- | :--------------------: | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultItemAlignment | string   |       `top-left`       |    N     | Sets the default item alignment within the grid. The default item alignments are `TOP_LEFT`. This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.                                                                                                                                                                                                                             |
| defaultItemPadding   | vec4     | `[0.0, 0.0, 0.0, 0.0]` |    N     | Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in. |
| itemAlignment        | `object` |          n/a           |    N     | Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| itemPadding          | `object` |          n/a           |    N     | Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.                                                                                                                                                                                                                                                      |
| skipInvisibleItems   | boolean  |         false          |     N    | Skips invisible items. Setting this value to `true` causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.                                                                                                                                                                            |
| orientation          | string   |       `vertical`       |    N     | Sets the horizontal or vertical orientation of this linear layout. The default orientation is `Vertical`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |


### itemAlignment

```javascript
[{
    index: <number>,
    alignment: <string>
}]
```

### itemPadding

```javascript
[{
    index: <number>,
    padding: <vec4>
}]
```

### defaultItemAlignment options: [Orientation](../types/Alignment.md)

### itemAlignment options: [Alignment](../types/Alignment.md)

### orientation options: [Orientation](../types/Orientation.md)