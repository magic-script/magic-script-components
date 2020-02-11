---
id: light
title: Light
---

## Description

The Light component creates a light in your scene. The default light system supports one directional light, poised on the Headpose camera. This cannot be used in conjunction with other lights. Any light you add to the prism disables the default light. All light nodes default to a white color, but can be modified to use a different light color. Light intensity controls how bright the light is, which ranges from 0 to 1.0. All lights can optionally cast shadows.

## Example

```javascript
import React from "react";
import { View, Light, Model, Slider } from "magic-script-components";

export default class MyApp extends React.Component {
  state = {
    range: 0
  };

  onRangeChangeHandler = eventData => {
    this.setState({ range: eventData.Value });
  };

  render() {
    return (
      <View name="main-view">
        <Light
          localPosition={[0, 1, 0]}
          type="point"
          color={[0.1, 0.5, 1]}
          range={this.state.range}
        />
        <Slider
          localPosition={[0, 0.35, 0]}
          width={0.8}
          min={0}
          max={5}
          onSliderChanged={this.onRangeChangeHandler}
        />
        <Model
          localPosition={[-0.35, -0.25, 0]}
          localScale={[0.3, 0.3, 0.3]}
          modelPath={"res/path/to/your/model"}
          shader="diffuse-normal-spec"
        />
        <Model
          localPosition={[0.35, -0.25, 0]}
          localScale={[0.3, 0.3, 0.3]}
          modelPath={"res/path/to/your/model"}
          shader="pbr"
        />
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name         | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                          |
| :----------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color        | vec3     | Sets the light color.                                                                                                                                                                                                                                                                                                                                                                                |
| intensity    | number   | Sets the light intensity.                                                                                                                                                                                                                                                                                                                                                                            |
| range        | number   | Sets the light range.                                                                                                                                                                                                                                                                                                                                                                                |
| spotAngle    | number   | Sets the light spot angle (ignored if this is not a spot light).                                                                                                                                                                                                                                                                                                                                     |
| type         | string   | Sets the light type.                                                                                                                                                                                                                                                                                                                                                                                 |
| castsShadows | boolean  | Attempts to set the light's shadow casting status. Currently the system supports only one shadow casting light. In landscape mode this light is created by the system and shared by all apps. In immersive mode, the developer is responsible for setting the shadow casting light. Only directional lights can cast shadows. If this function fails, the reason for the failure appears in the log. |
| useHeadPose  | _object_ | Sets the headpose status of the light. Calling this function and setting `on` to `true` results in the light using the headpose world transform as its own transform.                                                                                                                                                                                                                                |

### type options: [LightType](../types/LightType.md)

### useHeadPose

- on
- offset
