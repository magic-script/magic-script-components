import { ui } from 'lumin';

import { TransformNodeBuilder } from './transform-node-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { Alignment } from '../../types/alignment.js'

export class UiNodeBuilder extends TransformNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['enabled'] = new PrimitiveTypeProperty('enabled', 'setEnabled', true, 'boolean');
        this._propertyDescriptors['alignment'] = new EnumProperty('alignment', 'setAlignment', true, Alignment, 'Alignment');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiNode.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiNode);
    //     super.update(element, oldProperties, newProperties);
    // }

    excludeProperties(properties, exclude) {
        const subset = Object.assign({}, properties);
        exclude.forEach(name => {
            if (properties.hasOwnProperty(name) !== undefined) {
                delete subset[name]
            }
        });
        return subset;
    }
}
