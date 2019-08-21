// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { VideoEventData as _VideoEventData } from 'lumin';
import { ServerEvent } from './server-event.js';
import { VideoEventType } from '../video-event-type.js';
import { extractor } from '../../utilities/extractor.js';

export class VideoEventData extends ServerEvent {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'AffectedNodeId',
            'XPos',
            'YPos'
        ]);
    }
    // get AffectedNodeId() {
    //     return this._nativeEvent.getAffectedNodeId();
    // }
    get VideoEventType() {
        return extractor.getKeyByValue(VideoEventType, this._nativeEvent.getVideoEventType());
    }
    // get XPos() {
    //     return this._nativeEvent.getXPos();
    // }
    // get YPos() {
    //     return this._nativeEvent.getYPos();
    // }

    static isSupported(event) {
        return (event instanceof _VideoEventData);
    }
}
