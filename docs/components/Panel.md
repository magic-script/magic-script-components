---
id: panel
title: Panel
---
## Description
The Panel organizes two or more elements, transforms descendents within its bounds, and affects the cursor. Panels can also use gravity wells to lightly constrain the cursor within the panel. Panels can parent other panels or be in a layout with other panels. Use Panels when your app needs high-level or visual navigation clues, or when you need a way to navigate between locations or purposes. Use subpanels when you want to visually separate or sort groups of similar content or group content to receive the same transforms. By default, a Panel creates a 2D square that is centered on the parent node's position.

## Example

```javascript
<Panel />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name                  | Type     | Description                                                                                                                                                                                                                                |
| :-------------------- | :------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cursorConstrained     | boolean  | Sets whether the Panel constrains cursor movement within the boundary shape or not.                                                                                                                                                        |
| cursorInitialPosition | vec3     | Sets the initial position of the cursor within the Panel upon a Panel-to-Panel transition when PanelCursorTransitionType 'initial-position' is in affect.                                                                                  |
| cursorTransitionType  | string   | Sets the cursor transition type for the Panel. The cursor transition type dictates where the cursor appears upon a Panel transition, whether closest edge, center, or manually set initial position. The default is the initial position.  |
| cursorVisible         | boolean  | Sets whether the cursor is visible while inside the `<Panel>`.                                                                                                                                                                             |
| edgeConstraint        | _object_ | Sets the edge constraint and Panel transition properties for a side of the Panel shape.                                                                                                                                                    |
| edgeConstraintLevel   | _object_ | Sets the edge constraint for a side of the Panel shape using a discrete constraint level. Panel edge constraint levels are mapped to a float magnitude and can be used for a consistent setting instead of setting the magnitude manually. |
| panelShape            | _object_ | Sets the boundary shape for the UiPanel. The UiPanel will not be active until the shape is set.                                                                                                                                            |
| side                  | string   |                                                                                                                                                                                                                                            |

### edgeConstraint

```javascript
{
    side: <string>,
    constraintMagnitude: <number>
}
```

### edgeConstraintLevel

```javascript
{
    side: <string>,
    level: <string>
}
```

### panelShape

```javascript
{
    size: <vec2>,
    offset: <vec3>,
    roundness: <number>
}
```

### cursorTransitionType options: [PanelCursorTransitionType](../types/PanelCursorTransitionType.md)

### edgeConstraintLevel.level options: [PanelEdgeConstraintLevel](../types/PanelEdgeConstraintLevel.md)
