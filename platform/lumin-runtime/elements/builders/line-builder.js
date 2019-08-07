// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { RenderBuilder } from './render-builder.js';
import { ArrayProperty } from '../properties/array-property.js'
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class LineBuilder extends RenderBuilder {
    constructor(){
        super();

        this._propertyDescriptors['points'] = new ArrayProperty('points', 'setPoints', false);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = prism.createLineNode();

        this.update(element, undefined, properties);

        return element;
    }

    setPoints(element, oldProperties, newProperties) {
        element.clearPoints();

        const points = newProperties.points;
        if ( points !== undefined && Array.isArray(points) ) {
            points.forEach( point => {
                PropertyDescriptor.throwIfNotArray(point, 'vec3');
                element.addPoints(point);
            });
        }
    }
}
