---
id: example
title: Example
---

Replace `app.js` content with this code for a more interactive use case:

```javascript
import React from "react";
import { View, Text, Button } from "magic-script-components";

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
      <View name="main-view">
        <Text
          textSize={0.1}
          textColor={[0.1, 1, 0.1, 0.84]}
          localPosition={[0, 0.25, 0]}
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
    );
  }
}
```

To make code platform dependent add import:
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
