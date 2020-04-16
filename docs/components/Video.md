---
id: video
title: Video
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='video' />​

## Description

The Video component represents a simple 2D rectangle on which video resources can be played.

## Example

```javascript
import React from "react";
import { View, Button, Video } from "magic-script-components";

const VideoActions = {
  start: "start",
  pause: "pause",
  stop: "stop"
};

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLooping: false,
      action: VideoActions.pause,
      volume: 1.0,
      videoPath: require("../resources/video.mp4")
    };
  }

  onStartPauseClick = () => {
    if (this.state.action === VideoActions.start) {
      this.setState({ action: VideoActions.pause });
    } else {
      this.setState({ action: VideoActions.start });
    }
  }

  onStopClick = () => {
    this.setState({ action: VideoActions.stop });
  }

  createButtonWithAction(action, position) {
    const title = action[0].toUpperCase() + action.substring(1);
    const onClickHandler =
      action === VideoActions.stop ? this.onStopClick : this.onStartPauseClick;
    return (
      <Button
        localPosition={position}
        TextSize={0.1}
        width={0.3}
        height={0.12}
        onClick={onClickHandler}
      >
        {title}
      </Button>
    );
  }

  renderPlayOrPauseButton(position) {
    const { action } = this.state;
    if (action === VideoActions.start) {
      return this.createButtonWithAction(VideoActions.pause, position);
    } else {
      return this.createButtonWithAction(VideoActions.start, position);
    }
  }

  renderStopButton(position) {
    return this.createButtonWithAction(VideoActions.stop, position);
  }

  render() {
    const resolution = [1920, 1080];
    const widthInMeters = 1;
    const size = [
      widthInMeters,
      (resolution[1] * widthInMeters) / resolution[0]
    ];
    return (
      <View localPosition={this.props.localPosition}>
        <Video
          localPosition={[0, 0.75, 0]}
          looping={this.state.isLooping}
          width={resolution[0]}
          height={resolution[1]}
          size={size}
          anchorPosition={[0.5 * size[0], 0.5 * size[1], 0]}
          videoPath={this.state.videoPath}
          viewMode={"full-area"}
          volume={this.state.volume}
          action={this.state.action}
        />

        {this.renderPlayOrPauseButton([-0.19, 0, 0])}
        {this.renderStopButton([0.19, 0, 0])}
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name      | Type   | Default Value | Required | Description                                                                                                                                                                                                                                                                  | Lumin | Android |  IOS  |
| --------- | ------ | :-----------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---: | :-----: | :---: |
| width     | number |      512      |    N     | The surface resolution width. Supported values are between 1 and 2048.                                                                                                                                                                                                       |  👍   |   👍    |  👍   |
| height    | number |      512      |    N     | The surface resolution height. Supported values are between 1 and 2048.                                                                                                                                                                                                      |  👍   |   👍    |  👍   |
| videoPath | string |      n/a      |    Y     | The path to the file to play. Preparation for playback begins synchronously after this property is set. The video is not ready to play until a `VideoEvent` of type VideoEventType 'prepared' is received.                                                                   |  👍   |   👍    |  👍   |
| viewMode  | string |  `full-area`  |    N     | How the video is intended to be viewed within the video component. The `full-area` view mode renders video over the full area for both eyes (monoscopic). The `left-right` view mode renders video differently per eye (stereoscopic). The default view mode is `full-area`. |  👍   |         |       |

## Element Properties

| Name          | Type    | Default Value | Description                                                                                                                                                                                                                                | Lumin | Android |  IOS  |
| ------------- | ------- | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---: | :-----: | :---: |
| volume        | number  |       1       | Sets the volume of the node. The volume range is 0.0 - 1.0.                                                                                                                                                                                |  👍   |   👍    |  👍   |
| looping       | boolean |      n/a      | Sets the looping mode of the player.                                                                                                                                                                                                       |  👍   |   👍    |  👍   |
| timedTextPath | string  |      n/a      | Sets the timed text file.                                                                                                                                                                                                                  |  👍   |    👍    |       |
| videoUri      | string  |      n/a      | Sets the file URI to play. This is not implemented currently. Preparation for playback begins synchronously after this property is set. The video is not ready to play until a `VideoEvent` of type VideoEventType 'prepared' is received. |
| seekTo        | number  |      n/a      | Seeks to the specified time position.                                                                                                                                                                                                      |  👍   |    👍    |       |
| action        | string  |      n/a      | Sets the current operation: `start`, `stop`, `pause`                                                                                                                                                                                       |  👍   |   👍    |  👍   |

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
