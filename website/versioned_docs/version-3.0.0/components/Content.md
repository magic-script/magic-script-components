---
id: content
title: Content
---

## Description

The root component for a group of components. An example of a parent component is `ScrollView`.

## Example

```javascript
import React from 'react';
import { ScrollView, ScrollBar, Content, Text, Button } from 'magic-script-components';

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const aabb = {
      min: [-0.1, -0.3, -0.1],
      max: [0.15, 0.3, 0.1]
    };

    return (
      <ScrollView scrollBounds={aabb}>
        <Content>
          {Array(10).fill(0).map((value, index) => <Text key={index} localPosition={[0, -0.1 * index, 0]} text={`Item ${index + 1}`} textSize={0.08} />)}
        </Content>
      </ScrollView>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name           | Type |                 Default Value                  | Description                                                                   |
| -------------- | ---- | :--------------------------------------------: | ----------------------------------------------------------------------------- |
| localTransform | mat4 | 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 | The local transform of the new node. Use glm::mat4() for the identity matrix. |