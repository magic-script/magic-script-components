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
