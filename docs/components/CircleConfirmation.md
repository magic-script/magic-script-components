---
id: circleConfirmation
title: CircleConfirmation
---

## Example

```javascript

onConfirmationCanceled = (event) => {
    print("onConfirmationCanceled");
  }

onConfirmationUpdate = (event) => {
    print("onConfirmationUpdate");
  }

onConfirmationComplete = (event) => {
    print("onConfirmationComplete");
  }

<CircleConfirmation
    onConfirmationCanceled={this.onConfirmationCanceled}
    onConfirmationComplete={this.onConfirmationComplete}
    onConfirmationUpdate={this.onConfirmationUpdate}
    height={0.2}
></CircleConfirmation>


```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description                                   |
| ------ | ------ | :-----------: | --------------------------------------------- |
| height | number |      `0`      | The radius of the circle the knob evolves at. |
