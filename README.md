# MagicScript Components

[![Build Status](https://travis-ci.com/magic-script/magic-script-components.svg)](https://travis-ci.com/magic-script/magic-script-components) [![npm version](https://badge.fury.io/js/magic-script-components.svg)](https://badge.fury.io/js/magic-script-components) [![License](http://img.shields.io/:license-Apache%202.0-blue.svg)](LICENSE)

MagicScript Component Framework

## Installation

1. Install `magic-script-cli`:

```bash
npm install -g magic-script-cli
```

2. Create new MagicScript application:

```bash
magic-script init
```

- Follow the steps.
- Choose "Components" when application type is requested.

3. Install the required `npm` packages from the app folder:

```bash
npm install
```

4. Build and install your application:

```bash
magic-script build -i
```

5. Refer to MagicScript [Getting Started](https://www.magicscript.org/docs/getting-started) guide for more information.

## Example

Replace `app.js` content with this code for more interafctive use case:

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

## Documentation

- [List of Components](docs/Components.md)

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details
