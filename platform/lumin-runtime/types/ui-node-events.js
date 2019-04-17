/**
 * @exports UiNodeEvents
 * @description Represents Magic-Script - Lumin Runtime event mapping for UiNode.
 * @param {string} key - the Magic-Script event name
 * @param {string} value - the Lumin Runtime event name
 */
export const UiNodeEvents = {
    'onActivate': 'onActivateSub',
    'onClick': 'onActivateSub',
    'onPressed': 'onPressedSub',
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

    // TODO: Move events to the component builders
    // TextEdit events
    'onCharacterEnter': 'onCharacterEnteredSub',
    'onKeyboardEvent': 'onKeyboardEventSub',
    'onTextChanged': 'onTextChangedSub'
}