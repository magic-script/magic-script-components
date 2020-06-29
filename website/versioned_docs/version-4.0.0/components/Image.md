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
import React from 'react';
import { View, Image, Text, Scene, Prism } from 'magic-script-components';

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
  onNextClick = eventData => {
    this.setState(state => ({ index: state.index < 3 ? state.index + 1 : 1 }));
  };

  render() {
    return (
      <Scene>
        <Prism size={[1, 1, 0.2]} >
          <View name="main-view" anchorPoint={'center-center'} position={[-0.16, 0, 0]}>
            <Image position={[-0.13, 0, 0]} height={0.17} width={0.17} filePath={require('../../resources/contact1.jpg')} />
            <Text anchorPoint={'center-left'} fontSize={0.07} weight={"bold"} textColor={"#85D834"} position={[0, 0.05, 0]}>
              Lorem Ipsum
            </Text>
            <Image anchorPoint={'center-left'} height={0.07} width={0.07} icon={"send"} position={[0, -0.03, 0]} />
            <Text anchorPoint={'center-left'} fontSize={0.04} textColor={"#e0e0e0"} position={[0.1, -0.03, 0]}>
              lorem.lpsum@magicleap.com
            </Text>
          </View>
        </Prism>
      </Scene>
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

***Lumin only***

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

| Name               | Type    | Default Value | Description                                                                                                                                                     | Lumin | Android |  IOS  |
| :----------------- | :------ | :-----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---: | :-----: | :---: |
| color              | vec4    |      n/a      | Sets a color to modulate the image.                                                                                                                             | 👍|👍|👍|
| textCoords         | [vec2]  |      n/a      | Sets the texture coordinates used by the image. The texture coordinates must be a list of four coordinates representing the UV coordinates of the four corners. | 👍| | |
| opaque             | boolean |      n/a      | Sets the opacity state of the image.                                                                                                                            | 👍|👍 | |
| ui                 | boolean |      n/a      | Sets whether the image is rendered on UI Layer.                                                                                                                 |👍|||
| imageFrameResource | BigInt  |      n/a      | Sets the model resource used for the image frame. Note: Frame models are expected to be one meter high, one meter wide, and centered at the origin.             |👍|||
| renderResource     | BigInt  |      n/a      | Sets the render resource used for the image.                                                                                                                    |👍|||
