---
id: linearLayout
title: LinearLayout
---
## Description
The LinearLayout component automatically lays out multiple elements in a horizontal or vertical orientation. When you add items, they are appended to the previously added item. By default, the linear layout grows to fit vertical content without padding. Padding order is top, right, bottom, left. The default content alignment is top left for items added to the layout.

## Example

```javascript
<LinearLayout />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultItemAlignment | string  | Sets the default item alignment within the grid. The default item alignments are `TOP_LEFT`. This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.                                                                                                                                                                                                                                   |
| defaultItemPadding   | vec4    | Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in. |
| itemAlignment        | string  | Sets the item alignment. Note that for the right and the bottom alignments to be visible, the containing cell should be, respectively, wider and higher than its content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| itemPadding          | vec4    | Sets the item padding at the specified row and column position. Note that padding in a dimension only works for items smaller in that dimension than the cell they are in. Large horizontal padding for an item also contributes to the width of the column the item is in. The same applies for large vertical padding in relation to the height of the row the item is in.                                                                                                                                                                                                                                                                   |
| skipInvisibleItems   | boolean | Skips invisible items. Setting this value to `true` causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout. Using this setting affects the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations.                                                                                                                                                                                |
| orientation          | string  | Sets the horizontal or vertical orientation of this linear layout. The default orientation is `Vertical`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### defaultItemAlignment options: [Orientation](../types/Alignment.md)

### itemAlignment options: [Alignment](../types/Alignment.md)

### orientation options: [Orientation](../types/Orientation.md)
