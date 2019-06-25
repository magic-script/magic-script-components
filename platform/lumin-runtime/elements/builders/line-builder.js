// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { SpatialSoundSendLevels, SpatialSoundDistanceProperties, SpatialSoundRadiationProperties } from 'lumin';

import { TransformBuilder } from './transform-builder.js';
import { ArrayProperty } from '../properties/array-property.js'
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class LineBuilder extends TransformBuilder {
    constructor(){
        super();

        this._propertyDescriptors['clear'] = new PrimitiveTypeProperty('clear', 'setClear', false, 'boolean');
        this._propertyDescriptors['points'] = new ArrayProperty('points', 'setPoints', false);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = prism.createLineNode();

        this.update(element, undefined, properties);

        return element;
    }

    setClear(element, oldProperties, newProperties) {
        const clear = newProperties.clear;
        if ( clear !== undefined && typeof clear === 'boolean' && clear === true ) {
            element.clearPoints();
        }
    }

    setPoints(element, oldProperties, newProperties) {
        const points = newProperties.points;
        if ( points != undefined && Array.isArray(points) ) {
            points.forEach( point => {
                PropertyDescriptor.throwIfNotArray(point, 'vec3');
                element.addPoints(point);
            });
        }
    }
}