import { AudioNode } from 'lumin';
import { validator } from '../../utilities/validator.js';

import { TransformNodeBuilder } from './transform-node-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { Alignment } from '../../types/alignment.js'

export class AudioBuilder extends TransformNodeBuilder {
    constructor(){
        super();

        // SoundLooping
        // SoundMute
        // SoundPitch
        // SoundVolumeLinear
        // SpatialSoundDirection
        // SpatialSoundDirectSendLevels
        // SpatialSoundDistanceProperties
        // SpatialSoundEnable
        // SpatialSoundPosition
        // SpatialSoundRadiationProperties
        // SpatialSoundRoomSendLevels
        // StreamedFileOffset

        // this._propertyDescriptors['enabled'] = new PrimitiveTypeProperty('enabled', 'setEnabled', true, 'boolean');
        // this._propertyDescriptors['alignment'] = new EnumProperty('alignment', 'setAlignment', true, Alignment, 'Alignment');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = prism.createAudioNode();

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