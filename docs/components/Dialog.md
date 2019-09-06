---
id: dialog
title: Dialog
---

## Tag: `<Dialog>`

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Description |
| ------ | ------ | :-----------: | ----------- |
| title  | number |      n/a      | The dialog title text. Use an empty string to not show title. |
| text   | number |      n/a      | The dialog message text. Use an empty string to not show message. |
| type   | string |  dual-action  | The type of dialog. |
| layout | string |    standard   | The dialog layout preference. |

### Dialog Type options:
- custom
- timed
- no-action
- single-action
- dual-action

### Dialog Layout options:
- standard
- wide

## Element Properties

| Name        | Type   | Description |
| :---------- | :----- | :---------- |
| buttonType  | string | Sets the button type to use for the dialog. |
| cancelText  | string | Sets the UTF-8 encoded Cancel button text, default is "Cancel". |
| cancelIcon  | string | Sets the Confirm button icon. |
| confirmText | string | Sets the UTF-8 encoded Confirm button text, default is "Confirm". |
| confirmIcon | string | Sets the Confirm button icon. |
| expireTime  | number | Sets the expiration time for the dialog in seconds. For modeless timed dialogs,and optionally for other dialogs, a timer can be set that will send out the onTimeExpired event when the dialog time expires. The dialog does not destroy itself and must be handled by the caller using the event.|

### buttonType options: [ButtonType](../types/ButtonType.md)

### cancelIcon / confirmIcon  options: [IconType](../types/IconType.md)
