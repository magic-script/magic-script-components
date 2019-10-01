---
id: line
title: Line
---
## Description
The Line component renders a colored line. The Line component creates lines as a series of line segments. Line follows the order in which the points are added, and must have at least two points. Line color is a multiplier to the vertex color. Create disconnected lines by adding line breaks to the Line.

## Example

```javascript
<Line />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name   | Type   | Description                                                                                                                                                               |
| :----- | :----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| points | [vec3] | Sets the points that describe this series of line segments. The line follows the order in which the points are added. No line can exist if there is less than two points. |
