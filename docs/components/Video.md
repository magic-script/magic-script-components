---
id: video
title: Video
---

## Description

The Video component represents a simple 2D rectangle on which video resources can be played.

## Example

```javascript
<Video />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name      | Type   | Default Value | Description                                                                                                                                                                                                                                                                  |
| --------- | ------ | :-----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width     | number |      512      | The surface resolution width. Supported values are between 1 and 2048.                                                                                                                                                                                                       |
| height    | number |      512      | The surface resolution height. Supported values are between 1 and 2048.                                                                                                                                                                                                      |
| videoPath | string |      n/a      | The path to the file to play. Preparation for playback begins synchronously after this property is set. The video is not ready to play until a `VideoEvent` of type VideoEventType 'prepared' is received.                                                                   |
| viewMode  | string |  `full-area`  | How the video is intended to be viewed within the video component. The `full-area` view mode renders video over the full area for both eyes (monoscopic). The `left-right` view mode renders video differently per eye (stereoscopic). The default view mode is `full-area`. |

## Element Properties

| Name          | Type    | Default Value | Description                                                                                                                                                                                                                                |
| ------------- | ------- | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| volume        | number  |       1       | Sets the volume of the node. The volume range is 0.0 - 1.0.                                                                                                                                                                                |
| looping       | boolean |      n/a      | Sets the looping mode of the player.                                                                                                                                                                                                       |
| timedTextPath | string  |      n/a      | Sets the timed text file.                                                                                                                                                                                                                  |
| videoUri      | string  |      n/a      | Sets the file URI to play. This is not implemented currently. Preparation for playback begins synchronously after this property is set. The video is not ready to play until a `VideoEvent` of type VideoEventType 'prepared' is received. |
| seekTo        | number  |      n/a      | Seeks to the specified time position.                                                                                                                                                                                                      |
| action        | string  |      n/a      | Sets the current operation: `start`, `stop`, `pause`                                                                                                                                                                                       |

### viewMode options:

- full-area
- left-right

### action options:

- pause
- start
- stop

## Video EventData

| Name           | Type   | Description                            |
| -------------- | ------ | :------------------------------------- |
| AffectedNodeId | BigInt | The ID of the video that was affected. |
| XPos           | number | This is based on the event type.       |
| YPos           | number | This is based on the event type.       |
| VideoEventType | string | This is the video event type.          |

### VideoEventType values, XPos & YPos purpose:

- `buffering-update`:
  X is the buffering percent, Y is unused.
- `completion`
- `error`:
  X is the type of fatal error, Y is the MediaError code.
- `info`:
  X is the info or warning code, Y is an info code that provides more details.
- `prepared`
- `seek-complete`
- `video-size-changed`:
  X is width, Y is height.
