// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { ElementBuilder } from './element-builder.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class LayoutBuilder extends ElementBuilder {

    update(element, oldProperties, newProperties) {
        // this.throwIfNotInstanceOf(element, ui.UiButton);
        super.update(element, oldProperties, newProperties);

        this._validateSize(properties);
        this._setSize(element, properties);
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        this._validateSize(newProperties);
    }

    _validateSize(properties) {
        PropertyDescriptor.throwIfNotTypeOf(properties.height, 'number');
        PropertyDescriptor.throwIfNotTypeOf(properties.width, 'number');
    }

    _setSize(element, properties) {
        const { height, width } = properties;

        if (width || height) {
            if (width === undefined) {
                width = element.getSize()[0];
            }

            if (height === undefined) {
                height = element.getSize()[1];
            }

            element.setSize([height, width]);
        }
    }    
}