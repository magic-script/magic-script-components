// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { ServerEvent as _ServerEvent } from 'lumin';
import { EventData } from './event-data.js';
import { ServerEventType } from '../server-event-type.js';
import { extractor } from '../../utilities/extractor.js';

export class ServerEvent extends EventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'PrismId'
        ]);
    }

    get isInputEvent() {
        return this._nativeEvent.isInputEventType();
    }

    get ServerEventType() {
        return extractor.getKeyByValue(ServerEventType, this._nativeEvent.getServerEventType());

    // Returns a string representation of this event for debug purposes.
    toString() {
        return this._nativeEvent.toString();
    }

    static isSupported(event) {
        return (event instanceof _ServerEvent);
    }
}