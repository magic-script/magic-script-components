// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { Prism } from 'lumin';

import { AdvanceDirection } from '../types/advance-direction.js';
import { Alignment } from '../types/alignment.js';
import { AudioAction } from '../types/audio-action.js';
import { CursorEdgeScrollMode } from '../types/cursor-edge-scroll-mode.js';
import { CursorHoverState } from '../types/cursor-hover-state.js';
import { DateFormat } from '../types/date-format.js';
import { DialogType } from '../types/dialog-type.js';
import { EclipseButtonType } from '../types/eclipse-button-type.js';
import { EclipseLabelType } from '../types/eclipse-label-type.js';
import { FlowDirection } from '../types/flow-direction.js';
import { FocusRequest } from '../types/focus-request.js';
import { FontStyle, FontWeight } from '../types/font-style.js';
import { GestureType } from '../types/gesture-type.js';
import { GravityWellSnap } from '../types/gravity-well-snap.js';
import { HandGestureKeypointName } from '../types/hand-gesture-keypoint-name.js';
import { LabelDisplayMode } from '../types/label-display-mode.js';
import { LightType } from '../types/light-type.js';
import { LoadingSpinnerType } from '../types/loading-spinner-type.js';
import { RenderingLayer } from '../types/rendering-layer.js';
import { PanelEdgeConstraintLevel } from '../types/panel-edge-constraint-level.js'
import { PanelCursorTransitionType } from '../types/panel-cursor-transition-type.js';
import { PortalIconSize } from '../types/portal-icon-size.js';
import { Quality } from '../types/quality.js';
import { ScrollBarVisibility } from '../types/scroll-bar-visibility.js';
import { ScrollDirection } from '../types/scroll-direction.js';
import { ShaderType } from '../types/shader-type.js';
import { Side } from '../types/side.js';
import { SoundEvent } from '../types/sound-event.js';
import { SystemIcons } from '../types/system-icons.js';
import { TextEntryMode } from '../types/text-entry-mode.js';
import { TextureType } from '../types/texture-type.js';
import { TimeFormat } from '../types/time-format.js';
import { ToggleType } from '../types/toggle-type.js';
import { VideoAction } from '../types/video-action.js';
import { ViewMode } from '../types/view-mode.js';

function validate(value, enumSet) {
    return typeof value === 'string' && enumSet[value] !== undefined;
}

export const validator = {
    validatePrism: prism => prism instanceof Prism,

    validateAdvanceDirection: value => validate(value, AdvanceDirection),
    validateAlignment: value => validate(value, Alignment),
    validateAudioAction: value => validate(value, AudioAction),
    validateCursorEdgeScrollMode: value => validate(value, CursorEdgeScrollMode),
    validateCursorHoverState: value => validate(value, CursorHoverState),
    validateDateFormat: value => (typeof value === 'string') && DateFormat.includes(value),
    validateDialogType: value => validate(value, DialogType),
    validateEclipseButtonType: value => validate(value, EclipseButtonType),
    validateEclipseLabelType: value => validate(value, EclipseLabelType),
    validateFlowDirection: value => validate(value, FlowDirection),
    validateFocusRequest: value => validate(value, FocusRequest),
    validateFontStyle: value => validate(value, FontStyle),
    validateFontWeight: value => validate(value, FontWeight),
    validateGestureType: value => validate(value, GestureType),
    validateGravityWellSnap: value => validate(value, GravityWellSnap),
    validateHandGestureKeypointName: value => validate(value, HandGestureKeypointName),
    validateLabelDisplayMode: value => validate(value, LabelDisplayMode),
    validateLightType: value => validate(value, LightType),
    validateLoadingSpinnerType: value => validate(value, LoadingSpinnerType),
    validatePanelEdgeConstraintLevel: value => validate(value, PanelEdgeConstraintLevel),
    validatePanelCursorTransitionType: value => validate(value, PanelCursorTransitionType),
    validatePortalIconSize: value => validate(value, PortalIconSize),
    validateQuality: value => validate(value, Quality),
    validateRenderingLayer: value => validate(value, RenderingLayer),
    validateScrollBarVisibility: value => validate(value, ScrollBarVisibility),
    validateScrollDirection: value => validate(value, ScrollDirection),
    validateShaderType: value => validate(value, ShaderType),
    validateSide: value => validate(value, Side),
    validateSystemIcon: value => validate(value, SystemIcons),
    validateSoundEvent: value => validate(value, SoundEvent),
    validateTextureType: value => validate(value, TextureType),
    validateTextEntryMode: value => validate(value, TextEntryMode),
    validateTimeFormat: value => (typeof value === 'string') && TimeFormat.includes(value),
    validateToggleType: value => validate(value, ToggleType),
    validateVideoAction: value => validate(value, VideoAction),
    validateViewMode: value => validate(value, ViewMode)
}
