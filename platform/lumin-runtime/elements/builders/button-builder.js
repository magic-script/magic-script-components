// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TextContainerBuilder } from './text-container-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { EclipseButtonType } from '../../types/eclipse-button-type.js';
import { validator } from '../../utilities/validator.js';

export class ButtonBuilder extends TextContainerBuilder {
    constructor(){
        super();

        this._propertyDescriptors['iconSize'] = new PrimitiveTypeProperty('iconSize', 'setIconSize', true, 'number');
        this._propertyDescriptors['iconColor'] = new ArrayProperty('iconColor', 'setIconColor', true, 'vec3');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        let { children, text } = properties;

        if (text === undefined) {
            text = this._getText(children);
        }

        const height = this.getPropertyValue('height', 0.0, properties);
        const type = properties.type;

        let element;
        if (type === undefined) {
            const width = this.getPropertyValue('width', 0.0, properties);
            const roundness = this.getPropertyValue('roundness', 1.0, properties);

            element = ui.UiButton.Create(prism, text, width, height, roundness);

            // const enabled = this.getPropertyValue('enabled', true, properties);
            // element.setEnabled(enabled);
        } else {
            const eclipseButtonParams = new ui.EclipseButtonParams(EclipseButtonType[type], properties.iconPath, text, height);
            element = ui.UiButton.CreateEclipseButton(prism, eclipseButtonParams);
        }

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'width', 'height', 'roundness']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        PropertyDescriptor.throwIfNotTypeOf(newProperties.width, 'number');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.roundness, 'number');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.iconPath, 'string');

        const buttonType = newProperties.type;
        const message = `The provided button type ${buttonType} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(buttonType, message, validator.validateEclipseButtonType);
    }
}


