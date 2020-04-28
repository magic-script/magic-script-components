---
id: scrollBar
title: ScrollBar
---

## Description

The ScrollBar component creates a scroll bar used in conjunction with a ScrollView component. This creates the visual indicator that the content can be scrolled and provides the controls used to scroll the view. By default, the scroll bar is as long as the ScrollView. The ends of the scroll bar cannot be interacted with, so the scroll range is less than the entire length of the scroll bar. You generally do not need to change either.

## Example

```javascript
import React from "react";
import {
  View,
  ScrollView,
  ScrollBar,
  Text,
  LinearLayout,
  RectLayout,
  Image
} from "magic-script-components";

export default class MyApp extends React.Component {
  render() {
    const contacts = [
      { name: 'Lorem Ipsum    ', email: 'lorem@magicleap.com ', image: require('../resources/contact1.jpg'), phone: '(555)-123-1234' },
      { name: 'Little Kitten  ', email: 'kitten@magicleap.com', image: require('../resources/contact2.jpg'), phone: '(555)-123-1234' },
      { name: 'Lorem Ipsum 2  ', email: 'lorem@magicleap.com ', image: require('../resources/contact1.jpg'), phone: '(555)-123-1234' },
      { name: 'Little Kitten 2', email: 'kitten@magicleap.com', image: require('../resources/contact2.jpg'), phone: '(555)-123-1234' },
      { name: 'Lorem Ipsum 3  ', email: 'lorem@magicleap.com ', image: require('../resources/contact1.jpg'), phone: '(555)-123-1234' },
      { name: 'Little Kitten 3', email: 'kitten@magicleap.com', image: require('../resources/contact2.jpg'), phone: '(555)-123-1234' }
    ];

    const aabb = {
      min: [-0.3, -0.2, -0.3],
      max: [0.3, 0.15, 0.3]
    };
    
    return (
      <View name="main-view">
        <ScrollView scrollBarVisibility="auto" scrollBounds={aabb}>
          <ScrollBar length={0.6} thumbSize={0.03} orientation="vertical" />
          <LinearLayout
            defaultItemAlignment="center-left"
            orientation="vertical"
          >
            {contacts.map((contact, index) => (
              <RectLayout width={0.35} contentAlignment={'top-left'}>
                <View>
                  <Image localPosition={[0, 0, 0]} height={0.17} width={0.17} filePath={contact.image} />
                  <Text localPosition={[0.2, 0.05, 0]} alignment={'center-left'} textSize={0.07} weight={"bold"} textColor={"#85D834"} >
                    {contact.name}
                  </Text>
                  <Text localPosition={[0.2, 0, 0]} alignment={'center-left'} textSize={0.05} textColor={"#e0e0e0"} >
                    {contact.email}
                  </Text>
                  <Text localPosition={[0.2, -0.05, 0]} alignment={'center-left'} textSize={0.05} textColor={"#B5B5B5"}>
                    {contact.phone}
                  </Text>
                </View>
              </RectLayout>
            ))}
          </LinearLayout>
        </ScrollView>
      </View>
    );
  }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name      | Type   | Default Value | Required | Description                                                                                                                             |
| --------- | ------ | :-----------: | :------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| length    | number |      n/a      |    Y     | This is the length of the scroll bar. This is a little bit longer than the scroll range (which is the range the scroll bar thumb runs). |
| thickness | number |      `0`      |    N     | This is the width of the scroll bar. A user should normally not care about this unless they intend to change the skin of an app.        |

## Element Properties

| Name          | Type   | Default Value | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| :------------ | :----- | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| thumbSize     | number |      `0`      | Sets the size of the scroll bar thumb. This updates the size of the scroll bar thumb according to the size of the scroll bounds in respect to the size of the scroll content. If the ratio is out of the range 0-1, the thumb is hidden.                                                                                                                                                               |
| thumbPosition | number |      `0`      | Sets the position of the scroll bar thumb along the track according to the value passed. A value of `0` places the thumb at the left or upper most possible position along the track. A value of `1` places the thumb at the right or bottom most possible position along the track. This value must reflect the position of the ScrollView's scroll bounds in respect to ScrollView's scroll content. |
| orientation   | string |  `vertical`   | Sets how the scroll bar is orientated. This is used only when adding ScrollBar to ScrollView.                                                                                                                                                                                                                                                                                                          |

### orientation options: [Orientation](../types/Orientation.md)