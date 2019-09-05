// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { RayCastEventData as _RayCastEventData } from 'lumin';
import { ServerEvent } from './server-event.js';
import { RayCastEventType } from '../ray-cast-event-type.js';
import { extractor } from '../../utilities/extractor.js';

export class RayCastEventData extends ServerEvent {

    get HitData() {
        const hitData = this._nativeEvent.getHitData();
        return {
            distance: hitData.getDistance(),
            normal: hitData.getNormal(),
            pointHit: hitData.getPointHit()
        };
    }

    get RayCastEvent() {
        return extractor.getKeyByValue(RayCastEventType, this._nativeEvent.getRayCastEvent());
    }

    static isSupported(event) {
        return (event instanceof _RayCastEventData);
    }
}
