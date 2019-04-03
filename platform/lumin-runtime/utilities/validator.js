import { Prism } from 'lumin';
import { SystemIcons } from '../types/system-icons.js';
import { FontStyle, FontWeight } from '../types/font-style.js';
import { ScrollBarVisibility } from '../types/scroll-bar-visibility.js';
import { TextEntryMode } from '../types/text-entry-mode.js';
import { Alignment } from '../types/alignment.js'
import { LoadingSpinnerType } from '../types/loading-spinner-type.js';
import { ToggleType } from '../types/toggle-type.js';
import { EclipseLabelType } from '../types/eclipse-label-type.js';
import { EclipseButtonType } from '../types/eclipse-button-type.js';
import { DialogType } from '../types/dialog-type.js';


function validate(value, enumSet) {
    return enumSet[value] !== undefined;
}

export const validator = {
    validatePrism: prism => prism instanceof Prism,
    validateSystemIcon: icon => SystemIcons[icon] !== undefined,
    validateFontStyle: style => FontStyle[style] !== undefined,
    validateFontWeight: weight => FontWeight[weight] !== undefined,
    validateScrollBarVisibility: visibility => ScrollBarVisibility[visibility] !== undefined,
    validateTextEntryMode: textEntryMode => TextEntryMode[textEntryMode] !== undefined,
    validateAlignment: alignment => Alignment[alignment] !== undefined,
    validateLoadinSpinnerType: type => LoadingSpinnerType[type] !== undefined,
    validateToggleType: type => ToggleType[type] !== undefined,

    validateEclipseLabelType: value => validate(value, EclipseLabelType),
    validateEclipseButtonType: value => validate(value, EclipseButtonType),
    validateDialogType: value => validate(value, DialogType)
}