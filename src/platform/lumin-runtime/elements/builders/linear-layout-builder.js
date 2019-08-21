// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { PositionalLayoutBuilder } from './positional-layout-builder.js';
import { Orientation } from '../../types/orientation.js';
import { EnumProperty } from '../properties/enum-property.js';

export class LinearLayoutBuilder extends PositionalLayoutBuilder {
    constructor(){
        super();

        this._propertyDescriptors['orientation'] = new EnumProperty('orientation', 'setOrientation', true, Orientation, 'Orientation');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiLinearLayout.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }
}