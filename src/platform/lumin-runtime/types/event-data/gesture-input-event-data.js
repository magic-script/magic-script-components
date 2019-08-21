// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { GestureInputEventData as _GestureInputEventData } from 'lumin';

import { ControlTouchPadInputEventData } from './control-touch-pad-input-event-data.js';
import { GestureType } from '../gesture-type.js';
import { GestureDirection } from '../gesture-direction.js';

import { extractor } from '../../utilities/extractor.js';
import { validator } from '../../utilities/validator.js'

export class GestureInputEventData extends ControlTouchPadInputEventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'GestureAngle',
            'GestureDistance',
            'GestureFingerGap',
            'GestureForceValue',
            'GestureLocation',
            'GestureRadius',
            'GestureSpeed',
            'HandGestureConfidence',
            'HandGestureIndex',
            'HandGestureKeyPointCount',
            'HandGestureLocation'
        ]);
    }
    get Gesture() {
        return extractor.getKeyByValue(GestureType, this._nativeEvent.getGesture());
    }

    // get GestureAngle() {
    //     return this._nativeEvent.getGestureAngle();
    // }

    get GestureDirection() {
        return extractor.getKeyByValue(GestureDirection, this._nativeEvent.getGestureDirection());
    }

    // get GestureDistance() {
    //     return this._nativeEvent.getGestureDistance();
    // }

    // get GestureFingerGap() {
    //     return this._nativeEvent.getGestureFingerGap();
    // }

    // get GestureForceValue() {
    //     return this._nativeEvent.getGestureForceValue();
    // }

    // get GestureLocation() {
    //     return this._nativeEvent.getGestureLocation();
    // }

    // get GestureRadius() {
    //     return this._nativeEvent.getGestureRadius();
    // }

    // get GestureSpeed() {
    //     return this._nativeEvent.getGestureSpeed();
    // }

    // get HandGestureConfidence() {
    //     return this._nativeEvent.getHandGestureConfidence();
    // }

    // get HandGestureIndex() {
    //     return this._nativeEvent.getHandGestureIndex();
    // }

    getHandGestureKeypoint(keypointName) {
        if ( !validator.validateHandGestureKeypointName(keypointName)) {
            throw new TypeError(`Provided value (${keypointName}) for 'keypointName' is not valid HandGestureKeypointName value`);
        }

        return this._nativeEvent.getHandGestureKeypoint();
    }

    // get HandGestureKeyPointCount() {
    //     return this._nativeEvent.getHandGestureKeyPointCount();
    // }

    getHandGestureKeyPoseConfidence(gesture) {
        if ( !validator.validateGestureType(gesture)) {
            throw new TypeError(`Provided value (${gesture}) for 'gesture' is not valid GestureType value`);
        }

        return this._nativeEvent.getHandGestureKeyPoseConfidence(gesture);
    }

    // get HandGestureLocation() {
    //     return this._nativeEvent.getHandGestureLocation();
    // }

    isHandGestureKeypointRecognized(keypointName) {
        if ( !validator.validateHandGestureKeypointName(keypointName)) {
            throw new TypeError(`Provided value (${keypointName}) for 'keypointName' is not valid HandGestureKeypointName value`);
        }

        return this._nativeEvent.isHandGestureKeypointRecognized(keypointName);
    }

    get isMultiTouch() {
        return this._nativeEvent.isMultiTouch();
    }

    static isSupported(event) {
        return (event instanceof _GestureInputEventData);
    }
}

