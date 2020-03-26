---
id: properties
title: Properties
---

> | ⚠️ Properties without _`Default Value`_ are required! |
> | ----------------------------------------------------- |
>

## Common Properties

| Name                | Type    | Default Value  | Description                                                                                                                                                                                                                  |
| :------------------ | :------ | :------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                | string  |  empty string  | Name of the Node                                                                                                                                                                                                             |
| localPosition       | vec3    |  [ 0, 0, 0 ]   | Local position of this Node                                                                                                                                                                                                  |
| localRotation       | quat    | [ 0, 0, 0, 0 ] | Local rotation of this Node                                                                                                                                                                                                  |
| localScale          | vec3    |                | Local scale of this Node                                                                                                                                                                                                     |
| localTransform      | mat4    |                | Local transform of this Node                                                                                                                                                                                                 |
| visible             | boolean |      true      | Visibility state of the Node                                                                                                                                                                                                 |
| parentedBoneName    | string  |                | When parented to a parents bone with parentedBoneName property                                                                                                                                                               |
| skipRaycast         | boolean |                | Skip raycast state of the Node                                                                                                                                                                                               |
| triggerable         | boolean |                | Whether this node should handle trigger presses directly                                                                                                                                                                     |
| visibilityInherited | boolean |                | Flags that the visibility state of this node should be inherited by its children. This does not change a child's visibility. A visibility of false will take precedence over a visibility of true.                           |
| anchorPosition      | vec3    |                | Sets the anchor position of the Node's transform. Rotations, scaling, and translations of the transform will take place around this point. Changing the anchor point will recalculate the transform to the new anchor point. |
| cursorHoverState    | string  |                | Sets the cursor hover state for this Node. Setting this will set the cursor state when this Node or any descendant Nodes, that are not explicitly set, are hovered over.                                                     |
| offset              | vec3    |                | An optional offset to position the Node within the parent Node (default is `[0,0,0]`).                                                                                                                                       |

## Common Properties for UI elements

| Name      | Type    | Description                                                                                                                                                                                                                                                                                                                                                                      |
| :-------- | :------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alignment | string  | Sets the UI Nodes's self alignment relative to Node position. Alignment is defined as what side the Node position is in relative to the planar, XY element bounds. A horizontal left alignment would result in the node position being on the left side of the bounds area. A vertical top alignment would result in the node position being on the top side of the bounds area. |
| enabled   | boolean | Sets the enabled state. Disabled UI Nodes don't send out certain input events, such as OnPress, OnRelease, OnActivate, etc.                                                                                                                                                                                                                                                      |
