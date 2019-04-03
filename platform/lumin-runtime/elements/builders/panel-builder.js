import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class PanelBuilder extends UiNodeBuilder {
    constructor(){
        super();

        // CursorConstrained
        // CursorInitialPosition
        // CursorTransitionType
        // CursorVisible
        // EdgeConstraint
        // EdgeConstraintLevel
        // EdgeTransition
        // PanelShape

        // this._propertyDescriptors['iconSize']  = new PrimitiveTypeProperty('iconSize', 'setIconSize', true, 'number');
        // this._propertyDescriptors['iconColor'] = new ArrayProperty('iconColor', 'setIconColor', true, 'vec3');     
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiPanel.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiButton);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        // PropertyDescriptor.throwIfNotTypeOf(newProperties.width, 'number');
        // PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
        // PropertyDescriptor.throwIfNotTypeOf(newProperties.roundness, 'number');
    }
}
