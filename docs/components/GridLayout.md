---
id: gridLayout
title: GridLayout
---

## Description

The GridLayout class automatically lays out elements in a grid with optional padding. The grid layout grows to accommodate additional items based on row and column settings. You can constrain the number of columns, rows, or both. If you constrain only one dimension, the other grows as needed. If the layout has an explicit width, then any items added to it shrinks to fit if they are larger than the width of the layout. All units are in meters, including padding.

## Example

```javascript
import React from "react";
import { View, GridLayout, Text } from "magic-script-components";

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
        <GridLayout
          columns={3}
          rows={3}
          defaultItemAlignment="center-left"
          defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
          localPosition={[-0.25, 0.25, 0]}
        >
          {moons.map((moon, index) => (
            <Text textSize={0.05} key={index} text={moon} />
          ))}
        </GridLayout>
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultItemAlignment | string  | Sets the default item alignment within the grid. The default item alignments are `TOP_LEFT`. This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.                                                                                                                                                                                                                        |
| defaultItemPadding   | vec4    | Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This is set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in. |
| itemAlignment        | string  | Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| itemPadding          | vec4    | Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.                                                                                                                                                                                                                                             |
| skipInvisibleItems   | boolean | Skips invisible items. Setting this value to `true` causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.                                                                                                                                                                       |
| columns              | number  | Sets the number of columns for the grid. The default value of `0` indicates the number of columns can grow to fit items as they are added. Setting the value above `0` locks the grid column dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of columns is set, the grid lays items in row-major order.                                                                                                                                                                                    |
| rows                 | number  | Sets the number of rows for the grid. The default value of `0` indicates the number of rows can grow to fit items as they are added. Setting the value above zero locks the grid row dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of rows is set (and columns is zero), the grid lays items in column-major order.                                                                                                                                                                      |

### defaultItemAlignment options: [Alignment](../types/Alignment.md)

### itemAlignment options: [Alignment](../types/Alignment.md)
