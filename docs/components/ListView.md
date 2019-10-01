---
id: listView
title: ListView
---
## Description
The ListView is a scrollable, selectable list of items. It adds a background quad to the items, including padding. Items can be grouped in horizontal or vertical lists.

## Example

```javascript
<ListView />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties
| Name   | Type   | Default Value | Description |
| ------ | ------ | :-----------: | ----------- |
| width  | number |      `0`      | The width of the list view. The default (0) allows the list to grow to content.  |
| height | number |      `0`      | The height of the list view. The default (0) allows the list to grow to content. |

## Element Properties
| Name                 | Type     | Description |
| -------------------- | -------- | ----------- |
| cursorEdgeScrollMode | string   | Sets the cursor edge scroll mode for this list view. |
| defaultItemAlignment | string   | Sets the default item alignment within the list. Default item alignments are TOP_LEFT. This will be set for any new items that are added that aren't explicitly specifying alignment. The alignment of each individual item can still be set later if needed. |
| defaultItemPadding   | vec4     | Sets the default padding of each item within the list, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This will be set for any new items that are added that aren't explicitly specifying padding. The padding of each individual item can still be set later if needed. |
| orientation          | string   | Sets the orientation of this list view. The default orientation is Vertical. |
| scrollBarVisibility  | string   | Sets the vibility mode of the scrollbar(s) attached. |
| scrollingEnabled     | boolean  | Sets whether the list view scrolling is enabled or not. |
| scrollSpeed          | number   | Sets the scroll speed in scene units per second. |
| scrollValue          | number   | Sets the scroll content position manually with normalized value between 0 and 1. |
| scrollToItem         | number   | The index of the item you would like to scroll to. |
| skipInvisibleItems   | boolean  | Skips invisble items. Setting this value to true will cause the layout to skip over any invisible items. The layout will check the visibility of each top-level item Node added and if invisible, along with inherited visibility, will skip that Node for layout. |
| itemAlignment        | _object_ | Sets the item alignment at the specified index. |
| itemPadding          | _object_ | Sets the item padding at the specified index.   |

### itemAlignment
```javascript
{
    index: <number>,
    alignment: <string>
}
```

### itemPadding
```javascript
{
    index: <number>,
    padding: <vec4>
}
```

### cursorEdgeScrollMode options: [CursorEdgeScrollMode](../types/CursorEdgeScrollMode.md)
### defaultItemAlignment options: [Alignment](../types/Alignment.md)
### orientation options: [Orientation](../types/Orientation.md)
### scrollBarVisibility options: [ScrollBarVisibility](../types/ScrollBarVisibility.md)
### itemAlignment.alignment options: [Alignment](../types/Alignment.md)

## Events
- onScrollChanged
