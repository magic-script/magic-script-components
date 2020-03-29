---
id: textEdit
title: TextEdit
---

## Description

The TextEdit component creates an editable text box for text entry on a single or multiple lines. The last line includes a white underline to clearly delineate that the text box is editable. Include a UTF-8 compatible font in your project if you expect characters outside of the ISO Latin-1 character set.

## Example

```javascript
<TextEdit
  charSpacing={0.02}
  height={0.08}
  lineSpacing={0.3}
  localPosition={[-0.9, 0.5, 0]}
  padding={[0.5, 0.3, 0.5, 0.3]}
  text="Edit Me"
  textAlignment="center"
  textSize={0.03}
  width={0.4}
/>
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description                                     |
| ------ | ------ | :-----------: | ----------------------------------------------- |
| text   | string |      n/a      | The initial UTF-8 encoded text in the text box. |
| width  | number |      n/a      | The width of the text edit area.                |
| height | number |      n/a      | The height of the text edit area.               |

## Aditional (optional) parameters for create step.

| Name            | Type     | Default Value | Description                                                                                                                                            |
| --------------- | -------- | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fontDescription | _object_ |      n/a      | A 2D font that is a font rendered onto a planar image (whatever the format), as opposed to a 3D model of the glyphs or other graphical representation. |
| filePath        | string   |      n/a      | The font file from which the glyphs are loaded. By default this is assumed to be a relative path from the executable file.                             |
| absolutePath    | boolean  |    `false`    | Flags that the `filePath` is an absolute path name, instead of a relative path.                                                                        |

### fontDescription

```javascript
{
    advanceDirection: <string>,
    flowDirection: <string>,
    tileSize: <number>,
    quality: <string>,
    minAlpha: <number>,
}
```

### AdvanceDirection options: [AdvanceDirection](../types/AdvanceDirection.md)

### FlowDirection options: [FlowDirection](../types/FlowDirection.md)

### Quality options: [Quality](../types/Quality.md)

## Element Properties

| Name                 | Type     | Description                                                                                                                                                                                             |
| :------------------- | :------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| charLimit            | number   | Sets the maximum number of characters allowed in the text box.                                                                                                                                          |
| charSpacing          | number   | Sets the additional character spacing that is applied between characters. Note that `0` is the default spacing.                                                                                         |
| cursorEdgeScrollMode | string   | Sets the cursor edge scroll mode for this text box.                                                                                                                                                     |
| style                | string   | Sets the style of the Magic Leap font.                                                                                                                                                                  |
| weight               | string   | Sets he weight (i.e., thickness) of the Magic Leap font.                                                                                                                                                |
| hint                 | string   | Sets the UTF-8 encoded text for hint text.                                                                                                                                                              |
| hintColor            | vec4     | Sets the text color of the hint.                                                                                                                                                                        |
| lineSpacing          | number   | Sets the line spacing to adjust the distance between lines of text; e.g., use 1 for single-spaced text, 2 for double-spaced text. The default is 1.0.                                                   |
| multiline            | boolean  | Sets whether the text box is in multiline mode or not. The default is single line.                                                                                                                      |
| password             | boolean  | Sets whether the text box is in password mode or not.                                                                                                                                                   |
| scrollBarVisibility  | string   | Creates and shows the scrollbar in the vertical direction. If a scrollbar already exists, only its visibility is affected. This function also attaches the scrollbar to the ScrollView that manages it. |
| scrolling            | boolean  | Sets whether scrolling is enabled or not.                                                                                                                                                               |
| scrollSpeed          | number   | Sets the scroll speed in scene units per second.                                                                                                                                                        |
| scrollValue          | number   | Manually scrolls the `textEdit` content position using a normalized value between 0 and 1.                                                                                                              |
| selectedBegin        | number   | The first index for text selection.                                                                                                                                                                     |
| selectedEnd          | number   | The last index for text selection.                                                                                                                                                                      |
| text                 | string   | Sets the UTF-8 encoded text.                                                                                                                                                                            |
| textAlignment        | string   | Aligns the text to the left, center, or right or justifies it.                                                                                                                                          |
| textColor            | vec4     | Sets the RGBA color of the rendered text.                                                                                                                                                               |
| textEntry            | string   | Sets the current text entry mode of the text box.                                                                                                                                                       |
| textPadding          | vec4     | Sets the padding around the text within the text edit area. This defaults to half the text size unless explicitly set. The padding order is: top, right, bottom, left.                                  |
| textSize             | number   | Sets the text render size height in scene units.                                                                                                                                                        |
| fontParams           | _object_ | Sets the font parameters, including syle, weight, pixel size, and tracking. This uses one of the default sets of Magic Leap font resources that support style and weight.                               |

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

### style options: [FontStyle](../types/FontStyle.md)

### weight options: [FontWeight](../types/FontWeight.md)

### textAlignment options: [HorizontalTextAlignment](../types/HorizontalTextAlignment.md)

### cursorEdgeScrollMode options: [CursorEdgeScrollMode](../types/CursorEdgeScrollMode.md)

### scrollBarVisibility options: [ScrollBarVisibility](../types/ScrollBarVisibility.md)

### textEntry options: [TextEntryMode](../types/TextEntryMode.md)
