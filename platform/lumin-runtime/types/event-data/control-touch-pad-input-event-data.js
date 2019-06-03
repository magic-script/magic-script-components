// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { InputEventData } from './input-event-data.js';

export class ControlTouchPadInputEventData extends InputEventData {
    get Touch() {
        // The Lumin Runtime (the native) function is:
        // getTouch(tidx) - where "tidx" is touch index (default value 0)
        return this._nativeEvent.getTouch();
    }

    get TouchCount() {
        return this._nativeEvent.getTouchCount();
    }

    get TouchState() {
        return this._nativeEvent.getTouchState();
    }
}
