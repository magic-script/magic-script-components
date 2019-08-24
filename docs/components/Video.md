---
id: video
title: Video
---

## Tag: `<Video>`

- #### Lumin Runtime native component - VideoNode

## [Common Events](../Events.md)

## [Common Properties](../Properties.md)

## Create Properties
| Name      | Type   | Default Value | LRT Name | LRT type       |
| --------- | ------ | :-----------: | -------- | -------------- |
| width     | number |      512      | Width    | number         |
| height    | number |      512      | Height   | number         |
| videoPath | string |      n/a      |          |                |
| viewMode  | string |  `full-area`  | ViewMode | lumin.ViewMode |

## Element Properties
| Name      | Type   | Default Value | LRT Name | LRT type       |
| --------- | ------ | :-----------: | -------- | -------------- |
| volume    | number |       1       | Volume   | number         |
| looping   | boolean |     n/a      | Looping  | boolean        |
| timedTextPath | string |  n/a      | TimedTextPath | string    |
| videoUri | string |       n/a      | VideoUri | string         |
| seekTo | number |         n/a      | SeekTo   | number         |
| action | string |         n/a      |          |                |

### viewMode options:
- full-area
- left-right

### action options:
- pause
- start
- stop

## Video EventData
| Name      | Type   | Description |
| --------- | ------ | :---------- |
| AffectedNodeId | BigInt | The ID of the VideoNode that was affected.
| XPos | number | *based on event type |
| YPos | number | *based on event type |
| VideoEventType | string |  Video event type |

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
