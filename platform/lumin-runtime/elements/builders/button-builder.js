// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TextContainerBuilder } from './text-container-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { EclipseButtonType } from '../../types/eclipse-button-type.js';
import { SystemIcon } from '../../types/system-icons.js';
import { Side } from '../../types/side.js';
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

        let element;
        if (properties.type === undefined) {
            const text = this.getText(properties.children, properties.text);
            const height = this.getPropertyValue('height', 0.0, properties);
            const width = this.getPropertyValue('width', 0.0, properties);
            const roundness = this.getPropertyValue('roundness', 1.0, properties);

            element = ui.UiButton.Create(prism, text, width, height, roundness);

            // const enabled = this.getPropertyValue('enabled', true, properties);
            // element.setEnabled(enabled);
        } else {
            element = ui.UiButton.CreateEclipseButton(prism, this.getEclipseButtonParams(properties));
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

        const iconType = newProperties.iconType;
        const message = `The provided icon type ${iconType} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(iconType, message, validator.validateSystemIcon);

        const labelSide = newProperties.labelSide;
        const message = `The provided label side ${labelSide} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(labelSide, message, validator.validateSide);

    }

    getText(children, text) {
        return text === undefined ? this._getText(children) : text;
    }

    getEclipseButtonParams(properties) {
        const text = this.getText(properties.children, properties.text);
        const { type, iconPath, labelSide, height, iconType } = properties;

        // 1. EclipseButtonParams(type, iconPath, text, labelSide, height, iconType)
        if (type !== undefined && iconPath !== undefined && text !== undefined && labelSide !== undefined && height !== undefined && iconType !== undefined) {
            return new ui.EclipseButtonParams(EclipseButtonType[type], iconPath, text, Side[labelSide], height, SystemIcon[iconType]);
        }

        // 2. EclipseButtonParams(type, iconPath, text, labelSide, height)
        if (type !== undefined && iconPath !== undefined && text !== undefined && labelSide !== undefined && height !== undefined) {
            return new ui.EclipseButtonParams(EclipseButtonType[type], iconPath, text, Side[labelSide], height);
        }

        // 3. EclipseButtonParams(type, iconPath, text, height)
        if (type !== undefined && iconPath !== undefined && text !== undefined && height !== undefined) {
            return new ui.EclipseButtonParams(EclipseButtonType[type], iconPath, text, height);
        }

        // 4. EclipseButtonParams(type, iconPath, height)
        if (type !== undefined && iconPath !== undefined && height !== undefined) {
            return new ui.EclipseButtonParams(EclipseButtonType[type], iconPath, height);
        }

        // 5. EclipseButtonParams(type, text, height)
        if (type !== undefined && text !== undefined && height !== undefined) {
            return new ui.EclipseButtonParams(EclipseButtonType[type], text, height);
        }

        // 6. EclipseButtonParams(type, iconType, height)
        if (type !== undefined && iconType !== undefined && height !== undefined) {
            return new ui.EclipseButtonParams(EclipseButtonType[type], SystemIcon[iconType], height);
        }

        // 7. EclipseButtonParams(type)
        if (type !== undefined) {
            return new ui.EclipseButtonParams(EclipseButtonType[type]);
        }

        throw new TypeError('Cannot create button with provided parameters');
    }
}


