import { ui } from 'lumin';
import { LoadingSpinnerType } from '../../types/loading-spinner-type.js';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class LoadingSpinnerBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['size']  = new ArrayProperty('color', 'setSize', true, 'vec2');
        this._propertyDescriptors['value'] = new PrimitiveTypeProperty('value', 'setValue', true, 'number');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const { type, resourceId, resourcePath } = properties;
        const id = resourceId ? resourceId : 0;
        const path = resourcePath ? resourcePath : '';
        
        const element = ui.UiLoadingSpinner.Create(prism, type, id, path, height);

        const unapplied = this.excludeProperties(properties, ['type', 'resourceId', 'resourcePath', 'height']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiImage);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        const message = `The provided spinner type ${newProperties.type} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(newProperties.type, message, validator.validateLoadingSpinnerType);
        
        PropertyDescriptor.throwIfNotTypeOf(newProperties.resourceId, 'number');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.resourcePath, 'string');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
    }
}


