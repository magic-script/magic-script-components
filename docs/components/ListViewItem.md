---
id: listViewItem
title: ListViewItem
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='listviewitem' />​

## Description

The ListViewItem creates the parent node and container for items in a list view. Each individual list item is contained in a ListViewItem, which is parented to a ListView. The ListViewItem automatically creates a background quad that represents the bounds of the item in the list view.

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

    const oddColor = [0.25, 0.5, 0.75, 0.8];
    const evenColor = [0.75, 0.5, 0.25, 0.8];

    return (
      <ListView localPosition={[-0.15, 0.25, 0]} width={0.5} height={0.6}>
        <ScrollBar width={0.5} thumbSize={0.03} />
        {moons.map((moon, index) => (
          <ListViewItem backgroundColor={index % 2 ? evenColor : oddColor}>
            <Text key={index} textSize={0.1}>
              {moon}
            </Text>
          </ListViewItem>
        ))}
      </ListView>
    );
  }
}
```

## Element Properties

| Name            | Type | Required | Description                |
| --------------- | ---- | -------- | -------------------------- |
| backgroundColor | vec4 |          | Sets the background color. |
