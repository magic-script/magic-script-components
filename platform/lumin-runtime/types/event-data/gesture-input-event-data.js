// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ControlTouchPadInputEventData } from './control-touch-pad-input-event-data.js';
import { GestureType } from '../gesture-type.js';
import { GestureDirection } from '../gesture-direction.js';
import { HandGestureKeypointName } from '../hand-gesture-keypoint-name.js';

import { extractor } from '../../utilities/extractor.js';

export class GestureInputEventData extends ControlTouchPadInputEventData {
    get Gesture() {
        return extractor.getKeyByValue(GestureType, this._nativeEvent.getGesture());
    }

    get GestureAngle() {
        return this._nativeEvent.getGestureAngle();
    }

    get GestureDirection() {
        return extractor.getKeyByValue(GestureDirection, this._nativeEvent.getGestureDirection());
    }

    get GestureDistance() {
        return this._nativeEvent.getGestureDistance();
    }

    get GestureFingerGap() {
        return this._nativeEvent.getGestureFingerGap();
    }

    get GestureForceValue() {
        return this._nativeEvent.getGestureForceValue();
    }

    get GestureLocation() {
        return this._nativeEvent.getGestureLocation();
    }

    get GestureRadius() {
        return this._nativeEvent.getGestureRadius();
    }

    get GestureSpeed() {
        return this._nativeEvent.getGestureSpeed();
    }

    get HandGestureConfidence() {
        return this._nativeEvent.getHandGestureConfidence();
    }

    get HandGestureIndex() {
        return this._nativeEvent.getHandGestureIndex();
    }

    getHandGestureKeypoint(KeypointName) {
        // validate KeypointName against HandGestureKeypointName
        return this._nativeEvent.getHandGestureKeypoint();
    }

    get HandGestureKeyPointCount() {
        return this._nativeEvent.getHandGestureKeyPointCount();
    }

    get HandGestureKeyPoseConfidence(gesture) {
        // validate gesture against GestureType
        return this._nativeEvent.getHandGestureKeyPoseConfidence(gesture);
    }

    get HandGestureLocation() {
        return this._nativeEvent.getHandGestureLocation();
    }

    get isHandGestureKeypointRecognized() {
        return this._nativeEvent.isHandGestureKeypointRecognized();
    }

    get isMultiTouch() {
        return this._nativeEvent.isMultiTouch();
    }
}

