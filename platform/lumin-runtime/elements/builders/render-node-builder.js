import { RenderNode } from 'lumin';
import { validator } from '../../utilities/validator.js';

import { TransformNodeBuilder } from './transform-node-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { Alignment } from '../../types/alignment.js'

export class RenderNodeBuilder extends TransformNodeBuilder {
    constructor(){
        super();

        // BackFaceCulls
        // Blooms
        // BloomStrength
        // CastsShadows
        // Color
        // DrmContent
        // FrontFaceCulls
        // IsOpaque
        // IsUI
        // PushesStencil
        // ReadsClip
        // ReadsDepth
        // ReceivesLight
        // ReceivesShadows
        // RenderingLayer
        // Shader
        // WritesColor
        // WritesDepth
        // WritesStencil

        // this._propertyDescriptors['enabled'] = new PrimitiveTypeProperty('enabled', 'setEnabled', true, 'boolean');
        // this._propertyDescriptors['alignment'] = new EnumProperty('alignment', 'setAlignment', true, Alignment, 'Alignment');
    }

    // create(prism, properties) {

    // }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, RenderNode);
    //     super.update(element, oldProperties, newProperties);
    // }

    // excludeProperties(properties, ...exclude) {
    //     const subset = Object.assign({}, properties);
    //     exclude.forEach(name => {
    //         if (properties.hasOwnProperty(name)) {
    //             delete subset[name]
    //         }
    //     });
    //     return subset;
    // }

    throwIfInvalidPrism(prism) {
        if ( !validator.validatePrism(prism) ) {
            throw new TypeError('Parameter "prism" is not instance of Prism');
        }
    }
}