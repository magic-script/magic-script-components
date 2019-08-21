// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

export class MxsScrollBar extends ui.UiScrollBar {
    constructor() {
        this._orientation = ui.Orientation.kVertical;
    }

    get Orientation() {
        return this._orientation;
    }

    set Orientation(value) {
        this._orientation = value;
    }
}