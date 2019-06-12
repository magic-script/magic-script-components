// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { ui } from 'lumin';
import { UiEventData } from './ui-event-data.js';

export class ScrollBarEventData extends UiEventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'ThumbPosition',
            'ThumbSize'
        ]);
    }

    static isSupported(event) {
        return (event.getUiNode() instanceof ui.UiScrollBar);
    }
}
