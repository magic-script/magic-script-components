---
id: properties
title: Properties
---

> Properties without _`Default Value`_ are required !

## Common Properties

| Name                | Type    | Default Value  | Description |
| :------------------ | :------ | :------------: | ----------- |
| name                | string  |  empty string  |             |
| localPosition       | vec3    |  [ 0, 0, 0 ]   |             |
| localRotation       | quat    | [ 0, 0, 0, 0 ] |             |
| localScale          | vec3    |                |             |
| localTransform      | mat4    |                |             |
| visible             | boolean |      true      |             |
| parentedBoneName    | string  |                |             |
| skipRaycast         | boolean |                |             |
| triggerable         | boolean |                |             |
| visibilityInherited | boolean |                |             |
| anchorPosition      | vec3    |                |             |
| cursorHoverState    | string  |                |             |
| offset              | vec3    |                |             |

## Common Properties for UI elements

| Name      | Type    | Default Value | LRT Name  | LRT type        |
| :-------- | :------ | :-----------: | :-------- | :-------------- |
| alignment | string  |               | Alignment | lumin.Alignment |
| enabled   | boolean |               | Enabled   | boolean         |
