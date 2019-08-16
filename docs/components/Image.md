# Image

## Tag: `<Image>`

- #### Lumin Runtime native component - UiImage

## [Common Events](../Events.md)

## [Common Properties](../Properties.md)

## Create Properties

> Image offers 3 constructors accepting different property sets

| Name         | Type    | Default Value | LRT Name     | LRT type |
| ------------ | ------- | :-----------: | ------------ | -------- |
| filePath     | string  |      n/a      | pngFile      | string   |
| width        | number  |      n/a      | Width        | number   |
| height       | number  |      n/a      | Height       | number   |
| absolutePath | boolean |     False     | AbsolutePath | boolean  |
| useFrame     | boolean |     False     | UseFrame     | boolean  |

---

| Name       | Type    | Default Value | LRT Name | LRT type |
| ---------- | ------- | :-----------: | -------- | -------- |
| resourceId | number  |      n/a      | ResId    | number   |
| width      | number  |      n/a      | Width    | number   |
| height     | number  |      n/a      | Height   | number   |
| useFrame   | boolean |     False     | UseFrame | boolean  |

---

| Name   | Type   | Default Value | LRT Name | LRT type            |
| ------ | ------ | :-----------: | -------- | ------------------- |
| icon   | string |      n/a      | Type     | lumin.ui.SystemIcon |
| height | number |      n/a      | Height   | number              |

## Element Properties

| Name               | Type    | LRT Name           | LRT type |
| :----------------- | :------ | :----------------- | :------- |
| color              | vec4    | Color              | vec4     |
| width              | number  | Width              | number   |
| height             | number  | Height             | number   |
| textCoords         | vec4    | TextCoords         | array[4] |
| opaque             | boolean | IsOpaque           | boolean  |
| ui                 | boolean | IsUI               | boolean  |
| imageFrameResource | number  | ImageFrameResource | number   |
| renderResource     | number  | RenderResource     | number   |
