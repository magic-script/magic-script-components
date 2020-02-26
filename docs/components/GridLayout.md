---
id: gridLayout
title: GridLayout
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='gridlayout' />​

## Description

The GridLayout class automatically lays out elements in a grid with optional padding. The grid layout grows to accommodate additional items based on row and column settings. You can constrain the number of columns, rows, or both. If you constrain only one dimension, the other grows as needed. If the layout has an explicit width, then any items added to it shrinks to fit if they are larger than the width of the layout. All units are in meters, including padding.

## Example

```javascript
import React from "react";
import { GridLayout, Text, View } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    return (
      <View name="main-view">
        <GridLayout localPosition={[0, 0.5, 0]} width={0.5} height={0.8} rows={2} columns={2}
          itemAlignment={[
            {row: 0, column: 0, alignment: 'top-right'},
            {row: 0, column: 1, alignment: 'bottom-left'},
            {row: 1, column: 0, alignment: 'top-left'},
            {row: 1, column: 1, alignment: 'bottom-right'}
          ]}
        >
          <Text textSize={0.08} text='Europa' />
          <Text textSize={0.06} text='Atlas' />
          <Text textSize={0.1 } text='Callisto' />
          <Text textSize={0.03} text='Dia' />
        </GridLayout>
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name                 | Type     |     Default Value      | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | -------- | :--------------------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultItemAlignment | string   |       `top-left`       |    N     | Sets the default item alignment within the grid. The default item alignments are `TOP_LEFT`. This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.                                                                                                                                                                                                                        |
| defaultItemPadding   | vec4     | `[0.0, 0.0, 0.0, 0.0]` |    N     | Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This is set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in. |
| itemAlignment        | `object` |          n/a           |    N     | Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| itemPadding          | `object` |          n/a           |    N     | Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.                                                                                                                                                                                                                                             |
| skipInvisibleItems   | boolean  |         false          |    N     | Skips invisible items. Setting this value to `true` causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.                                                                                                                                                                       |
| columns              | number   |          `0`           |    N     | Sets the number of columns for the grid. The default value of `0` indicates the number of columns can grow to fit items as they are added. Setting the value above `0` locks the grid column dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of columns is set, the grid lays items in row-major order.                                                                                                                                                                                    |
| rows                 | number   |          `1`           |    N     | Sets the number of rows for the grid. The default value of `0` indicates the number of rows can grow to fit items as they are added. Setting the value above zero locks the grid row dimension. If both rows and columns are set, columns take precedence. If neither rows or columns are set, the grid layout has one row and adds columns as needed. When the number of rows is set (and columns is zero), the grid lays items in column-major order.                                                                                                                                                                      |

### itemAlignment

```javascript
[{
    column: <number>,
    row: <number>,
    alignment: <string>
}]
```

### itemPadding

```javascript
[{
    column: <number>,
    row: <number>,
    padding: <vec4>
}]
```

### defaultItemAlignment options: [Alignment](../types/Alignment.md)

### itemAlignment options: [Alignment](../types/Alignment.md)