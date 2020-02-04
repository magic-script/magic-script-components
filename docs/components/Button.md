---
id: button
title: Button
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='button' />​

## Description
​
Button represents a standard, clickable button that you can select and activate with the Control. You can set the label text and control the size and color of the button or use an icon. Button text uses the default system font, Lomino, and is white.
​
## Example
​
```javascript
class MyApp extends React.Component {
  buttonClickHandler = event => {
    console.log("Hello from buttonClickHandler");
  };
​
  render() {
    return (
      <View>
        <Button
          height={0.1}
          localPosition={[0.4, -0.2, 0]}
          onClick={this.buttonClickHandler}
          roundness={0.7}
          textSize={0.03}
          width={0.3}
        >
          Click Me
        </Button>
      </View>
    );
  }
}
​
// Tested with:
// magic-script-components: 2.0.2
// magic-script-components-lumin: 1.0.11
// magic-script-components-react-native: 1.0.1
```

import ExpandableSection from '@theme/ExpandableSection';


<ExpandableSection title="Common Events">

<div>

<!-- ## Common Events: -->

- onActivate
- onPressed
- onLongPress
- onRelease
- onHoverEnter
- onHoverExit
- onHoverMove
- onEnabled
- onDisabled
- onFocusGained
- onFocusLost
- onFocusInput
- onUpdate
- onDeleted
- onEvent
- onUpdateLoop

</div>

</ExpandableSection>


<ExpandableSection title='Common Properties' path='content/Properties.md' />
​

​
## Create Properties

| Name      | Type   | Default Value | Required | Description |
| --------- | ------ | :-----------: | :------: | -------------------------------------------------------------------------------------------------------------------------------- |
| text      | string |      n/a      |    Y     | The UTF-8 encoded text to set the initial value of the button label.                                                             |
| width     | number |      `0`      |    N     | The width of the button, 0 for default.                                                                                          |
| height    | number |      `0`      |    N     | The height of the button, 0 for default.                                                                                         |
| roundness | number |      1.0      |    N     | The ratio of corner rounding (0-1). Use `1` for a fully rounded button, such as a circle or capsule. Use `0` for a sharp corner. |

​
## Element Properties

| Name      | Type   | Default Value            | Description                               |
| :-------- | :----- | :----------------------: | ----------------------------------------- |
| iconColor | vec4   | [0.75, 0.75, 0.75, 1.00] | Sets the RGBA color of the button icon.   |
| iconSize  | vec2   |       [0.04, 0.04]       | Sets the button icon size in scene units. |
| text      | string |       empty string       | Sets the UTF-8 encoded button text.       |
| textColor | vec4   | [0.75, 0.75, 0.75, 1.00] | Sets the RGBA color of the button text.   |
| textSize  | number |          0.0167          | Sets the text size.                       |
