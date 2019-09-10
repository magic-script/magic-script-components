---
id: text
title: Text
---

Text is a component for displaying text.

## Example

```javascript
import React from "react";
import { Text } from "magic-script-components";

export default class TextExample extends React.Component {
  render() {
    return (
      <Text textSize={0.1} localPosition={[-0.3, 0, 0]}>
        Text Example
      </Text>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description |
| :----- | :----- | :-----------: | ----------- |
| text   | string |      n/a      | The UTF-8 encoded text to initially set the Text to. |
| style  | string |   `normal`    | The style of the Magic Leap font. |
| weight | string |   `regular`   | The weight (i.e., thickness) of the Magic Leap font. |

If `text` is empty, the content of the `<text>` tag will be used as text.

### style options: [FontStyle](../types/FontStyle.md)
### weight options: [FontWeight](../types/FontWeight.md)

## Element Properties

| Name           | Type     | Description |
| :------------- | :------- | ----------- |
| allCaps        | boolean  | Sets whether all caps is enforced or not. |
| charSpacing    | number   | Sets the additional character spacing that is applied between characters. Note a spacing of 0 is the default spacing. |
| lineSpacing    | number   | Sets the line spacing to adjust the distance between lines of text; e.g., use 1 for single-spaced text, 2 for double-spaced text. Default is 1.0. |
| style          | string   | The style of the Magic Leap font. |
| weight         | string   | The weight (i.e., thickness) of the Magic Leap font. |
| text           | string   | Sets the UTF-8 encoded text. Note, this call will be ignored if there is a current localization key set. Set the localization key to empty string, "", to unset it. |
| textAlignment  | string   | Aligns the text to the left, center or right or justifies it. |
| textColor      | verc4    | Sets the RGBA color of the rendered text. |
| textSize       | number   | Sets the text render size height in scene units. |
| boundsSize     | _object_ | Sets the text bounds size in scene units. The default value of 0,0 indicates there is no bounds and the text can grow and will not wrap or truncate. Setting the bounds greater than 0 in both X and Y will set the text bounds and cause the text to wrap or truncate within. |
| fontParams     | _object_ | Sets the font parameters, including style, weight, pixel size, and tracking. This will use one of the default set of Magic Leap font resources that support style and weight. |

### boundsSize

```javascript
{
    boundsSize: vec2,
    wrap: boolean
}
```

### fontParams

```javascript
{
    style: string,
    weight: string,
    fontSize: number,
    tracking: number,
    allCaps: boolean
}
```

### textAlignment options: [HorizontalTextAlignment](../types/HorizontalTextAlignment.md)
