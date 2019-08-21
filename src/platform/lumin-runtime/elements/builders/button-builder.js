// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TextContainerBuilder } from './text-container-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class ButtonBuilder extends TextContainerBuilder {
    constructor(){
        super();

        this._propertyDescriptors['iconSize'] = new PrimitiveTypeProperty('iconSize', 'setIconSize', true, 'number');
        this._propertyDescriptors['iconColor'] = new ArrayProperty('iconColor', 'setIconColor', true, 'vec3');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        let { children, text } = properties;

        if (text === undefined) {
            text = this._getText(children);
        }

        const width = this.getPropertyValue('width', 0.0, properties);
        const height = this.getPropertyValue('height', 0.0, properties);
        const roundness = this.getPropertyValue('roundness', 1.0, properties);
        const enabled = this.getPropertyValue('enabled', true, properties);

        const element = ui.UiButton.Create(prism, text, width, height, roundness);
        element.setEnabled(enabled);
        const unapplied = this.excludeProperties(properties, ['children', 'text', 'width', 'height', 'roundness']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiButton);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        PropertyDescriptor.throwIfNotTypeOf(newProperties.width, 'number');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.roundness, 'number');
    }
}


