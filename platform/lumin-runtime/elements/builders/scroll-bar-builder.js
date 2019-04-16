import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class ScrollBarBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['thumbSize'] = new PrimitiveTypeProperty('thumbSize', 'setThumbSize', true, 'number');
        this._propertyDescriptors['thumbPosition'] = new PrimitiveTypeProperty('thumbPosition', 'setThumbPosition', true, 'number');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const width  = properties.width;
        const height = this.getPropertyValue('height', 0, properties);

        const element = ui.UiScrollBar.Create(prism, width, height);

        const unapplied = this.excludeProperties(properties, ['width', 'height']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiScrollBar);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        this._validateSize(newProperties);
    }

    _validateSize(properties) {
        PropertyDescriptor.throwIfNotTypeOf(properties.height, 'number');
        PropertyDescriptor.throwIfNotTypeOf(properties.width, 'number');
    }
}