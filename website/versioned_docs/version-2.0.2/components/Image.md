---
id: image
title: Image
---

## Description

The Image component displays a 2D image from an image file.

## Example

```javascript
import React from "react";
import { View, Image, Button } from "magic-script-components";

export default class MyApp extends React.Component {
  state = { index: 1 };

  onNextClick = eventData => {
    this.setState(state => ({ index: state.index < 4 ? state.index + 1 : 1 }));
  };

  render() {
    const path = `res/DemoPicture${this.state.index}.jpg`;

    return (
      <View>
        <Image
          filePath={path}
          height={0.25}
          width={0.5}
          localPosition={[0.1, 0.1, 0]}
        />
        <Button
          localPosition={[0.12, -0.15, 0]}
          width={0.25}
          height={0.1}
          roundness={0.5}
          type="icon"
          iconType="arrow-right"
          onClick={this.onNextClick}
        />
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

> Image offers 3 constructors accepting different property sets.

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

| Name               | Type    | Description                                                                                                                                                     |
| :----------------- | :------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color              | vec4    | Sets a color to modulate the image.                                                                                                                             |
| textCoords         | [vec2]  | Sets the texture coordinates used by the image. The texture coordinates must be a list of four coordinates representing the UV coordinates of the four corners. |
| opaque             | boolean | Sets the opacity state of the image.                                                                                                                            |
| ui                 | boolean | Sets whether the image is rendered on UI Layer.                                                                                                                 |
| imageFrameResource | BigInt  | Sets the model resource used for the image frame. Note: Frame models are expected to be one meter high, one meter wide, and centered at the origin.             |
| renderResource     | BigInt  | Sets the render resource used for the image.                                                                                                                    |
