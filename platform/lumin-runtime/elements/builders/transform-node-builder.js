import { TransformNode } from 'lumin';

import { ElementBuilder } from './element-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

export class TransformNodeBuilder extends ElementBuilder {
    constructor(){
        super();

        this._propertyDescriptors['name'] = new PrimitiveTypeProperty('name', 'setName', true, 'string');
        this._propertyDescriptors['visible'] = new PrimitiveTypeProperty('visible', 'setVisible', false, 'boolean');
        this._propertyDescriptors['position'] = new ArrayProperty('position', 'setLocalPosition', true, 'vec3');
        this._propertyDescriptors['rotation'] = new ArrayProperty('rotation', 'setLocalRotation', true, 'quat');
        this._propertyDescriptors['scale'] = new ArrayProperty('scale', 'setLocalScale', true, 'vec3');
        this._propertyDescriptors['transform'] = new ArrayProperty('transform', 'setLocalTransform', true, 'mat4');
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, TransformNode);
    //     super.update(element, oldProperties, newProperties);
    // }
    
    setVisible(element, oldProperties, newProperties) {
        // Propagate visibility to children by default
        element.setVisible(newProperties.visible, true);
    }
}