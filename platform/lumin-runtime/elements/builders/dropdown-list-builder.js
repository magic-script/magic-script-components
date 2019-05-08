// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TextContainerBuilder } from './text-container-builder.js';

export class DropdownListBuilder extends TextContainerBuilder {
    // constructor() {
    //     super();

    // ButtonModel
    // IconColor
    // IconSize
    // List
    // ListFont
    // ListMaxHeight
    // ListTextSize
    // MaxCharacterLimit
    // MultiSelectMode
    // Selected
    // showList

    // }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const text = this._getText(properties.children);

        const element = ui.UiDropDownList.Create(prism, text);

        this.update(element, undefined, properties);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiGroup);
    //     super.update(element, oldProperties, newProperties);
    // }
}