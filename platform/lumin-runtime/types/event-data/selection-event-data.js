// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { SelectionEventData as _SelectionEventData } from 'lumin';

import { ServerEvent } from './server-event.js';
import { SelectionEventType } from '../selection-event-type.js';

import { extractor } from '../../utilities/extractor.js';

export class SelectionEventData extends ServerEvent {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'AffectedPrismId'
        ]);
    }

    get SelectionEventType() {
        return extractor.getKeyByValue(SelectionEventType, this._nativeEvent.getSelectionEventType());
    }

    static isSupported(event) {
        return (event instanceof _SelectionEventData);
    }
}
