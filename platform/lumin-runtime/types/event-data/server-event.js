// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

export class ServerEvent {
    constructor(nativeEvent) {
        this._nativeEvent = nativeEvent;
    }

    get PrismId() {
        return this._nativeEvent.getPrismId();
    }

    get isInputEvent() {
        return this._nativeEvent.isInputEventType();
    }
}