---
id: rectLayout
title: RectLayout
---

## Tag: `<RectLayout>`

- #### Lumin Runtime native component - UiRectLayout

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| contentAlignment | string | Sets the content alignment within the rectangular area. Default content alignments are TOP_LEFT. When the size of the rect layout is set to zero in a dimension, it grows in that dimension to fit the content and its padding, if any. When the size is set to greater than zero, the content might scale down to fit in the room left by the padding. In this case, content alignment is ignored. |
| padding | vec4 | Sets the content padding for the 4 sides of the rectangular area, in scene units. The default is no padding (0,0,0,0). The padding order is: top, right, bottom, left When the size of the rect layout is set to zero in a dimension, it grows in that dimension to fit the content and its padding, if any. When the size is set to greater than zero, the content might scale down to fit in the room left by the padding. In this case, content alignment is ignored. |

### contentAlignment options: [Alignment](../types/Alignment.md)
