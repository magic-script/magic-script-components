---
id: gridLayout
title: GridLayout
---

## Tag: `<GridLayout>`

- #### Lumin Runtime native component - UiGridLayout

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| defaultItemAlignment | string | Sets the default item alignment within the grid. Default item alignments are TOP_LEFT. This will be set for any new items that are added that aren't explicitly specifying alignment. The alignment of each individual item can still be set later if needed. Note that for the right and the bottom alignments to kick in, the containing cell should be, respectively, wider and higher than its content. |
| defaultItemPadding | vec4 | Sets the default padding of each item within the grid, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that aren't explicitly specifying padding. The padding of each individual item can still be set later if needed. Note that padding in a dimension will work only for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding vis-a-vis the height of the row the item is in. |
| itemAlignment | string | Sets the item alignment. Note that for the right and the bottom alignments to kick in, the containing cell should be, respectively, wider and higher than its content. |
| itemPadding | vec4 | Sets the item padding at the specified row and col position. Note that padding in a dimension will work only for items smaller in that dimension than the cell they are in. Large horizontal padding for an item will also contribute to the width of the column the item is in. The same applies for large vertical padding vis-a-vis the height of the row the item is in. |
| skipInvisibleItems | boolean | Skips invisble items. Setting this value true will cause the layout to skip over any invisible items. The layout will check the visibility of each top-level item Node added and if invisible, along with inherited visibility, will skip that Node for layout. Using this setting will affect the displayed grid layout by collapsing the location of invisible items in the grid while the remaining, visible items adjust to fill in those absent locations. |
| columns | number | Sets the number of columns for the grid. The default value of 0 indicates the number of columns can grow to fit items as they are added. Setting the value above 0 will lock the grid column dimension. If both rows and columns are set, columns will take precedence. If neither rows or columns are set, the grid layout will have 1 row and add columns as needed. When the number of columns is set, the grid will lay items in row-major order. |
| rows    | number | Sets the number of rows for the grid. The default value of 0 indicates the number of rows can grow to fit items as they are added. Setting the value above 0 will lock the grid row dimension. If both rows and columns are set, columns will take precedence. If neither rows or columns are set, the grid layout will have 1 row and add columns as needed. When the number of rows is set (and columns is 0), the grid will lay items in column-major order. |

### defaultItemAlignment options: [Alignment](../types/Alignment.md)
### itemAlignment options: [Alignment](../types/Alignment.md)
