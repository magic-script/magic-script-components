---
id: example
title: Example
---

1. Create file `app.js`:

```javascript
import React from "react";
import { View, Text, Button } from "magic-script-components";

export class MyApp extends React.Component {
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

2. Bootstrap 'MyApp' component from `main.js`:

```javascript
import "magic-script-polyfills";
import React from "react";
import mxs from "magic-script-components";

import { MyApp } from "./app.js";

mxs.bootstrap(
  <MyApp
    type="landscape"
    volumeSize={[1, 1, 1]}
    caption="My App Caption"
    counter={0}
  />
);
```

3. Define global `process`:

- Add file `global-scope.js` to `src` folder

```javascript
globalThis.process = { env: { NODE_ENV: "development" } };
export default process;
```

- Import `process` to `main.js` at the top of the file:

```javascript
import "magic-script-polyfills";
import process from "./global-scope.js";
```
