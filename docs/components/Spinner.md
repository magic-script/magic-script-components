---
id: spinner
title: Spinner
---
## Description
The Spinner component shows the loading state using specific visual effects. There are two types of loading spinners (`sprite-animation`, `particle-package`) with different effects.

## Example

```javascript
<Spinner />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name         | Type    | Default Value | Description |
| ------------ | ------- | :-----------: | ----------- |
| type         | string  |      n/a      | The loading spinner type (`sprite-animation` or `particle-package`). |
| resourceId   | number  |       0       | The resource ID. |
| resourcePath | string  |      ''       | The resource path in the resource (optional). |
| height       | number  |      `0`      | The height of the loading spinner (optional). |
| determinate  | boolean |    `false`    | If `true`, this creates a determinate loading spinner component using default settings. |

## Element Properties

| Name  | Type   | Description |
| :---- | :----- | ----------- |
| value | number | Sets a normalized value between 0-1 for loading completeness, with `0` being no progress and `1` fully complete. This is used only when the loading spinner is determinate. |
| size  | vec2   | Sets the loading spinner size. This affects the visual scale of all sprite-based loading spinners but has no affect on the visual scale of a particle-based spinner. Modify the particle files directly to adjust the particle effect size. This does affect, and should be used to adjust, the bounds of all loading spinners.|

### type options: [LoadingSpinnerType](../types/LoadingSpinnerType.md)
