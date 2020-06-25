---
id: componentEvents
title: Component Events
---

## Events per component and the provided event data type:

| Component          | Event Name              | Event Data Type       |
| :----------------- | :---------------------- | --------------------- |
| UI component       | onActivate              | UiEventData           |
|                    | onClick                 | UiEventData           |
|                    | onPress                 | UiEventData           |
|                    | onLongPress             | UiEventData           |
|                    | onRelease               | UiEventData           |
|                    | onHoverEnter            | UiEventData           |
|                    | onHoverExit             | UiEventData           |
|                    | onHoverMove             | UiEventData           |
|                    | onEnabled               | UiEventData           |
|                    | onDisabled              | UiEventData           |
|                    | onFocusGained           | UiEventData           |
|                    | onFocusLost             | UiEventData           |
|                    | onFocusInput            | UiEventData           |
|                    | onUpdate                | UiEventData           |
|                    | onDelete                | UiEventData           |
|                    | onEvent                 | `*based on the event` |
|                    | onUpdateLoop            | `number`              |
| TextEdit           | onCharacterEnter        | TextEditEventData     |
|                    | onKeyboardEvent         | TextEditEventData     |
|                    | onTextChanged           | TextEditEventData     |
| Slider             | onSliderChanged         | SliderEventData       |
| ListView           | onScrollChanged         | ScrollViewEventData   |
| ScrollView         | onScrollChanged         | ScrollViewEventData   |
| ProgressBar        | onProgressBarChanged    | ProgressBarEventData  |
| DropDownList       | onListVisibilityChanged | DropDownListEventData |
|                    | onSelectionChanged      | DropDownListEventData |
| Toggle             | onToggleChanged         | ToggleEventData       |
| Panel              | onCursorEdge            | UiEventData           |
|                    | onCursorOffEdge         | UiEventData           |
|                    | onPanelEnter            | UiEventData           |
|                    | onPanelExit             | UiEventData           |
| Dialog             | onCancel                | UiEventData           |
|                    | onConfirm               | UiEventData           |
| ColorPicker        | onColorCanceled         | ColorPickerEventData  |
|                    | onColorConfirmed        | ColorPickerEventData  |
|                    | onColorChanged          | ColorPickerEventData  |
| TimePicker         | onTimeChanged           | TimePickerEventData   |
|                    | onTimeConfirmed         | TimePickerEventData   |
| DatePicker         | onDateChanged           | DatePickerEventData   |
|                    | onDateConfirmed         | DatePickerEventData   |
| CircleConfirmation | onConfirmationCanceled  | UiEventData           |
|                    | onConfirmationCompleted | UiEventData           |
|                    | onConfirmationUpdated   | UiEventData           |
