# MagicScript Components

[![CI](https://github.com/magic-script/magic-script-components/workflows/CI/badge.svg)](https://github.com/magic-script/magic-script-components/actions) [![npm version](https://badge.fury.io/js/magic-script-components.svg)](https://badge.fury.io/js/magic-script-components) [![npm downloads](https://img.shields.io/npm/dt/magic-script-components.svg)](https://www.npmjs.com/package/magic-script-components)
 [![License](http://img.shields.io/:license-Apache%202.0-blue.svg)](LICENSE)

MagicScript Component Framework

## Installation

1. Install `magic-script-cli`:

```bash
npm install -g magic-script-cli
```

2. Create a new MagicScript application:

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

5. Refer to the MagicScript [Getting Started](https://www.magicscript.org/docs/getting-started) guide for more information.

## Example

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

## Documentation

- [List of Components](docs/Components.md)

### Updating documentation

1. Get documentation source code and install dependencies

```bash
git clone https://github.com/magic-script/magic-script-components.git
cd magic-script-components
cd website
yarn
```

2. Make your changes and test them locally

```bash
yarn start
```

3. Save your changes

```bash
git commit
```

4. Set system variable GIT_USER with you GitHub user name in e.g. ```.bash_profile```  or console ```export GIT_USER=<GitHub user name>```

5. Deploy on public website

```bash
yarn deploy
```

- All documentation is in markdown format in ```docs``` directory. Just add your new markdown files there.
- Refer to [Docusaurus 2](https://v2.docusaurus.io/) docs for more advanced content management topics.

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details
