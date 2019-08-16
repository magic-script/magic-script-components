# Text

## Tag: `<Text>`

- #### Lumin Runtime native component - UiText

## [Common Events](../Events.md)

## [Common Properties](../Properties.md)

## Create Properties

| Name   | Type   | Default Value | LRT Name | LRT type                   |
| :----- | :----- | :-----------: | :------- | :------------------------- |
| text   | string |      n/a      | Text     | string                     |
| style  | string |   `normal`    |          | lumin.resources.FontStyle  |
| weight | string |   `regular`   |          | lumin.resources.FontWeight |

If `text` is empty, the content of the `<text>` tag will be used as text.

## Element Properties

| Name           | Type     | LRT Name         | LRT type                         |
| :------------- | :------- | :--------------- | :------------------------------- |
| text           | string   | Text             | string                           |
| allCaps        | boolean  | AllCaps          | boolean                          |
| charSpacing    | number   | CharacterSpacing | number                           |
| style          | string   | Style            | lumin.resources.FontStyle        |
| weight         | string   | Weight           | lumin.resources.FontWeight       |
| lineSpacing    | number   | LineSpacing      | number                           |
| text           | string   | Text             | string                           |
| textAlignment  | string   | TextAlignment    | lumin.ui.HorizontalTextAlignment |
| textColor      | verc4    | TextColor        | vec4                             |
| textSize       | number   | TextSize         | number                           |
| boundsSize     | _object_ | BoundsSize       | _multiple parameters_            |
| fontParameters | _object_ | FontParameters   | lumin.ui.FontParams              |

### boundsSize

```
{
    boundsSize: vec2,
    wrap: boolean
}
```

### fontParameters

```
{
    style: string,
    weight: string,
    fontSize: number,
    tracking: number,
    allCaps: boolean
}
```
