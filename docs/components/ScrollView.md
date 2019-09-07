---
id: scrollView
title: ScrollView
---

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
| scrollBarVisibility | string   | Sets the vibility mode of any scrollbar(s) attached. The visibility mode will affect the visibility of any attached scroll bars. |
| scrollDirection     | string   | Sets the scroll direction for the scroll view (default is vertical). |
| scrollMask          | number   | Applies the texture resource as a mask for UiScrollView content. |
| scrollOffset        | vec3     | Sets the scroll content offset manually. |
| scrollSpeed         | number   | Sets the scroll speed in scene units per second. |
| scrollValue         | number   | Sets the scroll content position manually with normalized value between 0 and 1. |
| scrollBounds        | _object_ | Sets the scroll view bounds. The bounds are defined within the ScrollView's local coordinate system. The scroll bounds is used to both clip content visually and to automatically clamp content scrolling extents to stay within the bounds. |

### scrollBounds
```javascript
{
    min: <vec3>,
    max: <vec3>
}
```

### scrollBarVisibility options: [ScrollBarVisibility](../types/ScrollBarVisibility.md)
### ScrollDirection options: [ScrollDirection](../types/ScrollDirection.md)
