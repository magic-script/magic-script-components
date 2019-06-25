// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { SpatialSoundSendLevels, SpatialSoundDistanceProperties, SpatialSoundRadiationProperties } from 'lumin';

import { TransformBuilder } from './transform-builder.js';
import { ArrayProperty } from '../properties/array-property.js'
import { ClassProperty } from '../properties/class-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { LightType } from '../../types/light-type.js';

export class LightBuilder extends TransformBuilder {
    constructor(){
        super();

        this._propertyDescriptors['color'] = new ArrayProperty('color', 'setColor', true, 'vec3');
        this._propertyDescriptors['intensity'] = new PrimitiveTypeProperty('intensity', 'setIntensity', true, 'number');
        this._propertyDescriptors['range'] = new PrimitiveTypeProperty('range', 'setRange', true, 'number');
        this._propertyDescriptors['spotAngle'] = new PrimitiveTypeProperty('spotAngle', 'setSpotAngle', true, 'number');
        this._propertyDescriptors['type'] = new EnumProperty('type', '// setType', true, LightType, 'LightType');
        this._propertyDescriptors['castsShadows'] = new PrimitiveTypeProperty('castsShadows', 'trySetCastsShadows', true, 'number');

        // setUseHeadPose
        const useHeadPoseProperties = [
            new PrimitiveTypeProperty('on', undefined, undefined, 'boolean'),
            new ArrayProperty('offset', undefined, undefined, 'vec4')
        ];

        this._propertyDescriptors['useHeadPose'] = new ClassProperty('useHeadPose', 'setUseHeadPose', false, useHeadPoseProperties);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = prism.createLightNode();

        this.update(element, undefined, properties);

        return element;
    }

    setUseHeadPose(element, oldProperties, newProperties) {
        const { on, offset } = newProperties;

        if ( on != undefined && offset !== undefined ) {
            element.setUseHeadPose(on, offset);
        }
    }
}