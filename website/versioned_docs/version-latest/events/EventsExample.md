---
id: eventsExample
title: Events Example
---

```javascript
import React from "react";
import { Scene, Prism, Content, Text, Button } from "magic-script-components";

export default class MyApp extends React.Component {
  updateLoopHandler = delta => {
    // delta = time delta since last frame (in seconds)
    console.log(`Delta: ${delta}`);
  };

  eventHandler = eventData => {
    console.log(`Generic Event Handler: ${eventData.constructor.name}`);
    return true;
  };

  onCustomEventHandler = (eventName) => {
    console.log(`Custom Event Handler: ${eventName}`);
    return true;
  };

  onAppStartHandler = (eventData) => {
    console.log(eventData);
  }

  render() {
    return (
      <Scene onAppStart={onAppStartHandler}>
        <Prism size={[1, 1, 1]}>
          <Content
            name="rootNode"
            onUpdateLoop={this.updateLoopHandler}
            onEvent={this.eventHandler}
            onControlPose3DofInputEvent={(eventData) => this.onCustomEventHandler('onControlPose3DofInputEvent')}
            onControlPose6DofInputEvent={(eventData) => this.onCustomEventHandler('onControlPose6DofInputEvent')}
            onControlTouchPadInputEvent={(eventData) => this.onCustomEventHandler('onControlTouchPadInputEvent')}
            onEyeTrackingEvent={(eventData) => this.onCustomEventHandler('onEyeTrackingEvent')}
            onGestureInputEvent={(eventData) => this.onCustomEventHandler('onGestureInputEvent')}
            onInputEvent={(eventData) => this.onCustomEventHandler('onInputEvent')}
            onKeyInputEvent={(eventData) => this.onCustomEventHandler('onKeyInputEvent')}
            onRayCastEvent={(eventData) => this.onCustomEventHandler('onRayCastEvent')}
            onSelectionEvent={(eventData) => this.onCustomEventHandler('onSelectionEvent')}
            onUiEvent={(eventData) => this.onCustomEventHandler('onUiEvent')}
            onVideoEvent={(eventData) => this.onCustomEventHandler('onVideoEvent')}
          >
          <Text
            textSize={0.1}
            localPosition={[-0.3, 0.3, 0]}
            text={"Events demo"}
          />
          <Button textSize={0.1} localPosition={[0.3, 0, 0]} text={`Press`} />
        </Content>
        </Prism>
      </Scene>
    );
  }
}
```