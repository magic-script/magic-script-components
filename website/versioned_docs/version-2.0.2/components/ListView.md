---
id: listView
title: ListView
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='listview' />​

## Description

The ListView is a scrollable, selectable list of items. It adds a background quad to the items, including padding. Items can be grouped in horizontal or vertical lists.

## Example

```javascript
import React from "react";
import {
  ScrollBar,
  ListView,
  ListViewItem,
  Text
} from "magic-script-components";

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
      <ListView localPosition={[-0.25, 0.25, 0]} width={0.5} height={0.5}>
        <ScrollBar length={0.5} thumbSize={0.03} />
        {moons.map((moon, index) => (
          <ListViewItem>
            <Text key={moon} textSize={0.1}>
              {moon}
            </Text>
          </ListViewItem>
        ))}
      </ListView>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Required | Description                                                                       |
| ------ | ------ | :-----------: | :------: | --------------------------------------------------------------------------------- |
| width  | number |      `0`      |    N     | The width of the list view. The default (`0`) allows the list to grow as needed.  |
| height | number |      `0`      |    N     | The height of the list view. The default (`0`) allows the list to grow as needed. |

## Element Properties

| Name                 | Type     |     Default Value      | Description                                                                                                                                                                                                                                                                                                     |
| -------------------- | -------- | :--------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cursorEdgeScrollMode | string   |          n/a           | Sets the cursor edge scroll mode for this list view.                                                                                                                                                                                                                                                            |
| defaultItemAlignment | string   |       `top-left`       | Sets the default item alignment within the list. Default item alignments are `TOP_LEFT`. This is set for any new items that are added that don't explicitly specify alignment. The alignment of each individual item can be set later if needed.                                                                |
| defaultItemPadding   | vec4     | `[0.0, 0.0, 0.0, 0.0]` | Sets the default padding of each item within the list, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left. This is set for any new items that are added that don't explicitly specify padding. The padding of each individual item can be set later if needed. |
| orientation          | string   |       `vertical`       | Sets the orientation of this list view. The default orientation is `Vertical`.                                                                                                                                                                                                                                  |
| scrollBarVisibility  | string   |        `always`        | Sets the visibility mode of the scrollbars attached.                                                                                                                                                                                                                                                            |
| scrollingEnabled     | boolean  |         `true`         | Sets whether list view scrolling is enabled or not.                                                                                                                                                                                                                                                             |
| scrollSpeed          | number   |         `0.1`          | Sets the scroll speed in scene units per second.                                                                                                                                                                                                                                                                |
| scrollValue          | number   |          `0`           | Sets the scroll content position manually with a normalized value between 0 and 1.                                                                                                                                                                                                                              |
| scrollToItem         | number   |          n/a           | Sets the index of the item you would like to scroll to.                                                                                                                                                                                                                                                         |
| skipInvisibleItems   | boolean  |        `false`         | Skips invisible items. Setting this value to `true` causes the layout to skip over any invisible items. The layout checks the visibility of each top-level item node added and, if invisible, along with inherited visibility, skips that node for layout.                                                      |
| itemAlignment        | _object_ |          n/a           | Sets the item alignment at the specified index.                                                                                                                                                                                                                                                                 |
| itemPadding          | _object_ |          n/a           | Sets the item padding at the specified index.                                                                                                                                                                                                                                                                   |

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

### cursorEdgeScrollMode options: [CursorEdgeScrollMode](../types/CursorEdgeScrollMode.md)

### defaultItemAlignment options: [Alignment](../types/Alignment.md)

### orientation options: [Orientation](../types/Orientation.md)

### scrollBarVisibility options: [ScrollBarVisibility](../types/ScrollBarVisibility.md)

### itemAlignment.alignment options: [Alignment](../types/Alignment.md)

## Events

- onScrollChanged