---
id: scrollBar
title: ScrollBar
---
## Description
The ScrollBar creates a scrollbar used in conjunction with a ScrollView. This creates the visual indicator that the content can be scrolled and provides the controls used to scroll the view. By default, the scrollbar is as long the ScrollView is. The ends of the scrollbar cannot be interacted with, so the scroll range is less than the entire length of the scroll bar. You generally do not need to change either.

## Example

```javascript
<ScrollBar />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description |
| ------ | ------ | :-----------: | ----------- |
| width  | number |      n/a      | The length of the scrollbar. This is a little bit longer than the scroll range (which is the range the thumb will run) |
| height | number |      `0`      | This is how wide the scrollbar will be. A user should normally not care about this unless they intend to change the skin of an app |

## Element Properties

| Name          | Type   | Description  |
| :------------ | :----- | ------------ |
| thumbSize     | number | Sets the size of the thumb. This function is called in particular by UiScrollBar to update the size of the thumb according to the size of the scroll bound in respect to that of the scroll content. If the ratio is out of the range 0-1, the thumb is hidden. |
| thumbPosition | number | Sets the position of the thumb along the track according to the value passed. A value of 0 will place the thumb at the left/upper most possible position along the track. A value of 1 will place the thumb at the right/bottom most possible position along the track. This value must reflect the position of the ScrollView's scroll bound in respect to ScrollView's scroll content. |
| orientation   | string | Used only when adding ScrollBar to ScrollView |

### orientation options: [Orientation](../types/Orientation.md)
