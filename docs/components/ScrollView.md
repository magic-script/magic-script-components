---
id: scrollView
title: ScrollView
---
## Description
The ScrollView component represents a scrollable content view so objects, such as images or text, can overflow the viewable area. The ScrollView creates a 3D box that you specify a minimum and maximum corner that contains all of your content. The scroll bounds sets the viewable area (AABB) of the 3D box. Content outside the scroll bounds is clipped. You can scroll horizontally, vertically, or both. When scrolling, the cursor snaps to contents of the scroll view when gravity wells and snap are enabled. 

By default, the scroll view is the size of the volume that called it and scrolls vertically with a .5f scroll rate and a 2.0f activity duration.

## Example

```javascript
<ScrollView>
  <ScrollBar />
  <Content>
    <Text>Message Box</Text>
    <Button>Submit</Button>
  </Content>
</ScrollView>
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name                | Type     | Description |
| :------------------ | :------- | ----------- |
| scrollBarVisibility | string   | Sets the visibility mode of any attached scrollbars. The visibility mode affects the visibility of any attached scroll bars. |
| scrollDirection     | string   | Sets the scroll direction for the scroll view. The default is vertical. |
| scrollMask          | number   | Applies the texture resource as a mask for ScrollView content. |
| scrollOffset        | vec3     | Sets the scroll content offset manually. |
| scrollSpeed         | number   | Sets the scroll speed in scene units per second. |
| scrollValue         | number   | Sets the scroll content position manually with a normalized value between 0 and 1. |
| scrollBounds        | _object_ | Sets the scroll bounds. The bounds are defined within the ScrollView's local coordinate system. The scroll bounds is used to both clip content visually and to automatically clamp content scrolling extents to stay within the bounds. |

### scrollBounds
```javascript
{
    min: <vec3>,
    max: <vec3>
}
```

### scrollBarVisibility options: [ScrollBarVisibility](../types/ScrollBarVisibility.md)
### ScrollDirection options: [ScrollDirection](../types/ScrollDirection.md)
