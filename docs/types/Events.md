---
id: events
title: Events
---

## Common Events:
- onActivate
- onPress
- onLongPress
- onRelease
- onHoverEnter
- onHoverExit
- onHoverMove
- onEnabled
- onDisabled
- onFocusGained
- onFocusLost
- onFocusInput
- onUpdate
- onDeleted
- onEvent
- onUpdateLoop

supported by all of the following components:
- Button
- CircleConfirmation
- ColorPicker
- DatePicker
- Dialog
- DropdownList
- GridLayout
- Image
- Line
- LinearLayout
- ListView
- ListViewItem
- PageView
- Panel
- PortalIcon
- ProgressBar
- RectLayout
- ScrollBar
- ScrollView
- Slider
- Spinner
- Tab
- Text
- TextEdit
- TimePicker
- Toggle
- ToggleGroup
- View
- WebView


## The following components support `onEvent` and `onUpdateLoop` events only:
- Audio
- Content
- Light
- Model
- Quad
- Video

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
|                    | onConfirmationComplete  | UiEventData           |
|                    | onConfirmationUpdate    | UiEventData           |


## Event data types and their properties
ServerEvent extends EventData
- PrismId
- isInputEvent

InputEventData extends ServerEvent
- DeviceId
- EventSource
- EventType

EyeTrackingEventData extends ServerEvent
- EyeTrackingFixationConfidence
- EyeTrackingFixationPosition
- EyeTrackingLeftEyeBlinkState
- EyeTrackingLeftEyeConfidence
- EyeTrackingLeftEyePosition
- EyeTrackingLeftEyeRotation
- EyeTrackingRightEyeBlinkState
- EyeTrackingRightEyeConfidence
- EyeTrackingRightEyePosition
- EyeTrackingRightEyeRotation
- RemainingTimeAtUncomfortableDepth

NodeEventData extends EventData
- AABB
- AnchorPosition
- ChildCount
- CurrentPrismTransform
- CurrentWorldTransform
- CursorHoverState
- LocalAABB
- LocalTransform
- Name
- NodeId
- ParentedBoneName
- PrismId

TransformNodeEventData extends NodeEventData
- LocalPosition
- LocalRotation
- LocalScale
- PrismPosition
- WorldPosition

UiEventData extends TransformNodeEventData (**in development**)
- Alignment
- Enabled
- EventPassThrough
- EventSoundID
- GravityWellEnabled
- GravityWellProperties
- RenderingLaye
