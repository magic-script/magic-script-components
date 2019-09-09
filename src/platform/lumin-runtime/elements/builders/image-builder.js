// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { SystemIcons } from '../../types/system-icons.js';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { validator } from '../../utilities/validator.js';

export class ImageBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['ui'] = new PrimitiveTypeProperty('ui', 'setIsUI', true, 'boolean');
        this._propertyDescriptors['opaque'] = new PrimitiveTypeProperty('opaque', 'setIsOpaque', true, 'boolean');
        this._propertyDescriptors['color'] = new ArrayProperty('color', 'setColor', true, 'vec4');
        this._propertyDescriptors['texCoords'] = new ArrayProperty('texCoords', 'setTexCoords', false, 'vec4');

        // Expects Id
        this._propertyDescriptors['imageFrameResource'] = new PrimitiveTypeProperty('imageFrameResource', 'setImageFrameResource', true, 'number');
        this._propertyDescriptors['renderResource'] = new PrimitiveTypeProperty('renderResource', 'setRenderResource', true, 'number');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const { icon, filePath, resourceId, height, width, color } = properties;

        const absolutePath = this.getPropertyValue('absolutePath', false, properties);
        const useFrame = this.getPropertyValue('useFrame', false, properties);

        let element;
        if (typeof icon === 'string') {
            element = ui.UiImage.Create(prism, SystemIcons[icon], height);
        } else if (resourceId) {
            element = ui.UiImage.Create(prism, resourceId, width, height, useFrame);
        } else if (filePath) {
            element = ui.UiImage.Create(prism, filePath, width, height, absolutePath, useFrame);
        } else if (color) {
            element = ui.UiImage.Create(prism, BigInt(0), width, height, useFrame);
        }

        const unapplied = this.excludeProperties(properties, ['icon', 'filePath', 'resourceId', 'height', 'width']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    update(element, oldProperties, newProperties) {
        // this.throwIfNotInstanceOf(element, ui.UiImage);
        super.update(element, oldProperties, newProperties);

        this._validateSize(newProperties);
        this._setSize(element, newProperties);
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        const message = `The provided icon ${newProperties.icon} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(newProperties.icon, message, validator.validateSystemIcon);

        PropertyDescriptor.throwIfNotTypeOf(newProperties.resourceId, 'number');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.filePath, 'string');

        this._validateSize(newProperties);
    }

    _validateSize(properties) {
        PropertyDescriptor.throwIfNotTypeOf(properties.height, 'number');
        PropertyDescriptor.throwIfNotTypeOf(properties.width, 'number');
    }

    _setSize(element, properties) {
        const { height, width } = properties;

        if (width || height) {
            if (width === undefined) {
                width = element.getSize()[0];
            }

            if (height === undefined) {
                height = element.getSize()[1];
            }

            element.setSize([width, height]);
        }
    }

    setTexCoords(element, oldProperties, newProperties) {
        const texCoords = newProperties.texCoords;
        texCoords.forEach( coordinate => PropertyDescriptor.throwIfNotArray(coordinate, 'vec2') );
        element.setTexCoords(texCoords);
    }
}


