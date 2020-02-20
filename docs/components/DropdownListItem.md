---
id: dropdownListItem
title: DropdownListItem
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='dropdownlistitem' />​

## Description

Structure containing information about each item in a drop-down list.

## Example

```javascript
import React from "react";
import { View, DropdownList, DropdownListItem } from "magic-script-components";

export class MyApp extends React.Component {
  state = { selectedId: undefined };

  onSelection = eventData => {
    console.log("Selected items:", eventData.SelectedItems);
  };

  render() {
    const moons = [
      "Europa",
      "Ganymede",
      "Io",
      "Callisto",
      "Valetudo",
      "Amalthea"
    ];

    return (
      <View name="main-view" localPosition={this.props.localPosition}>
        <DropdownList
          text="Select Moon"
          iconColor={[0.5, 1.0, 0.5, 0.8]}
          onSelectionChanged={this.onSelection}
        >
          {moons.map((moon, index) => (
            <DropdownListItem key={moon} id={index} label={moon} />
          ))}
        </DropdownList>
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name  | Type   | Default Value  | Required | Description                                                                                                                                               |
| ----- | ------ | :------------: | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id    | number |       0        |    N     | A unique ID used per drop-down list item. If the ID is not unique, the list item that occurs first is used when a list item with the same ID is selected. |
| label | string | `empty string` |    N     | The text used for the drop-down list item.                                                                                                                |

## Element Properties

| Name     | Type    | Default Value | Description                           |
| -------- | ------- | :-----------: | ------------------------------------- |
| selected | boolean |     false     | Sets the selected state of this item. |
