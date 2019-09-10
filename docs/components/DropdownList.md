---
id: dropdownList
title: DropdownList
---

## Example

```javascript
<DropdownList />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name | Type   | Default Value | Description                                                        |
| ---- | ------ | :-----------: | ------------------------------------------------------------------ |
| text | number |      n/a      | The UTF-8 encoded text to initially set the dropdownlist label to. |

## Element Properties

| Name              | Type     | Description                                                                                                                                                                                                                                                                       |
| :---------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iconSize          | number   | Sets the button icon size in scene units.                                                                                                                                                                                                                                         |
| iconColor         | vec4     | Sets the RGBA color of the button icon.                                                                                                                                                                                                                                           |
| listMaxHeight     | number   | Sets the max height of a dropdown list. The default value (0) indicates there is no max and the list will grow as long as it needs to. Setting a value greater than zero will set the max height such that if a list is larger than the max height, the list content will scroll. |
| listTextSize      | number   | Sets the size of the list text. If no size set, the list will use the same text size used in the drop-down list menu button itself. If no text present in the menu button, the default text size will be used.                                                                    |
| maxCharacterLimit | number   | Sets the max amount of characters to be used per list item label before adding '...'. The default charLimit is 0, which means there is no limit and the labels will scale to the largest item.                                                                                    |
| multiSelect       | boolean  | Sets the multi-select mode of the drop-down list.                                                                                                                                                                                                                                 |
| showList          | boolean  | Show the dropdownlist or not.                                                                                                                                                                                                                                                     |
| selected          | _object_ | Set the selected state of a DropDownListItem. This uses the id set for a particular DropDownListItem, which should be unique. If not unique, the first item with that id will be set. State will be updated upon closing and reopening the list, if the list is visible.          |

### selected

```javascript
{
    id: <number>,
    selected: <boolean>
}
```
