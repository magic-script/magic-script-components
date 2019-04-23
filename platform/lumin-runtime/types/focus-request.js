import { ui } from 'lumin';

/**
 * @exports FocusRequest
 * @description Represents Magic-Script - Lumin Runtime EclipseLabelType mapping for UiNode.
 */ 
export const FocusRequest = {
    'gain-focus': ui.OnActivateResponse.FocusRequest.kGainFocus,
    'lose-focus': ui.OnActivateResponse.FocusRequest.kLoseFocus,
    'none': ui.OnActivateResponse.FocusRequest.kNone
}
