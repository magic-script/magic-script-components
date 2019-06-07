// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { UiEventData } from './ui-event-data.js';
import { VideoEventType } from '../video-event-type.js';
import { extractor } from '../../utilities/extractor.js';

export class VideoEventData extends UiEventData {
    get AffectedNodeId() {
        return this._nativeEvent.getAffectedNodeId();
    }
    get VideoEventType() {
        return extractor.getKeyByValue(VideoEventType, this._nativeEvent.getVideoEventType());
    }
    get XPos() {
        return this._nativeEvent.getXPos();
    }
    get YPos() {
        return this._nativeEvent.getYPos();
    }
}
