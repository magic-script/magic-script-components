---
id: quad
title: Quad
---
## Description
The Quad component renders a 2D rectangle in your scene and applies a texture to it. You can draw on this node or render stereoscopic images. By default, a quad node renders as a 1 meter square.

## Example

```javascript
<Quad />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name             | Type   | Default Value | Description                                                      |
| ---------------- | ------ | :-----------: | ---------------------------------------------------------------- |
| renderResourceId | BigInt |      n/a      | Sets the resource to be used when drawing the QuadNode. Optional |

## Element Properties

| Name      | Type   | Description                                                                                                                                                          |
| :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| texCoords | [vec2] | Set the texture coordinates of the node being rendered, if the resource is a texture. If the type of the render resource is not a texture, this will have no effect. |
| viewMode  | string | Set the current ViewMode to the given value.                                                                                                                         |
| size      | vec2   | Set the custom size, which is by default one: [1, 1].                                                                                                                |

### viewMode options: [ViewMode](../types/ViewMode.md)
