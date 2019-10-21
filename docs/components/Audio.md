---
id: audio
title: Audio
---

## Description

The Audio component allows you to play audio resources and 3D sound effects. It supports spatialization and basic controls - such as stop and start - using WAV, MP3, and OGG format files. _Loaded file_ and _Streamed file_ audio components require an audio resource, which is the audio file you want to play.

## Example

> | ⚠️ Don't forget to include the `resources` in your `app.package` file! |
> | ---------------------------------------------------------------------- |
>

```javascript
import React from "react";
import { View, Audio } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    return (
      <View name="main-view">
        <Audio
          fileName="resources/your-audio-file.mp3"
          loadFile={true}
          action="start"
        />
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name          | Type    | Default Value | Description                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ------- | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName      | string  |      n/a      | File name of the resource to load. By default this is assumed to be a relative path from the executable file.                                                                                                                                                                                                                                                    |
| loadFile      | boolean |    `false`    | Loads the entire audio file in the memory. For large files sizes you may use the `createStreamedFileAudioResource` method instead.                                                                                                                                                                                                                               |
| absolutePath  | boolean |    `false`    | Flags that fileName as an absolute path name instead of a relative path.                                                                                                                                                                                                                                                                                         |
| descriptor    | number  |     `-1`      | Optional file descriptor that points to a resource.                                                                                                                                                                                                                                                                                                              |
| basePath      | string  |    `null`     | If you are loading a resource from an absolute path, and that path is **not** the current process path, set this field to the equivalent base path in the other client directory. This allows path relative dependencies to solve a fully qualified (absolute) path outside of the current process. This value defaults to the currently executing process root. |
| autoDestroy   | boolean |    `false`    | If `true`, play the sound once and delete the node. If false the audio node will stay until the scenegraph is destroyed.                                                                                                                                                                                                                                         |
| dynamicDecode | boolean |    `false`    | If `true`, the file resource is compressed and is decoded when playing. If `false`, the file resource is uncompressed PCM data.                                                                                                                                                                                                                                  |

## Element Properties

| Name                         | Type     | Default Value | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :--------------------------- | :------- | :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action                       | string   |      n/a      | Sets the current operation: `start`, `stop`, `pause`, `resume`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| soundLooping                 | boolean  |    `false`    | Sets audio playback to repeat mode. If enabled, audio plays from the start after reaching the end until disabled. When audio is created this is disabled by default.                                                                                                                                                                                                                                                                                                                                                                                           |
| soundMute                    | boolean  |    `false`    | Mutes or unmutes the sound.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| soundPitch                   | number   |     `1.0`     | Sets the sound pitch. The range of the pitch is 0.5 to 2.0, with 0.5 being one octave down and 2.0 being one octave up.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| soundVolumeLinear            | number   |               | Sets the audio volume. The range of the volume is 0 to 8, with 0 for silence, 1 for unity gain, and 8 for 8x gain.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| spatialSoundEnable           | boolean  |    `false`    | Enables or disables the capability for spatial sound. If enabled, `spatialSoundPosition` **must** have a value for positional sound to be effective.                                                                                                                                                                                                                                                                                                                                                                                                           |
| streamedFileOffset           | number   |               | Sets the starting point for playback of a streamed-file sound.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| spatialSoundDirection        | _object_ |               | Sets the sound direction of a given audio channel. This is effective only if spatial sound is enabled (`spatialSoundEnable`) for an audio node. The direction is relative to the node's local orientation. By default the direction is the same as the parent node's orientation. If the audio file is already playing, the direction changes during playback when the sound direction is set.                                                                                                                                                                 |
| spatialSoundDirectSendLevels | _object_ |               | Sets the direct send levels for one channel of a sound output. When 3D audio processing is enabled for a sound output (`spatialSoundEnabled`) this property sets the send levels for the direct component of the sound, i.e., the audio mix for the part of the sound not affected by room acoustics. Multi-channel sounds require the direct send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use `channel = 0`. For stereo sounds use `channel = 0` for left and `channel = 1` for right. |
| spatialSoundDistance         | _object_ |               | Sets spatial sound distance parameters for a given channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| spatialSoundPosition         | _object_ |               | Sets the position of a given audio channel relative to the node's local position. This is effective only if spatial sound is enabled (`spatialSoundEnable`) for an audio node. This changes the position even if the audio clip is already playing.                                                                                                                                                                                                                                                                                                            |
| spatialSoundRadiation        | _object_ |               | Sets spatial sound radiation parameters for a given channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| spatialSoundRoomSendLevels   | _object_ |               | Sets the room send levels for one channel of a sound output. When 3D audio processing is enabled for a sound output (`spatialSoundEnabled`) this function sets the send levels for the room component of the sound, i.e., the audio mix for the part of the sound that is affected by room acoustics. Multi-channel sounds require the room send levels to be set individually for each channel by calling this function once for each channel. For mono sounds use `channel = 0`. For stereo sounds use `channel = 0` for left and `channel = 1` for right.   |

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
