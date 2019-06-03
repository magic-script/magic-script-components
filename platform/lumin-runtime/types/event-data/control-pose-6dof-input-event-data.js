// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { InputEventData } from './input-event-data.js';

export class ControlPoseSixDofInputEventData extends InputEventData {
    get SixDofPosition() {
        return this._nativeEvent.get6DofPosition();
    }
    get Quaternion() {
        return this._nativeEvent.getQuaternion();
    }

    get QuaternionW() {
        return this._nativeEvent.getQuaternionW();
    }
    get QuaternionX() {
        return this._nativeEvent.getQuaternionX();
    }
    get QuaternionY() {
        return this._nativeEvent.getQuaternionY();
    }
    get QuaternionZ() {
        return this._nativeEvent.getQuaternionZ();
    }
}