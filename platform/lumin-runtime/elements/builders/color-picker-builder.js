// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui, VEC4_ONE } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class ColorPickerBuilder extends UiNodeBuilder {
    constructor(){
        super();
        
        this._propertyDescriptors['color'] = new ArrayProperty('color', 'setColor', true, 'vec3');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const color  = this.getPropertyValue('color', VEC4_ONE, properties);
        const height = this.getPropertyValue('height', 0.0, properties);

        const element = ui.UiColorPicker.Create(prism, color, height);

        const unapplied = this.excludeProperties(properties, ['color', 'height']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiImage);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        PropertyDescriptor.throwIfNotTypeOf(properties.height, 'number');
    }
}
