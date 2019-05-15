# UI Elements

>**The document and the framework are under active development !**

> Properties without *`Default Value`* are required !

### Common Properties

Name | Type | Default Value | LRT Name | LRT type
:-----|:------|:---------------:|:----------|:---------
name | string | empty string | Name | string
position | vec3 | [ 0, 0, 0 ] | LocalPosition | vec3
rotation | quat | [ 0, 0, 0, 0 ] | LocalRotation | quat
scale | vec3 |  | LocalScale | vec3
transform | mat4 | | LocalTransform | mat4
visible | boolean | true | Visible | boolean

### Common Properties for Ui elements
Name | Type | Default Value | LRT Name | LRT type
:-----|:------|:---------------:|:----------|:---------
alignment | string | | Alignment | lumin.Alignment
enabled | boolean | | Enabled | boolean

### Common Events for the Ui elements
- onActivate
- onPressed
- onLongPress
- onRelease
- onHoverEnter
- onHoverExit
- onHoverMove
- onEnabled
- onDisabled
- onFocusGained
- onFocusLost
- onFocusInput
- onUpdate
- onDeleted

---
## UiText

### Tag: `<text>`
### Create Properties

Name | Type | Default Value | LRT Name | LRT type
:-----|:------|:---------------:|:----------|:---------
text | string | n/a | Text | string
style| string | `normal` | | lumin.resources.FontStyle
weight | string | `regular` | | lumin.resources.FontWeight

If `text` is empty, the content of the `<text>` tag will be used as text.

### Element Properties
Name | Type | LRT Name | LRT type
:-----|:------|:----------|:---------
text | string | Text | string
allCaps | boolean | AllCaps | boolean
boundsSize | _object_ | BoundsSize | _multiple parameters_
charSpacing | number | CharacterSpacing | number
style | string | Style | lumin.resources.FontStyle
weight | string | Weight | lumin.resources.FontWeight
fontParameters | _object_ | FontParameters
lineSpacing | number | LineSpacing | number
text | string | Text | string
textAlignment | string | TextAlignment | lumin.ui.HorizontalTextAlignment
textColor | verc4 | TextColor | vec4
textSize | number | TextSize | number

#### boundsSize
```
{
    boundsSize: vec2,
    wrap: boolean
}
```
#### fontParameters
```
{
    style: string,
    weight: string,
    fontSize: number,
    tracking: number,
    allCaps: boolean
}
```

---

## UiButton

### Tag: `<button>`
### Properties

Name | Type | Default Value | LRT Name | LRT type
-----|------|:---------------:|----------|---------
text | string | n/a | Text | string
width | number | n/a |  | number
height | number | n/a |  | number
---

## UiImage

### Tag: `<image>`
### Properties
>Image offers 3 constructors accepting different property sets

Name | Type | Default Value | LRT Name | LRT type
-----|------|:--------------:|----------|---------
filePath | string | n/a | pngFile | string
width | number | n/a | Width | number
height | number | n/a  | Height | number
absolutePath | boolean | False | AbsolutePath | boolean
useFrame | boolean | False | UseFrame | boolean

---

Name | Type | Default Value | LRT Name | LRT type
-----|------|:-------------:|----------|---------
resourceId | number | n/a | ResId | number
width | number | n/a | Width | number
height | number | n/a  | Height | number
useFrame | boolean | False | UseFrame | boolean

---

Name | Type | Default Value | LRT Name | LRT type
-----|------|:-------------:|----------|---------
icon | string | n/a | Type | lumin.ui.SystemIcon
height | number | n/a | Height | number

---

## UiPageView

### Tag: `<pageView>`
### Properties

Name | Type | Default Value | LRT Name | LRT type
-----|------|:-------------:|----------|---------
width | number | n/a | Width | number
height | number | n/a | Height | number
---

## UiListView

### Tag: `<listView>`
### Properties

Name | Type | Default Value | LRT Name | LRT type
-----|------|:-------------:|----------|---------
width | number | 0 | Width | number
height | number | 0 | Height | number

### Events
- onScrollChanged
---

## UiListViewItem

### Tag: `<listViewItem>`
### Properties: has no properties !

---

## ModelNode

### Tag: `<model>`
### Properties

Name | Type | Default Value | LRT Name | LRT type
-----|------|:-------------:|----------|---------
modelPath | string | n/a
materialPath | string | n/a
texturePath | string | n/a
textureName | string | n/a
---

## VideoNode

### Tag: `<video>`
### Properties

Name | Type | Default Value | LRT Name | LRT type
-----|------|:-------------:|----------|---------
width | number | 512 | Width | number
height | number | 512 | Height | number
videoPath | string | n/a |
viewMode | string | `full-area` | ViewMode | lumin.ViewMode
volume | number | 1 | Volume | number
---
