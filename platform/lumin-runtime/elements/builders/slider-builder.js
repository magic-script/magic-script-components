import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class SliderBuilder extends UiNodeBuilder {
    constructor(){
        super();

        // SliderModel

        this._propertyDescriptors['min'] = new PrimitiveTypeProperty('min', 'setMin', true, 'number');
        this._propertyDescriptors['max'] = new PrimitiveTypeProperty('max', 'setMax', true, 'number');
        this._propertyDescriptors['value'] = new PrimitiveTypeProperty('value', 'setValue', true, 'number');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        let { width, height } = properties;

        if (height === undefined) {
            height = 0;
        }

        const element = ui.UiSlider.Create(prism, width, height);

        const unapplied = this.excludeProperties(properties, ['width', 'height']);

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
    }
}
