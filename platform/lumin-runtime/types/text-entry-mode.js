import { ui } from 'lumin';

/**
 * @exports TextEntryMode
 * @description Represents the supported text entry modes.
 */ 
export const TextEntryMode = {
    'email' : ui.TextEntryMode.Email,
    'none': ui.TextEntryMode.kNone,
    'normal': ui.TextEntryMode.kNormal,
    'numeric': ui.TextEntryMode.kNumeric,
    'url': ui.TextEntryMode.kURL
}