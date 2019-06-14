// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { UiEventData } from './ui-event-data.js';

export class DropDownListEventData extends UiEventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        // this._addGetProperties([
        //     IconColor
        //     IconSize
        //     ListMaxHeight
        //     ListTextSize
        //     MaxCharacterLimit
        //     MultiSelectMode
        //     Text
        //     TextColor
        //     TextSize
        //     showList
        // ]);
    }

    get SelectedItems() {
        return this._nativeEvent.getSelectedItems()
            .map( item => ({
                id: item.id,
                label: item.label
                // TODO: add support for subItems recursively
            }));
    }

    static isSupported(event) {
        return (event.getUiNode() instanceof ui.UiDropDownList);
    }
}
