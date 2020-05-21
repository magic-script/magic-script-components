---
id: prism
title: Prism
---
​
## Description
​
The Prism component is high level component.
​
## Example
​
```javascript
import React from "react";
import { Scene, Prism } from "magic-script-components";
​
export default class MyApp extends React.Component {

  onModeChangedHandler = (event) => {
    console.log("onModeChangedHandler", event);
  }

  onRotationChangedHandler = (event) => {
    console.log("onRotationChangedHandler", event);
  }

  onScaleChangedHandler = (event) => {
    console.log("onScaleChangedHandler", event);
  }

  onPositionChangedHandler = (event) => {
    console.log("onPositionChangedHandler", event);
  }

  render() {
    return (
      <Scene>
        <Prism size={[1.0, 1.0, 1.0]} 
        interactions={["scale", "position"]}
        onModeChanged={this.onModeChangedHandler}
        onRotationChanged={this.onRotationChangedHandler}
        onScaleChanged={this.onScaleChangedHandler}
        onPositionChanged={this.onPositionChangedHandler}>
​
        </Prism>
      </Scene>
    );
  }
}
```
​
## Create Properties

| Name         | Type         | Default Value | Required | Description                                                                                                                                                           | Lumin | Android |  IOS  |
| ------------ | ------------ | :-----------: | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---: | :-----: | :---: |
| size         | vec3         |      n/a      |    Y     | The size of the Prism. The vector set to the component should be in following order: width, height, depth, for example [1.0, 1.0, 1.0]                                |   👍   |    👍    |   👍   |
| title        | String       |  `App Name`   |    N     | The title of the Prism, by default name of your app.                                                                                                                  |       |    👍    |   👍   |
| interactions | String Array |      n/a      |    N     | Determines interactions with the prism. When it is not specified, on mobile platforms prism menu is invisible. Possible interactions: `scale`, `position`, `rotation` |       |    👍    |   👍   |
