// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { PositionalLayoutBuilder } from './positional-layout-builder.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

export class GridLayoutBuilder extends PositionalLayoutBuilder {
    constructor(){
        super();

        this._propertyDescriptors['columns'] = new PrimitiveTypeProperty('columns', 'setColumns', true, 'number');
        this._propertyDescriptors['rows'] = new PrimitiveTypeProperty('rows', 'setRows', true, 'number');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiGridLayout.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }
}