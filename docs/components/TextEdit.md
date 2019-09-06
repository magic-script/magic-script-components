---
id: textEdit
title: TextEdit
---

TextEdit is a component for inputting text into the application.

## Example

```javascript
<TextEdit />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | LRT Name | LRT type |
| ------ | ------ | :-----------: | -------- | -------- |
| text   | string |      n/a      | Text     | string   |
| width  | number |      n/a      | Width    | number   |
| height | number |      n/a      | Height   | number   |

## Element Properties

| Name                 | Type     | LRT Name             | LRT type                         |
| :------------------- | :------- | :------------------- | :------------------------------- |
| charLimit            | number   | CharLimit            | number                           |
| charSpacing          | number   | CharSpacing          | number                           |
| cursorEdgeScrollMode | string   | CursorEdgeScrollMode | lumin.ui.CursorEdgeScrollMode    |
| style                | string   | Style                | lumin.resources.FontStyle        |
| weight               | string   | Weight               | lumin.resources.FontWeight       |
| hint                 | string   | Hint                 | string                           |
| hintColor            | vec4     | HintColor            | vec4                             |
| lineSpacing          | number   | LineSpacing          | number                           |
| multiline            | boolean  | MultilineMode        | boolean                          |
| password             | boolean  | PasswordMode         | boolean                          |
| scrollBarVisibility  | string   | ScrollBarVisibility  | lumin.ui.ScrollBarVisibility     |
| scrolling            | boolean  | ScrollingEnabled     | boolean                          |
| scrollSpeed          | number   | ScrollSpeed          | number                           |
| scrollValue          | number   | ScrollValue          | number                           |
| selectedBegin        | number   | SelectedText         | number                           |
| selectedEnd          | number   | SelectedText         | number                           |
| text                 | string   | Text                 | string                           |
| textAlignment        | string   | TextAlignment        | lumin.ui.HorizontalTextAlignment |
| textColor            | vec4     | TextColor            | vec4                             |
| textEntry            | string   | TextEntryMode        | lumin.ui.TextEntryMode           |
| textPadding          | vec4     | TextPadding          | vec4                             |
| textSize             | number   | TextSize             | number                           |
| fontParams           | _object_ | FontParams           | lumin.ui.FontParams              |

### fontParameters

```javascript
{
    style: string,
    weight: string,
    fontSize: number,
    tracking: number,
    allCaps: boolean
}
```
