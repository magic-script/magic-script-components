import { VideoNode } from 'lumin';
import { validator } from '../../utilities/validator.js';

import { RenderNodeBuilder } from './render-node-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { Alignment } from '../../types/alignment.js'

const DEFAULT_FRAME_WIDTH = 512;
const DEFAULT_FRAME_HEIGHT = 512;

export class QuadNodeBuilder extends RenderNodeBuilder {
    constructor(){
        super();

        // RenderResource
        // Size
        // SubTexture
        // TexCoords
        // ViewMode

        // this._propertyDescriptors['enabled'] = new PrimitiveTypeProperty('enabled', 'setEnabled', true, 'boolean');
        // this._propertyDescriptors['alignment'] = new EnumProperty('alignment', 'setAlignment', true, Alignment, 'Alignment');
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, RenderNode);
    //     super.update(element, oldProperties, newProperties);
    // }

    // validate(element, oldProperties, newProperties) {
    //     super.validate(element, oldProperties, newProperties);

    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.width, 'number');
    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.roundness, 'number');
    // }
}