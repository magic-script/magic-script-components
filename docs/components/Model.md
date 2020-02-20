---
id: model
title: Model
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='model' />​

## Description

The Model component renders a static or animated 3D model in your scene. Lumin Runtime uses a proprietary material file format called a kmat to bind materials to renderable surfaces. When creating your model, ensure you use <material_name>.kmat to reference the material. Your textures are referenced in the kmat file. We recommend creating kmat files with the Lumin Runtime Editor.

## Example

```javascript
import React from "react";
import { Model, View } from "magic-script-components";

export class ExampleModel extends React.Component {
  render() {
    return (
      <View>
        <Model 
          localScale={[0.3, 0.3, 0.3]} 
          modelPath={require('../resources/static.glb')} 
        />
      </View>
    );
  }
}
```

- FBX file format is currently supported on Magic Leap One.

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name                | Type     | Default Value | Required | Description                                                                                                                 |
| ------------------- | -------- | :-----------: | :------: | --------------------------------------------------------------------------------------------------------------------------- |
| modelPath           | string   |      n/a      |          | File name of the model resource to load. By default this is assumed to be a relative path from the executable file.         |
| materialPath        | string   |      n/a      |          | File name of the material resource to load. By default this is assumed to be a relative path from the executable file.      |
| importScale         | number   |      1.0      |    N     | The scale that is applied to this resource.                                                                                 |
| texturePaths        | [string] |      n/a      |          | An array of file names of the texture resources. By default this is assumed to be a relative path from the executable file. |
| defaultTextureIndex | number   |      n/a      |          | Default index from the texturePaths.                                                                                        |
| defaultTextureSlot  | string   |      n/a      |          | The texture slot, such as `Albedo` or `Normal`.                                                                             |
| defaultMaterialName | string   |      n/a      |          | The name of the material.                                                                                                   |

## Element Properties

| Name                   | Type     | Default Value | Description                                                                                                                                                                                          |
| ---------------------- | -------- | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animationPauseState    | boolean  |               | Sets the animation pause state for the current model node.                                                                                                                                           |
| animationPlaybackSpeed | number   |               | Sets the playback speed for animations.                                                                                                                                                              |
| animationTime          | number   |               | Sets the current time of the animation.                                                                                                                                                              |
| modelResourceId        | number   |               | Sets the ID of the resource this node draws. The ID refers to a _ModelResource_.                                                                                                                     |
| animation              | _object_ |               | Sets the current animation by `resource` + `name`. Some animation resources contain multiple animations. These are addressed by animation name. FBX models, for example, may contain 1-n animations. |
| texture                | _object_ |               | Sets the texture of a given material by the new texture ID. Material should be the one applied to the Model Node.                                                                                    |

### animation

```javascript
{
    resourceId: <number>,
    name: <string>,
    paused: <boolean>,
    loops: <number>
}
```

### texture

```javascript
{
    textureId: <number>,
    textureSlot: <string>,
    materialName: <string>
}
```

### defaultTextureSlot options: [TextureType](../types/TextureType.md)

### texture.textureSlot options: [TextureType](../types/TextureType.md)
