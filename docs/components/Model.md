---
id: model
title: Model
---

A MagicScript component for 3D model.

## Example

```javascript
<Model
  modelPath={"resources/turkey4.fbx"}
  materialPath={"resources/turkey.kmat"}
  texturePaths={["resources/turkey_baseColor.png"]}
  defaultTextureIndex={0}
  defaultTextureSlot={"albedo"}
  defaultMaterialName={"turkey_material"}
  animation={{ name: "idle" }}
  animationPauseState={false}
  animationPlaybackSpeed={1.0}
/>
```

- FBX file format is currently supported on ML1 only.

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name                | Type     | Default Value | Description                                                                                                         |
| ------------------- | -------- | :-----------: | ------------------------------------------------------------------------------------------------------------------- |
| modelPath           | string   |      n/a      | File name of the model resource to load. By default assumed to be a relative path from the executable file.         |
| materialPath        | string   |      n/a      | File name of the material resource to load. By default assumed to be a relative path from the executable file.      |
| importScale         | number   |      1.0      | The scale that will be applied to this resource                                                                     |
| texturePaths        | [string] |      n/a      | An array of file names of the texture resources. By default assumed to be a relative path from the executable file. |
| defaultTextureIndex | number   |      n/a      | Default index from the texturePaths.                                                                                |
| defaultTextureSlot  | string   |      n/a      | Texture Slot, eg, Albedo, Normal, etc.                                                                              |
| defaultMaterialName | string   |      n/a      | Name of the material.                                                                                               |

## Element Properties

| Name                   | Type     | Description                                                                                                                                                                             |
| ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animationPauseState    | boolean  | Sets the animation pause state for the current model node.                                                                                                                              |
| animationPlaybackSpeed | number   | Set the playback speed for animations.                                                                                                                                                  |
| animationTime          | number   | Set the current time of the animation.                                                                                                                                                  |
| modelResourceId        | number   | Sets the id of the resource this node will draw. The id should refer to a ModelResource.                                                                                                |
| animation              | _object_ | Set the current animation by resource + name. Some animation resources can contain multiple animations, these are addressed by name. FBX models for example may contain 1-n animations. |
| texture                | _object_ | Sets the texture of a given material by the new texture ID. Material should be the one applied to the Model Node.                                                                       |

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
