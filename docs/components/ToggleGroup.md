---
id:  toggleGroup
title:  ToggleGroup
---
## Description
ToggleGroup represents a group of standard, clickable toggles.

## Example

```javascript
< ToggleGroup />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name            | Type    | Default Value | Description                                             |
| --------------- | ------- | :-----------: | ------------------------------------------------------- |
| allowMultipleOn | boolean |    `false`    | The default (false) does not allow multiple toggles ON. |
| allowAllOff     | boolean |    `false`    | The default (false) does not allow all toggles OFF.     |

## Element Properties

| Name            | Type    | Description                                                                                     |
| :-------------- | :------ | ----------------------------------------------------------------------------------------------- |
| allowMultipleOn | boolean | Flags that whether multiple toggles are allowed to be switched ON in the toggle group.          |
| allowAllOff     | boolean | Flags that whether all toggles are allowed to be switched OFF in the toggle group.              |
| allTogglesOff   | boolean | Switch all toggles OFF regardless of whether all toggles are allowed to be switched off or not. |
