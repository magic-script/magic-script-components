---
id: quad
title: Quad
---


## Description

The Quad component renders a 2D rectangle in your scene and applies a texture to it. You can draw on this node or render stereoscopic images. By default, a quad node renders as a one meter square.

## Example

```javascript
<Quad />
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name             | Type   | Default Value | Required | Description                                                        |
| ---------------- | ------ | :-----------: | :------: | ------------------------------------------------------------------ |
| renderResourceId | BigInt |      n/a      |          | Sets the resource used when drawing the quad component (optional). |

## Element Properties

| Name      | Type   | Default Value | Description                                                                                                                                                                           |
| :-------- | :----- | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| texCoords | [vec2] |               | Sets the texture coordinates of the node being rendered when the resource referenced in `renderResourceId` is a texture. If the render resource is not a texture, this has no effect. |
| viewMode  | string |   full-area   | Sets the current ViewMode to the given value.                                                                                                                                         |
| width     | vec2   |       1       | Sets the custom width.                                                                                                                                                                |
| height    | vec2   |       1       | Sets the custom height.                                                                                                                                                               |

### viewMode options: [ViewMode](../types/ViewMode.md)
