---
id: flexLayout
title: FlexLayout
---

## Description

This component was inspired on the web’s flexbox specification to ease the learning curve and speed up the process of building layouts using Magic Script Components.

The main difference that sets this component apart, is that it handles sizes and locations in percentages no matter what your prism size is, so children are laid out in proportion to their parent. If the parent scales down in any way, all children will scale down proportionally like they do on the web without extra work.

Also, much like on the web, this component is meant to build 2d layouts, so when we define margin or sizes we only define 2 dimensions. If you need to work with depth, you can use the prop `zIndex` to move elements in the Z axis on a percentage base, relative to the depth of the prism (need to define depth prop too).

Important: The outermost (top parent) FlexLayout element is the only one that receives meter units (for width, height and depth) as at some point we need to specify the actual size of our space before using relative units. That’s why we recommend filling the prism with a FlexLayout and then nesting other FlexLayouts inside to build the structure, as all nested items will use percentage units inside.

```javascript
import React from "react";
import { TextEdit } from "magic-script-components";

import FlexLayout from "./FlexLayout";

export default class MyApp extends React.Component {
  render() {
    return (
      <FlexLayout height={1} width={2}>
        <FlexLayout
          direction="column"
          alignment="center"
          height="100%"
          width="30%"
        >
          <TextEdit
            localPosition={[-0.2, 0.48, 0]}
            text="This the first sample text line"
            textAlignment="left"
            textSize={0.04}
            height="20%"
            width="30%"
          />
        </FlexLayout>
      </FlexLayout>
    );
  }
}
```

## Element Properties

| Name      | Type         | Default Value | Description                                                                                                                                 |
| --------- | ------------ | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| height    | String/float |  [required]   | The outermost (top parent) element uses float units. All nested FlexLayouts as well as other elements use percentages expressed in strings. |
| width     | string/float |  [required]   | The outermost (top parent) element uses float units. All nested FlexLayouts as well as other elements use percentages expressed in strings. |
| direction | string       |     `row`     | row: Stack children horizontally / column: Stack children vertically.                                                                       |
| alignment | string       |    `left`     | left: It left-aligns children / right: It right-aligns children                                                                             |
| depth     | float        |  `undefined`  | Defines the depth of the prism. This value is required when adding zIndex values to FlexLayouts. Only the outermost layout takes this prop. |
| zIndex    | string       |  `undefined`  | Percentage unit that represents where the element is located in the X axis.                                                                 |

FlexLayout consumes its children, read their props and translates their width and height props so you can now use percentages relative to the FlexLayout dimensions, instead of using absolute metric ones.

Note: the prop localPosition for children is disabled, however, you can individually add margins to specific children using the margin prop. To move the element in the Z axis, use zIndex.

## Child Properties

| Name   | Type   | Description                                                                                                                                                                                                                |
| ------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| height | String | This option is available depending if the element supports it (refer to the component’s documentation). This value is expressed in percentages and it’s relative to the immediate FlexLayout parent.                       |
| width  | string | This option is available depending if the element supports it (refer to the component’s documentation). This value is expressed in percentages and it’s relative to the immediate FlexLayout parent.                       |
| margin | vec4   | Margins are expressed in float (metric) units and follow the following order: top, right, bottom, left. i.e: [0.1,0.2,0.3,0.4] would give the following margins:<br>Top: 0.1<br>Right: 0.2<br>Bottom: 0.3<br>Left: 0.4<br> |

FlexLayouts can be nested to create complex layouts, but they can only be wrapped by another FlexLayout or the relative proportions would be lost.
