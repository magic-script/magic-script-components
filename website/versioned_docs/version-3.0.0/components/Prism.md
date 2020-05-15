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
  render() {
    return (
      <Scene>
        <Prism size={[1.0, 1.0, 1.0]}>
​
        </Prism>
      </Scene>
    );
  }
}
```
​
## Create Properties

| Name | Type | Default Value | Required | Description                                                                                                                            |
| ---- | ---- | :-----------: | :------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| size | vec3 |      n/a      |    Y     | The size of the Prism. The vector set to the component should be in following order: width, height, depth, for example [1.0, 1.0, 1.0] |

