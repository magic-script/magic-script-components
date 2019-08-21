// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

export class MxsPanel extends ui.UiPanel {
    constructor() {
        this._side = ui.Side.kLeft;
    }

    get Side() {
        return this._side;
    }

    set Side(value) {
        this._side = value;
    }
}