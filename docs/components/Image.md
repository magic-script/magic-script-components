---
id: image
title: Image
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='image' />​

## Description

The Image component displays a 2D image from an image file.

## Example

```javascript
import React from "react";
import { View, Image, Button } from "magic-script-components";

export class ExampleImage extends React.Component {
  constructor(props) {
    super(props);
  this.state = { index: 0 };

  this.images=[
    require('../resources/DemoPicture1.jpg'),
    require('../resources/DemoPicture2.jpg'),
    require('../resources/DemoPicture3.jpg'),
    require('../resources/DemoPicture4.jpg')
  ]
}
  onNextClick = eventData => {
    this.setState(state => ({ index: state.index < 3 ? state.index + 1 : 1 }));
  };

  render() {
    const path = this.images[this.state.index]

    return (
      <View>
        <Image
          filePath={path}
          height={0.25}
          width={0.5}
          localPosition={[0.1, 0.1, 0.3]}
        />
        <Button
          localPosition={[0.12, -0.15, 0]}
          width={0.25}
          height={0.1}
          roundness={0.5}
          type="icon"
          iconType="arrow-right"
          text="Next image"
          onClick={this.onNextClick}
        />
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

> Image offers 3 constructors accepting different property sets.

| Name         | Type    | Default Value | Required | Description                                                             |
| ------------ | ------- | :-----------: | :------: | ----------------------------------------------------------------------- |
| filePath     | string  |      n/a      |    N     | The path to the file to render for the image.                           |
| width        | number  |      `0`      |    N     | The width of the image.                                                 |
| height       | number  |      `0`      |    N     | The height of the image.                                                |
| absolutePath | boolean |    `false`    |    N     | Flag that pngFile is an absolute path name, instead of a relative path. |
| useFrame     | boolean |    `false`    |    N     | Specifies whether the image should have a frame.                        |

---

| Name       | Type    | Default Value | Required | Description                                      |
| ---------- | ------- | :-----------: | :------: | ------------------------------------------------ |
| resourceId | BigInt  |      n/a      |    N     | The resource ID to render for the image.         |
| width      | number  |      `0`      |    N     | The width of the image.                          |
| height     | number  |      `0`      |    N     | The height of the image.                         |
| useFrame   | boolean |    `false`    |    N     | Specifies whether the image should have a frame. |

---

| Name   | Type   | Default Value | Required | Description                        |
| ------ | ------ | :-----------: | :------: | ---------------------------------- |
| icon   | string |      n/a      |    N     | The SystemIcon type for the image. |
| height | number |      `0`      |    N     | The height of the image.           |

### icon options: [IconType](../types/IconType.md)

## Element Properties

| Name               | Type    | Default Value | Description                                                                                                                                                     |
| :----------------- | :------ | :-----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color              | vec4    |      n/a      | Sets a color to modulate the image.                                                                                                                             |
| textCoords         | [vec2]  |      n/a      | Sets the texture coordinates used by the image. The texture coordinates must be a list of four coordinates representing the UV coordinates of the four corners. |
| opaque             | boolean |      n/a      | Sets the opacity state of the image.                                                                                                                            |
| ui                 | boolean |      n/a      | Sets whether the image is rendered on UI Layer.                                                                                                                 |
| imageFrameResource | BigInt  |      n/a      | Sets the model resource used for the image frame. Note: Frame models are expected to be one meter high, one meter wide, and centered at the origin.             |
| renderResource     | BigInt  |      n/a      | Sets the render resource used for the image.                                                                                                                    |

## Investigate before release:
- textCoords, opaque, ui, imageFrameResource, renderResource not implemented in Android [[issue tracker](https://github.com/magic-script/magic-script-components/issues/227)]