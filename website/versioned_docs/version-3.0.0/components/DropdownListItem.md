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
import { View, DropdownList, DropdownListItem, LinearLayout, Text } from "magic-script-components";

export  class MyApp extends React.Component {
constructor(props) {
    super(props);

    this.stateList = [
      "New",
      "In Progress",
      "On Hold",
      "Resolved",
      "Closed",
      "Canceled"
    ];

    this.state = { selectedState: "Select" };
  }

  onSelectedStateChanged = event => {
    if (event.SelectedItems.length > 0) {
      const item = event.SelectedItems[0];
      this.setState({ selectedState: item.label });
    }
  };

  render() {
    const { selectedState } = this.state;

    return (
      <View name="main-view" localPosition={this.props.localPosition} >
        <LinearLayout
          alignment={'center-center'}
          defaultItemAlignment={'center-center'}
          defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
          orientation={'horizontal'}
        >
          <Text textSize={0.03}>State:</Text>
          <DropdownList
            textSize={0.03}
            text={selectedState}
            onSelectionChanged={this.onSelectedStateChanged}
          >
            {this.stateList.map((item, index) => (
              <DropdownListItem key={item} id={index} label={item} />
            ))}
          </DropdownList>
        </LinearLayout>
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
