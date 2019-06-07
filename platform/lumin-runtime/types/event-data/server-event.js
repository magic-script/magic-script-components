// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { EventData } from './event-data.js';

export class ServerEvent extends EventData{
    get PrismId() {
        return this._nativeEvent.getPrismId();
    }

    get isInputEvent() {
        return this._nativeEvent.isInputEventType();
    }
}