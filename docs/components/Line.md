---
id: line
title: Line
---
## Description
The Line component renders a colored line. The Line component creates lines as a series of line segments. Line follows the order in which the points are added, and must have at least two points. Line color is a multiplier to the vertex color. Create disconnected lines by adding line breaks to the Line.

## Example

```javascript
import React from "react";
import { View, Line } from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    const points = [
      [-0.35, -0.35, -0.20],
      [ 0.35,  0.35,  0.20],
      [-0.35, -0.35,  0.20],
      [-0.35,  0.35, -0.20],
      [ 0.35, -0.35,  0.20],
      [-0.35, -0.35, -0.20]
    ];

    return (
      <View name="main-view">
        <Line points={points} color={[0.5, 1.0, 0.25, 0.8]}/>
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name   | Type   | Description                                                                                                                                                               |
| :----- | :----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| points | [vec3] | Sets the points that describe this series of line segments. The line follows the order in which the points are added. No line can exist if there is less than two points. |
