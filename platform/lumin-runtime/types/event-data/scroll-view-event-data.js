// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { ui } from 'lumin';
import { UiEventData } from './ui-event-data.js';

export class ScrollViewEventData extends UiEventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            // ScrollBarVisibilityMode
            // ScrollBounds
            // ScrollDirection
            // ScrollMask
            // ScrollOffset
            // ScrollSpeed
            'ScrollValue'
        ]);
    }

    static isSupported(event) {
        return (event.getUiNode() instanceof ui.UiScrollView);
    }
}
