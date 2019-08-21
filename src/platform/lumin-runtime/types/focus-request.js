// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

/**
 * @exports FocusRequest
 * @description Represents Magic-Script - Lumin Runtime FocusRequest mapping.
 */
export const FocusRequest = {
    'gain-focus': ui.OnActivateResponse.FocusRequest.kGainFocus,
    'lose-focus': ui.OnActivateResponse.FocusRequest.kLoseFocus,
    'none': ui.OnActivateResponse.FocusRequest.kNone
}
