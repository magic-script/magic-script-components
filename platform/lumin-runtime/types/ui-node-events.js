// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

/**
 * @exports UiNodeEvents
 * @description Represents Magic-Script - Lumin Runtime event mapping for UiNode.
 * @param {string} key - the Magic-Script event name
 * @param {string} value - the Lumin Runtime event name
 */

// TODO: Move events to the component builders
export const UiNodeEvents = {
    // UiNode
    'onActivate': 'onActivateSub',
    'onClick': 'onActivateSub',
    'onPress': 'onPressedSub',
    'onLongPress': 'onLongPressSub',
    'onRelease': 'onReleasedSub',
    'onHoverEnter': 'onHoverEnterSub',
    'onHoverExit': 'onHoverExitSub',
    'onHoverMove': 'onHoveMoveSub',
    'onEnabled': 'onEnabledSub',
    'onDisabled': 'onDisabledSub',
    'onFocusGained': 'onFocusGainedSub',
    'onFocusLost': 'onFocusLostSub',
    'onFocusInput': 'onFocusInputSub',
    'onUpdate': 'onUpdateSub',
    'onDelete': 'onDeletedSub',
    // TextEdit events
    'onCharacterEnter': 'onCharacterEnteredSub',
    'onKeyboardEvent': 'onKeyboardEventSub',
    'onTextChanged': 'onTextChangedSub',
    // UiSlider
    'onSliderChanged': 'onSliderChangedSub',
    // UiListView
    // UiScrollBar
    'onScrollChanged': 'onScrollChangedSub',
    // UiProgressBar
    'onProgressBarChanged': 'onProgressBarChangedSub',
    // UiDropDownList
    'onListVisibilityChanged': 'onListVisibilityChangedSub',
    'onSelectionChanged': 'onSelectionChangedSub',
    // UiToggle
    'onToggleChanged': 'onToggleChangedSub',
    // UiPanel
    'onCursorEdge': 'onCursorEdgeSub',
    'onCursorOffEdge': 'onCursorOffEdgeSub',
    'onPanelEnter': 'onPanelEnterSub',
    'onPanelExit': 'onPanelExitSub',
    // UiDialog
    // UiColorPicker
    'onCancel': 'onCancelSub',
    'onConfirm': 'onConfirmSub',
    // UiColorPicker
    'onColorChanged': 'onColorChangedSub',
    // UiTimePicker
    'onTimeChanged': 'onTimeChangedSub',
    'onTimeConfirmed': 'onTimeConfirmedSub',
    // UiDatePicker
    'onDateChanged': 'onDateChangedSub',
    'onDateConfirmed': 'onDateConfirmedSub',
    // UiCircleConfirmation
    'onConfirmationCanceled': 'onConfirmationCanceledSub',
    'onConfirmationComplete': 'onConfirmationCompleteSub',
    'onConfirmationUpdate': 'onConfirmationUpdateSub'
}