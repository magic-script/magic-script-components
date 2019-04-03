import { VideoNode } from 'lumin';
import { validator } from '../../utilities/validator.js';

import { QuadNodeBuilder } from './quad-node-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { Alignment } from '../../types/alignment.js'

const DEFAULT_FRAME_WIDTH = 512;
const DEFAULT_FRAME_HEIGHT = 512;

export class VideoBuilder extends QuadNodeBuilder {
    constructor(){
        super();

        // Looping
        // TimedTextPath
        // VideoPath
        // VideoUri
        // Volume

        // this._propertyDescriptors['enabled'] = new PrimitiveTypeProperty('enabled', 'setEnabled', true, 'boolean');
        // this._propertyDescriptors['alignment'] = new EnumProperty('alignment', 'setAlignment', true, Alignment, 'Alignment');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const { width, height } = properties;

        const frameWidth = width === undefined ? DEFAULT_FRAME_WIDTH : width;
        const frameHeight = height === undefined ? DEFAULT_FRAME_HEIGHT : height;

        const element = prism.createVideoNode(frameWidth, frameHeight);

        this.update(element, undefined, properties);

        return element;
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