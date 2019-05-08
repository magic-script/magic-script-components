// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { Alignment } from '../../types/alignment.js';
import { ArrayProperty } from '../properties/array-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { LayoutBuilder } from './layout-builder.js';

export class RectLayoutBuilder extends LayoutBuilder {
    constructor(){
        super();

        // Content ?

        this._propertyDescriptors['contentAlignment'] = new EnumProperty('contentAlignment', 'setContentAlignment', true, Alignment, 'Alignment');
        this._propertyDescriptors['padding'] = new ArrayProperty('padding', 'setPadding', true, 'vec4');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiRectLayout.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }
}