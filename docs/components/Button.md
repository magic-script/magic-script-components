---
id: button
title: Button
---

## Description
Button represents a standard, clickable button that you can select and activate with the Control. You can set the label text and control the size and color of the button or use an icon. Button text uses the default system font, Lomino, and is white.

## Example

```javascript
class MyApp extends React.Component {

  buttonClickHandler = (event) => {
     console.log("Hello from buttonClickHandler");
  }

  render () {
    return (
      <View>
        <Button
          height={0.1}
          localPosition={[0.4, -0.2, 0]}
          onClick={this.buttonClickHandler}
          roundness={0.7}
          textSize={0.03}
          width={0.3}
        >Click Me</Button>
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name      | Type   | Default Value | Description                                                    |
| --------- | ------ | :-----------: | -------------------------------------------------------------- |
| text      | string |      n/a      | The UTF-8 encoded text to initially set the UiButton label to. |
| width     | number |      `0`      | The width of the button, 0 for default.                        |
| height    | number |      `0`      | The height of the button, 0 for default.                       |
| roundness | number |      1.0      | The ratio of corner rounding (0-1). 1 [default] = fully rounded (circle, capsule), 0 = sharp corner. |

## Element Properties

| Name      | Type   | Description                               |
| :-------- | :----- | ----------------------------------------- |
| iconColor | vec4   | Sets the RGBA color of the button icon.   |
| iconSize  | vec2   | Sets the button icon size in scene units. |
| text      | string | Sets the UTF-8 encoded button text.       |
| textColor | vec4   | Sets the RGBA color of the button text.   |
| textSize  | number | Size of text.                             |
