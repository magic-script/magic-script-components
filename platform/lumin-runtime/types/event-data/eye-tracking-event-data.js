// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ServerEvent } from './server-event.js';
import { EventType } from '../event-type.js';
import { EventSource } from '../event-source.js';

import { extractor } from '../../utilities/extractor.js';

export class EyeTrackingEventData extends ServerEvent {
    get EyeTrackingFixationConfidence() {
        return this._nativeEvent.getEyeTrackingFixationConfidence();
    }
    get EyeTrackingFixationPosition() {
        return this._nativeEvent.getEyeTrackingFixationPosition();
    }
    get EyeTrackingLeftEyeBlinkState() {
        return this._nativeEvent.getEyeTrackingLeftEyeBlinkState();
    }
    get EyeTrackingLeftEyeConfidence() {
        return this._nativeEvent.getEyeTrackingLeftEyeConfidence();
    }
    get EyeTrackingLeftEyePosition() {
        return this._nativeEvent.getEyeTrackingLeftEyePosition();
    }
    get EyeTrackingLeftEyeRotation() {
        return this._nativeEvent.getEyeTrackingLeftEyeRotation();
    }
    get EyeTrackingRightEyeBlinkState() {
        return this._nativeEvent.getEyeTrackingRightEyeBlinkState();
    }
    get EyeTrackingRightEyeConfidence() {
        return this._nativeEvent.getEyeTrackingRightEyeConfidence();
    }
    get EyeTrackingRightEyePosition() {
        return this._nativeEvent.getEyeTrackingRightEyePosition();
    }
    get EyeTrackingRightEyeRotation() {
        return this._nativeEvent.getEyeTrackingRightEyeRotation();
    }
    get RemainingTimeAtUncomfortableDepth() {
        return this._nativeEvent.remainingTimeAtUncomfortableDepth();
    }
    hasFixationViolationOccured() {
        return this._nativeEvent.hasFixationViolationOccured();
    }
    isFixationDepthUnconfortable() {
        return this._nativeEvent.isFixationDepthUnconfortable();
    }
}