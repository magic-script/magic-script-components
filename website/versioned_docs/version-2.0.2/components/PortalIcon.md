---
id: portalIcon
title: PortalIcon
---

## Description

The PortalIcon component represents a portal icon for use in the on-device app Launcher.

## Example

```javascript
import React from "react";
import { View, PortalIcon } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    return (
      <View name="main-view">
        <PortalIcon text="Portal Icon" iconSize="extra-large" />
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name     | Type   | Default Value | Description                                        |
| -------- | ------ | :-----------: | -------------------------------------------------- |
| text     | string |      n/a      | The default, UTF-8 encoded portal icon label text. |
| iconSize | string |    `small`    | One of the built-in sizes for the portal icon.     |

## Element Properties

| Name                     | Type   | Description                                                                                                                                                                                                 |
| :----------------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hoverScale               | number | Sets the overall hover scale of the portal icon component. This value is provided as a multiplier, with `1` being normal scale, `2` being scaled two times normal, etc.                                     |
| hoverZOffset             | number | Sets the overall hover Z-offset of the portal icon component. This value is provided in local space to the portal icon component's +Z axis. Positive values move towards the camera.                        |
| iconActivateAnimation    | string | Sets the icon activate animation name (optional). This is the animation played when the user opens the app.                                                                                                 |
| iconContextMenuAnimation | string | Sets the icon context menu animation name (optional). This is the animation played when the user opens the app settings.                                                                                    |
| iconHoverAnimation       | string | Sets the icon hover animation name (optional). This is the animation played when the user hovers on the icon, but no action is taken.                                                                       |
| iconIdleAnimation        | string | Sets the icon idle animation name (required). This is the default animation state when the user is not interacting with the icon.                                                                           |
| iconHoverPosition        | vec3   | Sets the icon hover position relative to the portal sphere. This value is specified in local space to the portal component and is scaled with the rest of the portal elements during hover scale animation. |
| labelDisplayMode         | string | Sets the display mode for the portal icon label. The default value is kAlways, to always show the label.                                                                                                    |

### iconSize options: [PortalIconSize](../types/PortalIconSize.md)

### labelDisplayMode options: [LabelDisplayMode](../types/LabelDisplayMode.md)
