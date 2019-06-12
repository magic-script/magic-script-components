// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { ServerEvent as _ServerEvent } from 'lumin';
import { EventData } from './event-data.js';

export class ServerEvent extends EventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'PrismId'
        ]);
    }

    // get PrismId() {
    //     return this._nativeEvent.getPrismId();
    // }

    get isInputEvent() {
        return this._nativeEvent.isInputEventType();
    }

    static isSupported(event) {
        return (event instanceof _ServerEvent);
    }
}