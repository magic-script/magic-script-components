---
id: video
title: Video
---
## Description
Video component represents a simple 2-d rectangle that video resources can be played on.

## Example

```javascript
<Video />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name      | Type   | Default Value | Description                                                                                                                                                                                                                         |
| --------- | ------ | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width     | number |      512      | The surface resolution width 1 to 2048                                                                                                                                                                                              |
| height    | number |      512      | The surface resolution height 1 to 2048                                                                                                                                                                                             |
| videoPath | string |      n/a      | Sets the file to Play. Preparation for playback begins synchronously after this property is set. The VideoNode is not ready to actually play (via action='start') until a VideoEvent of type VideoEventType 'prepared' is received. |
| viewMode  | string |  `full-area`  | Set the current ViewMode to the given value.                                                                                                                                                                                        |

## Element Properties

| Name          | Type    | Default Value | Description                                                                                                                                                                                                                             |
| ------------- | ------- | :-----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| volume        | number  |       1       | Sets the volume of the node.                                                                                                                                                                                                            |
| looping       | boolean |      n/a      | Sets the looping mode of the player.                                                                                                                                                                                                    |
| timedTextPath | string  |      n/a      | Sets the timed text file.                                                                                                                                                                                                               |
| videoUri      | string  |      n/a      | Sets the file Uri to Play. Preparation for playback begins synchronously after this property is set. The VideoNode is not ready to actually play (via action='start') until a VideoEvent of type VideoEventType 'prepared' is received. |
| seekTo        | number  |      n/a      | Seeks to the specified time position.                                                                                                                                                                                                   |
| action        | string  |      n/a      | Sets the current operation: `start`, `stop`, `pause`                                                                                                                                                                                    |

### viewMode options:

- full-area
- left-right

### action options:

- pause
- start
- stop

## Video EventData

| Name           | Type   | Description                                |
| -------------- | ------ | :----------------------------------------- |
| AffectedNodeId | BigInt | The ID of the VideoNode that was affected. |
| XPos           | number | \*based on event type                      |
| YPos           | number | \*based on event type                      |
| VideoEventType | string | Video event type                           |

### VideoEventType values, XPos & YPos purpose:

- buffering-update:
  X is the buffering percent, Y is unused
- completion
- error:
  X is the type of fatal error, Y is the MediaError code
- info:
  X is the info or warning code, Y is an info code to provide more details
- prepared
- seek-complete
- video-size-changed:
  X is width, Y is height
