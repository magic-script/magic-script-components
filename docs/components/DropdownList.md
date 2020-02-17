---
id: dropdownList
title: DropdownList
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='dropdownlist' />​

## Description

The `DropDownList` creates a vertical drop-down list box. Single or multiple items can be selected from a `DropDownList`. Drop-down lists can be flat or nested. When you create nested drop-down lists, only the parent list and the current list are visible at the same time. Drop-down lists that overflow are automatically styled to show that there are more selections.

## Example

```javascript
import React from "react";
import { View, DropdownList, DropdownListItem } from "magic-script-components";

export default class MyApp extends React.Component {
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
      <View name="main-view">
        <DropdownList
          text="Select Moon"
          iconColor={[0.5, 1.0, 0.5, 0.8]}
          onSelectionChanged={this.onSelection}
        >
          {moons.map((moon, index) => (
            <DropdownListItem id={index} label={moon} />
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

| Name | Type   | Default Value | Required | Description                                                          |
| ---- | ------ | :-----------: | :------: | -------------------------------------------------------------------- |
| text | string |      n/a      |    N     | The UTF-8 encoded text to initially set the drop-down list label to. |

## Element Properties

| Name              | Type     | Default Value | Description                                                                                                                                                                                                                                                                                 |
| :---------------- | :------- | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| iconSize          | number   |      n/a      | Sets the button icon size in scene units.                                                                                                                                                                                                                                                   |
| iconColor         | vec4     |      n/a      | Sets the RGBA color of the button icon.                                                                                                                                                                                                                                                     |
| listMaxHeight     | number   |      `0`      | Sets the maximum height of a drop-down list. The default value (`0`) indicates there is no limit and the list grows as long as it needs to. Setting a value greater than zero will set the maximum height such that if a list is larger than the maxiumum height, the list content scrolls. |
| listTextSize      | number   |     0.025     | Sets the size of the list text. If no size set, the list uses the same text size used in the drop-down list menu button itself. If no text is present on the menu button, the default text size is used.                                                                                    |
| maxCharacterLimit | number   |      n/a      | Sets the maximum amount of characters to be used per list item label before adding '...'. The default character limit is `0`, which means there is no limit and the labels scale to the largest item.                                                                                       |
| multiSelect       | boolean  |     false     | Sets the multi-select mode of the drop-down list.                                                                                                                                                                                                                                           |
| showList          | boolean  |     false     | Shows the drop-down list or not.                                                                                                                                                                                                                                                            |
| selected          | _object_ |      n/a      | Sets the selected state of a `DropDownListItem`. This uses the ID set for a particular `DropDownListItem`, which should be unique. If the ID is not unique, the first item with that ID is set. State are updated upon closing and reopening the list when the list is visible.             |

### selected

```javascript
{
    id: <number>,
    selected: <boolean>
}
```