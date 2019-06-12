// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ControlPose3DofInputEventData as _ControlPose3DofInputEventData } from 'lumin';

import { InputEventData } from './input-event-data.js';

export class ControlPose3DofInputEventData extends InputEventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'Quaternion',
            'QuaternionW',
            'QuaternionX',
            'QuaternionY',
            'QuaternionZ'
        ]);
    }

    static isSupported(event) {
        return (event instanceof _ControlPose3DofInputEventData);
    }

    // get Quaternion() {
    //     return this._nativeEvent.getQuaternion();
    // }

    // get QuaternionW() {
    //     return this._nativeEvent.getQuaternionW();
    // }

    // get QuaternionX() {
    //     return this._nativeEvent.getQuaternionX();
    // }

    // get QuaternionY() {
    //     return this._nativeEvent.getQuaternionY();
    // }

    // get QuaternionZ() {
    //     return this._nativeEvent.getQuaternionZ();
    // }
}