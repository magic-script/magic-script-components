// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { ui } from 'lumin';
import { EventData } from './event-data.js';
import { FocusRequest } from '../../types/focus-request.js';
import { extractor } from '../../utilities/extractor.js';

export class UiEventData extends EventData {
    constructor(nativeEvent) {
        super(nativeEvent.getUiNode());

        this._addGetProperties([
            'Alignment',
            'Enabled',
            'EventPassThrough',
            'EventSoundID',
            'GravityWellEnabled',
            'GravityWellProperties',
            'RenderingLayer'
        ]);
    }

    get OnActivateResponse() {;
        const onActiveResponse = this._nativeEvent.getOnActivateResponse();
        return {
            focusRequest: extractor.getKeyByValue( FocusRequest, onActiveResponse.getFocusRequest() )
        };
    }

    static isSupported(event) {
        return (event instanceof ui.UiEventData);
    }
}