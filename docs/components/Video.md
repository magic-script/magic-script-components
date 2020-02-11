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

import { LinearLayout, Video, Button, Text } from "magic-script-components";
export default class MyApp extends React.Component {
  state = {
    playEnabled: false,
    pauseEnabled: false,
    stopEnabled: false,
    status: 'Initializing',
    action: undefined
  }

  onPlayHandler = (eventData) => {
    this.setState({playEnabled: false, pauseEnabled: true, stopEnabled: true, action: 'start'});
  }

  onPauseHandler = (eventData) => {
    this.setState({playEnabled: true, pauseEnabled: false, stopEnabled: true, action: 'pause'});
  }

  onStopHandler = (eventData) => {
    this.setState({playEnabled: true, pauseEnabled: false, stopEnabled: false, action: 'stop'});
  }

  onEventHandler = (eventData) => {
    console.log(`onEventHandler:`, eventData);

    const videoEventType = eventData.VideoEventType;

    if ( videoEventType === undefined
      || videoEventType === this.state.status) {
      return;
    }

    if (videoEventType === 'buffering-update') {
      this.setState({status: videoEventType});
    } else if (videoEventType === 'completion') {
      this.setState({playEnabled: true, pauseEnabled: false, stopEnabled: false, status: videoEventType});
    } else if (videoEventType === 'error') {
      this.setState({status: videoEventType});
      this.setState({playEnabled: false, pauseEnabled: false, stopEnabled: false, status: videoEventType});
    } else if (videoEventType === 'info') {
      this.setState({status: videoEventType});
    } else if (videoEventType === 'prepared') {
      this.setState({playEnabled: true, pauseEnabled: false, stopEnabled: false, status: videoEventType});
    } else if (videoEventType === 'seek-complete') {
      this.setState({status: videoEventType});
    } else if (videoEventType === 'video-size-changed') {
      this.setState({status: videoEventType});
    } else {
      this.setState({status: 'unknown'});
    }
  }

  render() {
    const videoProps = {
      videoUri: 'http://url/to/the/video/file',
      width: 1920,
      height: 1080,
      onEvent: this.onEventHandler,
      localScale: [0.960, 0.540, 0]
    }

    if (this.state.action !== undefined) {
      videoProps.action = this.state.action;
    }

    return (
      <LinearLayout
        key='top-layout'
        name='main-view'
        defaultItemAlignment="center-left"
        defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
        localPosition={[-0.45, 0.45, 0]}
        orientation='vertical'
      >
        <Video key='video' {...videoProps}/>
        <LinearLayout
          key='buttons-layout'
          defaultItemAlignment="center-center"
          defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}
          orientation='horizontal'
        >
          <Button key='play'  type='icon' iconType="play"  height={0.1}
            enabled={this.state.playEnabled}  onClick={this.onPlayHandler} />
          <Button key='pause' type='icon' iconType="pause" height={0.1}
            enabled={this.state.pauseEnabled} onClick={this.onPauseHandler}/>
          <Button key='stop'  type='icon' iconType="stop"  height={0.1}
            enabled={this.state.stopEnabled}  onClick={this.onStopHandler} />
        </LinearLayout>
        <Text key='status' textSize={0.05} text={`Status: ${this.state.status}`}/>
      </LinearLayout>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name      | Type   | Default Value | Required | Description                                                                                                                                                                                                                                                                  |
| --------- | ------ | :-----------: | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width     | number |      512      |    N     | The surface resolution width. Supported values are between 1 and 2048.                                                                                                                                                                                                       |
| height    | number |      512      |    N     | The surface resolution height. Supported values are between 1 and 2048.                                                                                                                                                                                                      |
| videoPath | string |      n/a      |    Y     | The path to the file to play. Preparation for playback begins synchronously after this property is set. The video is not ready to play until a `VideoEvent` of type VideoEventType 'prepared' is received.                                                                   |
| viewMode  | string |  `full-area`  |    N     | How the video is intended to be viewed within the video component. The `full-area` view mode renders video over the full area for both eyes (monoscopic). The `left-right` view mode renders video differently per eye (stereoscopic). The default view mode is `full-area`. |

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
