---
id: portalIcon
title: PortalIcon
---

## Tag: `<PortalIcon>`

- #### Lumin Runtime native component - UiPortalIcon

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name  | Type   | Default Value | Description |
| ----- | ------ | :-----------: | ----------- |
| text  | string |      n/a      | The UTF-8 encoded text to initially set the portal icon label to. |
| iconSize | string |  `small`   | One of the built-in sizes for the portal icon. |

## Element Properties

| Name       | Type   | Description |
| :--------- | :----- | :---------- |
| hoverScale | number | Sets the overall hover scale of the portal icon element. This value is provided as a multiplier, with 1 being normal scale, 2 being scaled two times normal, etc. |
| hoverZOffset | number | Sets the overall hover Z offset of the portal icon element. This value is provided in local space to the portal icon element +Z axis. Positive values will move towards the camera. |
| iconActivateAnimation | string | Sets the icon activate animation name. |
| iconContextMenuAnimation | string | Sets the icon ContextMenu animation name. |
| iconHoverAnimation | string | Sets the icon hover animation name. |
| iconIdleAnimation | string | Sets the icon idle animation name. |
| iconHoverPosition | vec3 | Sets the icon hover position relative to portal circle. This value is specified in local space to the portal element and gets scaled along with the rest of the portal elements during hover scale animation. |
| labelDisplayMode | string | Sets the display mode for the protal icon label. The default value is kAlways, to always show the label. |

### iconSize options: [PortalIconSize](../types/PortalIconSize.md)
### labelDisplayMode options: [LabelDisplayMode](../types/LabelDisplayMode.md)
