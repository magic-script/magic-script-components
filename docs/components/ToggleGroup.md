---
id: toggleGroup
title: ToggleGroup
---

## Description

ToggleGroup represents a group of standard, clickable toggles.

## Example

```javascript
<ToggleGroup />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name            | Type    | Default Value | Description                                     |
| --------------- | ------- | :-----------: | ----------------------------------------------- |
| allowMultipleOn | boolean |    `false`    | The default does not allow multiple toggles ON. |
| allowAllOff     | boolean |    `false`    | The default does not allow all toggles OFF.     |

## Element Properties

| Name            | Type    | Description                                                                            |
| :-------------- | :------ | -------------------------------------------------------------------------------------- |
| allowMultipleOn | boolean | Flags whether multiple toggles can be switched ON in the toggle group.                 |
| allowAllOff     | boolean | Flags whether all toggles can be switched OFF in the toggle group.                     |
| allTogglesOff   | boolean | Switches all toggles OFF regardless of whether all toggles can be switched off or not. |
