// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { UiEventData } from './ui-event-data.js';

export class SliderEventData extends UiEventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'Max',
            'Min',
            'Value'
        ]);
    }
}
