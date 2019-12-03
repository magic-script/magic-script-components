---
id: circleConfirmation
title: CircleConfirmation
---

## Description

CircleConfirmation is the UI element intended to confirm powering off. The user moves the control knob using the touchpad of the Control. When the user makes a complete circle with the control knob, CircleConfirmation signals this to the client code. The client code can then power off upon confirmation receipt.

## Example

```javascript
onConfirmationCanceled = event => {
  console.log("onConfirmationCanceled");
};

onConfirmationUpdate = event => {
  console.log("onConfirmationUpdate");
};

onConfirmationComplete = event => {
  console.log("onConfirmationComplete");
};

<CircleConfirmation
  onConfirmationCanceled={this.onConfirmationCanceled}
  onConfirmationComplete={this.onConfirmationComplete}
  onConfirmationUpdate={this.onConfirmationUpdate}
  radius={0.2}
></CircleConfirmation>;
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Description                                                                                                                                                                        |
| ------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius | number | The radius of the circle the control knob travels to complete the confirmation. The default height is 0.1 (100mm). Setting the value to '0' sets the height to the default height. |
