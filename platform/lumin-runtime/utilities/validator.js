import { Prism } from 'lumin';

import { Alignment } from '../types/alignment.js';
import { CursorHoverState } from '../types/cursor-hover-state.js';
import { DateFormat } from '../types/date-format.js';
import { DialogType } from '../types/dialog-type.js';
import { EclipseButtonType } from '../types/eclipse-button-type.js';
import { EclipseLabelType } from '../types/eclipse-label-type.js';
import { FocusRequest } from '../types/focus-request.js';
import { FontStyle, FontWeight } from '../types/font-style.js';
import { GravityWellSnap } from '../types/gravity-well-snap.js';
import { LoadingSpinnerType } from '../types/loading-spinner-type.js';
import { RenderingLayer } from '../types/rendering-layer.js';
import { PortalIconSize } from '../types/portal-icon-size.js';
import { ScrollBarVisibility } from '../types/scroll-bar-visibility.js';
import { Side } from '../types/side.js';
import { SoundEvent } from '../types/sound-event.js';
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

    validateAlignment: value => validate(value, Alignment),
    validateCursorHoverState: value => validate(value, CursorHoverState),
    validateDateFormat: value => (typeof value === 'string') && DateFormat.includes(value),
    validateDialogType: value => validate(value, DialogType),
    validateEclipseButtonType: value => validate(value, EclipseButtonType),
    validateEclipseLabelType: value => validate(value, EclipseLabelType),
    validateFocusRequest: value => validate(value, FocusRequest),
    validateFontStyle: value => validate(value, FontStyle),
    validateFontWeight: value => validate(value, FontWeight),
    validateGravityWellSnap: value => validate(value, GravityWellSnap),
    validateLoadinSpinnerType: value => validate(value, LoadingSpinnerType),
    validatePortalIconSize: value => validate(value, PortalIconSize),
    validateRenderingLayer: value => validate(value, RenderingLayer),
    validateScrollBarVisibility: value => validate(value, ScrollBarVisibility),
    validateSide: value => validate(value, Side),
    validateSystemIcon: value => validate(value, SystemIcons),
    validateSoundEvent: value => validate(value, SoundEvent),
    validateTextEntryMode: value => validate(value, TextEntryMode),
    validateTimeFormat: value => (typeof value === 'string') && TimeFormat.includes(value),
    validateToggleType: value => validate(value, ToggleType),
    validateViewMode: value => validate(value, ViewMode),
}
