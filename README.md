# MagicScript Components

[![npm version](https://badge.fury.io/js/magic-script-components.svg)](https://badge.fury.io/js/magic-script-components) [![License](http://img.shields.io/:license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

MagicScript Component Framework

## Prerequisites
1. Install `magic-script-cli` :
- `npm install -g magic-script-cli`

2. Create new MagicScript application :
- `magic-script init <app-name> <com.app.name>`

3. Install the required `npm` packages from the app folder:
- `npm install`

## Configuration steps

1. Install dependencies:

- `npm install magic-script-components`
- `npm install --save-dev @babel/core @babel/plugin-transform-react-jsx @babel/plugin-proposal-class-properties rollup-plugin-babel`

2. Add `.babelrc` file with the following configuration:

```
{
    "plugins": [
        "@babel/plugin-syntax-jsx",
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-class-properties"
    ]
}
```

3. Add `babel` to the `rollup.config.js` file:

```
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  external: ['uv', 'lumin'],
  input: 'src/main.js',
  preserveModules: true,
  output: {
    dir: 'bin',
    format: 'es'
  },
  plugins: [
    babel({ exclude: "node_modules/**" }),
    resolve(),
    commonjs()
  ]
};
```

## Use example:

1. Create file `app.js`:

```
import React from 'react';

export class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: props.counter };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    this.setState( state => ({ counter: state.counter + 1 }) );
  }

  render() {
    return (
      <view name='main-view'>
        <text textSize={0.10} textColor={[0.1, 1, 0.1, 0.84]} localPosition={[0, 0.25, 0]}>{this.state.counter}</text>
        <button width={0.25} height={0.15} roundness={0.5} onClick={this.onButtonClick}>+</button>
      </view>
    );
  }
}

```

2. Bootstrap 'MyApp' component from `main.js`:

```
import 'magic-script-polyfills';
import React from 'react';
import mxs from 'magic-script-components';

import { MyApp } from './app.js';

mxs.bootstrap(<MyApp type='landscape' volumeSize={[1,1,1]} caption='My App Caption' counter={0} />);
```

3. Define global `process`:

- Add file `global-scope.js` to `src` folder

```
globalThis.process = { env: { NODE_ENV:"development" } };
export default process;
```

- Import `process` to `main.js` at the top of the file:

```
import 'magic-script-polyfills';
import process from './global-scope.js';
```

## Components included

- [List of Components](docs/Components.md)

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details
