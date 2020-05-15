---
id: text
title: Text
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='text' />​

## Description

This is the base component of any static text element placed in your prism. These are single or multi-line text areas of UTF-8 encoded 2D text. Use them inside your prism as is, or call them from other components. Text cannot be modified by a user, but can be copied with the cursor.

## Example

```javascript
import React from 'react';
import { Text, View, Image, Prism, Scene } from 'magic-script-components';

export default class MyApp extends React.Component {
  render() {
    return (
      <Scene>
        <Prism size={[1, 1, 0.2]} >
          <View name="main-view" alignment={'center-center'} localPosition={[-0.31, 0, 0]}>
            <Text alignment={'center-left'} textSize={0.1} weight={"bold"} textColor={"#85D834"} localPosition={[0, 0.12, 0]}>
              Lorem Ipsum
        </Text>
            <Image alignment={'center-left'} height={0.07} width={0.07} icon={"phone"} />
            <Text alignment={'center-left'} textSize={0.05} textColor={"#B5B5B5"} localPosition={[0.1, 0, 0]}>
              (555)-123-1234
        </Text>
            <Image alignment={'center-left'} height={0.07} width={0.07} icon={"send"} localPosition={[0, -0.1, 0]} />
            <Text alignment={'center-left'} textSize={0.05} textColor={"#e0e0e0"} localPosition={[0.1, -0.1, 0]}>
              lorem.lpsum@magicleap.com
        </Text>
          </View>
        </Prism>
      </Scene>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Required | Description                                          |
| :----- | :----- | :-----------: | :------: | ---------------------------------------------------- |
| text   | string |      n/a      |    N     | The UTF-8 encoded text to initially set the text to. |
| style  | string |   `normal`    |    N     | The style of the Magic Leap font.                    |
| weight | string |   `regular`   |    N     | The weight (i.e., thickness) of the Magic Leap font. |

If `text` is empty, the content of the `<text>` tag will be used as text.

### style options: [FontStyle](../types/FontStyle.md)

### weight options: [FontWeight](../types/FontWeight.md)

## Element Properties

| Name           | Type     | Default Value | Description |
| :------------- | :------- | :-----------: | ----------- |
| allCaps        | boolean  |      n/a      | Displays the text in all caps if `true`.  |
| charSpacing    | number   |      `0`      | Sets the additional character spacing that is applied between characters. |
| lineSpacing    | number   |     `1.0`     | Sets the line spacing to adjust the distance between lines of text; e.g., use 1 for single-spaced text, 2 for double-spaced text. |
| style          | string   |    `normal`   | Sets the style of the Magic Leap font.  |
| weight         | string   |    `regular`    | Sets the weight (i.e., thickness) of the Magic Leap font.  |
| text           | string   |        n/a       | Sets the UTF-8 encoded text. This call is ignored if there is a current localization key set. Set the localization key to an empty string, "", to unset it.  |
| textAlignment  | string   |      `left`         | Aligns the text to the left, center, or right or justifies it.  |
| textColor      | verc4    |      `white`         | Sets the RGBA color of the rendered text.  |
| textSize       | number   |       n/a        | Sets the text render size height in scene units.  |
| boundsSize     | _object_ |     `0,0`     | Sets the text bounds size in scene units. The default value of `0,0` indicates there is no bounds and the text can grow and does not wrap or truncate. Setting the bounds greater than `0` in both X and Y will set the text bounds and cause the text to wrap or truncate within. |
| fontParameters | _object_ |         n/a      | Sets the font parameters, including style, weight, pixel size, and tracking. This uses one of the default sets of Magic Leap font resources that support style and weight.  |

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
