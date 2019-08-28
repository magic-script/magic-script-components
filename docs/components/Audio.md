---
id: audio
title: Audio
---

## Tag: `<Audio>`

- #### Lumin Runtime native component - AudioNode

## [Common Events](../Events.md)

## [Common Properties](../Properties.md)

## Create Properties

| Name          | Type    | Default Value | Description                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ------- | :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName      | string  |      n/a      | File name of the resource to load. By default assumed to be a relative path from the executable file.                                                                                                                                                                                                                                                    |
| loadFile      | boolean |    `false`    | Loads the entire audio file in the memory. For big files you may use the createStreamedFileAudioResource method.                                                                                                                                                                                                                                         |
| absolutePath  | boolean |    `false`    | Flag that fileName is an absolute path name, instead of a relative path.                                                                                                                                                                                                                                                                                 |
| descriptor    | number  |     `-1`      | Optional file descriptor that points to a resource.                                                                                                                                                                                                                                                                                                      |
| basePath      | string  |    `null`     | If you are loading a resource from an absolute path, and that path != the current process path, set this field to the equivalent base path in the other client directory. This allows path relative dependencies to solve a fully qualified (absolute) path outside of the current process. This value defaults to the currently executing process root. |
| autoDestroy   | boolean |    `false`    | If true, play the sound once and delete the node. If false the audio node will stay until scenegraph is destroyed.                                                                                                                                                                                                                                       |
| dynamicDecode | boolean |    `false`    | if true, the file resource is compressed and will be decoded when playing. If false, the file\resource is an uncompressed PCM data.                                                                                                                                                                                                                      |

## Element Properties

| Name                                                  | Type     | Default Value | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :---------------------------------------------------- | :------- | :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action                                                | string   |      n/a      | Sets the current operation: `start`, `stop`, `pause`, `resume`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| soundLooping                                          | boolean  |    `false`    | Sets the mode of playing audio in repeat mode. If enabled, audio will play from start after reaching the end, until disabled. When audio is created, the default is disabled.                                                                                                                                                                                                                                                                                                                                                                                  |
| soundMute                                             | boolean  |    `false`    | Mute or unmute the sound.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| soundPitch                                            | number   |     `1.0`     | Sets sound pitch. The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down and 2.0 being one octave up.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| soundVolumeLinear                                     | number   |               | Sets the audio volume. The range of the volume is 0 to 8, with 0 for silence, 1 for unity gain, and 8 for 8x gain.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| spatialSoundEnable                                    | boolean  |    `false`    | Enable/Disable the capability for spatial sound. If enabled, spatialSoundPosition                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| must have value for positional sound to be effective. |
| streamedFileOffset                                    | number   |               | Sets the starting point for playback of a streamed-file sound.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| spatialSoundDirection                                 | _object_ |               | Set the sound direction of a given audio channel. Effective only if spatial sound is enabled (spatialSoundEnable) for an audio node. The Direction is relative to this nodes local orientation. By default that is, if this API not called then, the direction is same as the the parent nodes orientation. Will change the direction even if the audio clip is already playing.                                                                                                                                                                               |
| spatialSoundDirectSendLevels                          | _object_ |               | Sets the direct send levels for one channel of a sound output. When 3D audio processing is enabled for a sound output (see spatialSoundEnabled) this property sets the send levels for the direct component of the sound, i.e., the audio mix for the the part of the sound not affected by room acoustics. Multi-channel sounds require the direct send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right. |
| spatialSoundDistance                                  | _object_ |               | Set spatial sound distance parameters for a given channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| spatialSoundPosition                                  | _object_ |               | Set the position of a given audio channel relative to this nodes local position. Effective only if spatial sound is enabled explicitly for an audio node. Will change the position even if the audio clip is already playing.                                                                                                                                                                                                                                                                                                                                  |
| spatialSoundRadiation                                 | _object_ |               | Set spatial sound radiation parameters for a given channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| spatialSoundRoomSendLevels                            | _object_ |               | Sets the room send levels for one channel of a sound output. When 3D audio processing is enabled for a sound output (see spatialSoundEnabled) this function sets the send levels for the room component of the sound, i.e., the audio mix for the the part of the sound that's affected by room acoustics. Multi-channel sounds require the room send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use channel = 0. For stereo sounds use channel = 0 for left and channel = 1 for right.    |

### spatialSoundDirection

```javascript
{
    channel: number,
    channelDirection: quat
}
```

### spatialSoundDirectSendLevels

```javascript
{
    channel: number,
    gain: number,
    gainHf: number,
    gainLf: number,
    gainMf: number
}
```

### spatialSoundDistance

```javascript
{
    channel: number,
    minDistance: number,
    maxDistance: number,
    rolloffFactor: number
}
```

### spatialSoundPosition

```javascript
{
    channel: number,
    channelPosition: vec3
}
```

### spatialSoundRadiation

```javascript
{
    channel: number,
    innerAngle: number,
    outerAngle: number,
    outerGain: number,
    outerGainHf: number
}
```

### spatialSoundRoomSendLevels

```javascript
{
    channel: number,
    gain: number,
    gainHf: number,
    gainLf: number,
    gainMf: number
}
```
