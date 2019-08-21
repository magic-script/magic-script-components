// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

export class MxsListViewItem extends ui.UiListViewItem {
    constructor() {
        this._padding = [0,0,0,0];
        this._itemAlignment = ui.Alignment.CENTER_CENTER;
    }

    get Padding() {
        return this._padding;
    }

    set Padding(value) {
        this._padding = value;
    }

    get ItemAlignment() {
        return this._itemAlignment;
    }

    set ItemAlignment(value) {
        this._itemAlignment = value;
    }
}