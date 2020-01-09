---
id: eventsExample
title: Events Example
---

```javascript
import React from "react";
import { Content, Text, Button } from "magic-script-components";

import {
  ControlPose3DofInputEventData,
  ControlPose6DofInputEventData,
  ControlTouchPadInputEventData,
  EyeTrackingEventData,
  GestureInputEventData,
  InputEventData,
  KeyInputEventData,
  RayCastEventData,
  SelectionEventData,
  UiEventData,
  VideoEventData
} from "magic-script-components-lumin";

export default class MyApp extends React.Component {
  updateLoopHandler = delta => {
    // delta = time delta since last frame (in seconds)
    console.log(`Delta: ${delta}`);
  };

  eventHandler = eventData => {
    if (eventData instanceof ControlPose3DofInputEventData) {
      console.log("Event: ControlPose3DofInputEventData");
    }

    if (eventData instanceof ControlPose6DofInputEventData) {
      console.log("Event: ControlPose6DofInputEventData");
    }

    if (eventData instanceof ControlTouchPadInputEventData) {
      console.log(eventData.TouchCount);
    }

    if (eventData instanceof EyeTrackingEventData) {
      console.log("Event: EyeTrackingEventData");
    }

    if (eventData instanceof GestureInputEventData) {
      console.log("Event: GestureInputEventData");
    }

    if (eventData instanceof InputEventData) {
      console.log("Event: InputEventData");
    }

    if (eventData instanceof KeyInputEventData) {
      console.log("Event: KeyInputEventData");
    }

    if (eventData instanceof RayCastEventData) {
      console.log("Event: RayCastEventData");
    }

    if (eventData instanceof SelectionEventData) {
      console.log("Event: SelectionEventData");
    }

    if (eventData instanceof UiEventData) {
      console.log("Event: UiEventData");
    }

    if (eventData instanceof VideoEventData) {
      console.log("Event: VideoEventData");
    }

    return true;
  };

  render() {
    return (
      <Content
        name="rootNode"
        onUpdateLoop={this.updateLoopHandler}
        onEvent={this.eventHandler}
      >
        <Text
          textSize={0.1}
          localPosition={[-0.3, 0.3, 0]}
          text={"Events demo"}
        />
        <Button textSize={0.1} localPosition={[0.3, 0, 0]} text={`Press`} />
      </Content>
    );
  }
}
```
