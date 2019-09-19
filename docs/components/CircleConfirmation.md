---
id: circleConfirmation
title: CircleConfirmation
---

## Example

```javascript

onConfirmationCanceled = (event) => {
    console.log("onConfirmationCanceled");
  }

onConfirmationUpdate = (event) => {
    console.log("onConfirmationUpdate");
  }

onConfirmationComplete = (event) => {
    console.log("onConfirmationComplete");
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
