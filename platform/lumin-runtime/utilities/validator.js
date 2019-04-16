import { Prism } from 'lumin';

import { Alignment } from '../types/alignment.js'
import { DateFormat } from '../types/date-format.js';
import { DialogType } from '../types/dialog-type.js';
import { EclipseButtonType } from '../types/eclipse-button-type.js';
import { EclipseLabelType } from '../types/eclipse-label-type.js';
import { FontStyle, FontWeight } from '../types/font-style.js';
import { LoadingSpinnerType } from '../types/loading-spinner-type.js';
import { PortalIconSize } from '../types/portal-icon-size.js';
import { ScrollBarVisibility } from '../types/scroll-bar-visibility.js';
import { Side } from '../types/side.js';
import { SystemIcons } from '../types/system-icons.js';
import { TextEntryMode } from '../types/text-entry-mode.js';
import { TimeFormat } from '../types/time-format.js';
import { ToggleType } from '../types/toggle-type.js';
import { ViewMode } from '../types/view-mode.js';

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
    
    validateEclipseButtonType: value => validate(value, EclipseButtonType),
    validateEclipseLabelType: value => validate(value, EclipseLabelType),
    validateDateFormat: value => (typeof value === 'string') && DateFormat.includes(value),
    validateDialogType: value => validate(value, DialogType),
    validatePortalIconSize: value => validate(value, PortalIconSize),
    validateSide: value => validate(value, Side),
    validateTimeFormat: value => (typeof value === 'string') && TimeFormat.includes(value),
    validateToggleType: value => validate(value, ToggleType),
    validateViewMode: value => validate(value, ViewMode)
}