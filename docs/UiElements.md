# UI Elements

>**The document and the framework are under active development !**

> Properties without *`Default Value`* are required !

## UiText

### Tag: `<text>`
### Properties

Name | Type | Default Value | LRT Name | LRT type  
:-----|:------|:---------------:|:----------|:---------
text | string | n/a | Text | string
style| string | `normal` | | lumin.resources.FontStyle
weight | string | `regular` | | lumin.resources.FontWeight

If `text` is empty, the content of the `<text>` tag will be used as text.

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
