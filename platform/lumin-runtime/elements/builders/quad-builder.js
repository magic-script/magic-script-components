// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { RenderBuilder } from './render-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { ViewMode } from '../../types/view-mode.js';

export class QuadBuilder extends RenderBuilder {
    constructor(){
        super();

        this._propertyDescriptors['renderResourceId'] = new PrimitiveTypeProperty('renderResourceId', 'setRenderResource', true, 'number');
        this._propertyDescriptors['texCoords'] = new ArrayProperty('texCoords', 'setTexCoords', true, 'vec2');
        this._propertyDescriptors['viewMode'] = new EnumProperty('viewMode', 'setViewMode', true, ViewMode, 'ViewMode');
        this._propertyDescriptors['size'] = new ArrayProperty('size', 'setSize', true, 'vec2');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const renderResourceId = properties.renderResourceId;

        const element = renderResourceId === undefined
            ? prism.createQuadNode()
            : prism.createQuadNode(renderResourceId);

        const unapplied = this.excludeProperties(properties, ['renderResourceId']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    update(element, oldProperties, newProperties) {
        // this.throwIfNotInstanceOf(element, QuadNode);
        super.update(element, oldProperties, newProperties);

        // this._validateSize(newProperties);
        this._validateSubTexture(newProperties);

        // this._setSize(element, newProperties);
        this._setSubTexture(element, newProperties);
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        // this._validateSize(newProperties);
        this._validateSubTexture(newProperties);
    }

    // _validateSize(properties) {
    //     PropertyDescriptor.throwIfNotTypeOf(properties.height, 'number');
    //     PropertyDescriptor.throwIfNotTypeOf(properties.width, 'number');
    // }

    _validateSubTexture(properties) {
        const subTexture = properties.subTexture;

        if (PropertyDescriptor.hasValue(subTexture)){
            if (  typeof subTexture !== 'string'
               && typeof subTexture !== 'number' ) {
                throw new TypeError(`subTexture parameter ${subTexture} should be string or number type`);
            }
        }
    }

    // _setSize(element, properties) {
    //     const { height, width } = properties;

    //     if (width || height) {
    //         if (width === undefined) {
    //             width = element.getSize()[0];
    //         }

    //         if (height === undefined) {
    //             height = element.getSize()[1];
    //         }

    //         element.setSize([height, width]);
    //     }
    // }

    _setSubTexture(element, properties) {
        const subTexture = properties.subTexture

        if (subTexture !== undefined) {
            element.setSubTexture(subTexture);
        }
    }
}