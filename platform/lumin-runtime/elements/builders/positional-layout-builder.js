// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { Alignment } from '../../types/alignment.js';
import { ArrayProperty } from '../properties/array-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { LayoutBuilder } from './layout-builder.js';

export class PositionalLayoutBuilder extends LayoutBuilder {
    constructor(){
        super();

        this._propertyDescriptors['defaultItemAlignment'] = new EnumProperty('defaultItemAlignment', 'setDefaultItemAlignment', true, Alignment, 'Alignment');
        this._propertyDescriptors['defaultItemPadding'] = new ArrayProperty('defaultItemPadding', 'setDefaultItemPadding', true, 'vec4');
        this._propertyDescriptors['itemAlignment'] = new EnumProperty('defaultItemAlignment', 'setItemAlignment', true, Alignment, 'Alignment');
        this._propertyDescriptors['itemPadding'] = new ArrayProperty('defaultItemPadding', 'setItemPadding', true, 'vec4');
        this._propertyDescriptors['skipInvisibleItems'] = new PrimitiveTypeProperty('skipInvisibleItems', 'setSkipInvisibleItems', true, 'boolean');
    }
}