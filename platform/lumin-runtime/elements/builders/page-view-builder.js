import { ui } from 'lumin';
import { Alignment } from '../../types/alignment';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class PageViewBuilder extends UiNodeBuilder {
    constructor(){
        super();
        
        this._propertyDescriptors['defaultPageAlignment'] = new EnumProperty('defaultPageAlignment', 'setDefaultPageAlignment', true, Alignment, 'Alignment');
        this._propertyDescriptors['defaultPagePadding'] = new ArrayProperty('defaultPagePadding', 'setDefaultPagePadding', true, 'vec4');

        // Composite
        // this._propertyDescriptors['pageAlignment'] = new EnumProperty('pageAlignment', 'setDefaultPageAlignment', true, Alignment, 'Alignment');
        // this._propertyDescriptors['pagePadding'] = new ArrayProperty('pagePadding', 'setDefaultPagePadding', true, 'vec4');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const { height, width } = properties;

        const element = ui.UiPageView.Create(prism, width, height);

        const unapplied = this.excludeProperties(properties, ['height', 'width']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    update(element, oldProperties, newProperties) {
        // this.throwIfNotInstanceOf(element, ui.UiImage);
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


