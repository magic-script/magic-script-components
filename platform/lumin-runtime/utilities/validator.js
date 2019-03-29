import { Prism } from 'lumin';
import { SystemIcons } from '../types/system-icons.js';
import { FontStyle, FontWeight } from '../types/font-style.js';
import { ScrollBarVisibility } from '../types/scroll-bar-visibility.js';
import { TextEntryMode } from '../types/text-entry-mode.js';
import { Alignment } from '../types/alignment.js'

export const validator = {
    validatePrism: prism => prism instanceof Prism,
    validateSystemIcon: icon => SystemIcons[icon] !== undefined,
    validateFontStyle: style => FontStyle[style] !== undefined,
    validateFontWeight: weight => FontWeight[weight] !== undefined,
    validateScrollBarVisibility: visibility => ScrollBarVisibility[visibility] !== undefined,
    validateTextEntryMode: textEntryMode => TextEntryMode[textEntryMode] !== undefined,
    validateAlignment: alignment => Alignment[alignment] !== undefined
}