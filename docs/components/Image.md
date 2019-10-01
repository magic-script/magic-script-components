---
id: image
title: Image
---
## Description
Images display an alignable 2D image from an image resource.

## Example

```javascript
<Image
    filePath="path/to/your/file" 
    height={0.150} 
    localPosition={[0.1, 0.1, 0]} 
    useFrame={true}
    width={0.3}
/>
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

> Image offers 3 constructors accepting different property sets

| Name         | Type    | Default Value | Description                                                             |
| ------------ | ------- | :-----------: | ----------------------------------------------------------------------- |
| filePath     | string  |      n/a      | The path to the file to render for the image.                           |
| width        | number  |      n/a      | The width of the image.                                                 |
| height       | number  |      n/a      | The height of the image.                                                |
| absolutePath | boolean |    `false`    | Flag that pngFile is an absolute path name, instead of a relative path. |
| useFrame     | boolean |    `false`    | Specifies whether the image should have a frame.                        |

---

| Name       | Type    | Default Value | Description                                      |
| ---------- | ------- | :-----------: | ------------------------------------------------ |
| resourceId | BigInt  |      n/a      | The resource ID to render for the image.         |
| width      | number  |      n/a      | The width of the image.                          |
| height     | number  |      n/a      | The height of the image.                         |
| useFrame   | boolean |    `false`    | Specifies whether the image should have a frame. |

---

| Name   | Type   | Default Value | Description                        |
| ------ | ------ | :-----------: | ---------------------------------- |
| icon   | string |      n/a      | The SystemIcon type for the image. |
| height | number |      n/a      | The height of the image.           |

### icon options: [IconType](../types/IconType.md)

## Element Properties

| Name               | Type    | Description                              |
| :----------------- | :------ | ---------------------------------------- |
| color              | vec4    | Sets a color to modulate the image with. |
| textCoords         | [vec2]  | Sets the texture coordinates used by the Image. The texture coordinates must be a list of 4 coordinates representing the UV coordinates of the 4 corners. |
| opaque             | boolean | Sets the opacity state of the image. |
| ui                 | boolean | Sets if the image needs to be rendered on UI Layer. |
| imageFrameResource | BigInt  | Sets the model resource used for the image frame. Note: Frame models are expected to be sized at 1 meter high and 1 meter wide and to be centered at the origin. |
| renderResource     | BigInt  | Sets the render resource used for the image. |
