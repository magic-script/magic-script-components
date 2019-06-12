// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { InputEventData as _InputEventData } from 'lumin';

import { ServerEvent } from './server-event.js';
import { EventType } from '../event-type.js';
import { EventSource } from '../event-source.js';

import { extractor } from '../../utilities/extractor.js';

export class InputEventData extends ServerEvent {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'DeviceId'
        ]);
    }
    // get DeviceId() {
    //     return this._nativeEvent.getDeviceId();
    // }
    get EventSource() {
        return extractor.getKeyByValue(EventSource, this._nativeEvent.getEventSource());
    }

    get EventType() {
        return extractor.getKeyByValue(EventType, this._nativeEvent.getEventType());
    }

    static isSupported(event) {
        return (event instanceof _InputEventData);
    }
}
