---
id: spinner
title: Spinner
---
## Description
The Spinner shows the loading state using specific visual effects. There are two types of loading spinners (`sprite-animation`, `particle-package`) with different effects.

## Example

```javascript
<Spinner />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name         | Type    | Default Value | Description |
| ------------ | ------- | :-----------: | ----------- |
| type         | string  |      n/a      | loading spinner type |
| resourceId   | number  |       0       | The resource ID. |
| resourcePath | string  |      ''       | The resource path in the resource (optional). |
| height       | number  |      `0`      | The height of the loading spinner (optional). |
| determinate  | boolean |    `false`    | If `true` creates a determinate loading Spinner element using default settings. |

## Element Properties

| Name  | Type   | Description |
| :---- | :----- | ----------- |
| value | number | The normalized value between 0-1 for loading completeness, with 0 being no progress and 1 fully complete. Will have effect only if the loading spinner is determinate. |
| size  | vec2   | Sets the loading Spinner size. This will affect the visual scale of all sprite based loading spinners but has no affect on the visual scale of a particle based spinner. Instead, modify the particle files directly to adjust the particle effect size. This does affect, and should be used to adjust, the bounds of all loading spinners.|

### type options: [LoadingSpinnerType](../types/LoadingSpinnerType.md)