---
id: progressBar
title: ProgressBar
---
## Description
ProgressBar is used to show the progress of an event. By default, a ProgressBar creates a horizontal progress bar. You cannot modify the progress bar size after you create it.

## Example

```javascript
<ProgressBar />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description                                    |
| ------ | ------ | :-----------: | ---------------------------------------------- |
| width  | number |      n/a      | The width of the progress bar.                 |
| height | number |      n/a      | The height of the progress bar, 0 for default. |

## Element Properties

| Name          | Type     | Description                                                                                                                                 |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| min           | number   | Sets the progress bar min value. Default value for min is 0. This min value is set only if it is less than the progress bar's max value.    |
| max           | number   | Sets the progress bar max value. Default value for max is 1. This max value is set only if it is greater than the progress bar's min value. |
| value         | number   | Sets the progress bar value. The value will be clamped within the current min and max range.                                                |
| progressColor | _object_ | Sets the progress color.                                                                                                                    |

### progressColor

```javascript
{
    beginColor: <vec4>,
    endColor: <vec4>
}
```
