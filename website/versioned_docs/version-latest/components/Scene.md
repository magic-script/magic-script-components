---
id: scene
title: Scene
---
​
## Description
​
The Scene component is high level component.
​
## Example
​
```javascript
import React from "react";
import { Scene, Prism } from "magic-script-components";
​
export default class MyApp extends React.Component {
  render() {
    return (
      <Scene>
        <Prism size=[{1.0, 1.0, 1.0}]>
​
        </Prism>
      </Scene>
    );
  }
}
```