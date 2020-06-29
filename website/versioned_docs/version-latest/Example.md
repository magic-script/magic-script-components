---
id: example
title: Example
---

Replace `app.js` content with this code for a more interactive use case:

```javascript
import React from "react";
import { View, Text, Button, Scene, Prism } from "magic-script-components";

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: props.counter };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  render() {
    return (
      <Scene>
        <Prism size={[1, 1, 0.2]} >
          <View name="main-view">
            <Text
              fontSize={0.1}
              textColor={[0.1, 1, 0.1, 0.84]}
              position={[0, 0.25, 0]}
            >
              {this.state.counter}
            </Text>
            <Button
              width={0.25}
              height={0.15}
              roundness={0.5}
              onClick={this.onButtonClick}
            >
              +
            </Button>
          </View>
        </Prism>
      </Scene>
    );
  }
}
```

### Color property:
The accepted value for color property is:
1. string: 'hotpink', '#FF3399', 'F39'
2. number: 0xFF3399
3. array: [255, 165, 0, 0.8], [255, 165, 0],
4. object:
  { h:120, s:1, l:0.75 }
  { l:80, c:25, h:200 }
  { c:1, m:0.5, y:0, k:0.2}
  { r:255, g:165, b:0, a: 0.8 }

### To make code platform dependent add import:
```javascript
import { Platform } from 'magic-script-components';
```
or change previous to:
```javascript
import { Platform, View, Text, Button } from 'magic-script-components';
```
and now you can use in code `Platform` object to get platform name and version:
```javascript
console.log(`Runs on ${Platform.OS} (${Platform.Version})`);
```
