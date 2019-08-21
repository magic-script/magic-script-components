// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TextContainerBuilder } from './text-container-builder.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';
import { TextChildrenProperty } from '../properties/text-children-property.js';
import { ToggleType } from '../../types/toggle-type.js';

import { validator } from '../../utilities/validator.js';

export class ToggleBuilder extends TextContainerBuilder {
    constructor(){
        super();

        // ToggleModel

        this._propertyDescriptors['on'] = new PrimitiveTypeProperty('on', 'setOn', true, 'boolean');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        let { text, type } = properties;

        if (text === undefined) {
            text = this._getText(properties.children);
        }

        type = type === undefined
            ? ui.ToggleType.kDefault
            : ToggleType[type];

        const height = this.getPropertyValue('height', 0.0, properties);

        const element = ui.UiToggle.Create(prism, text, type, height);

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'type', 'height']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiButton);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        PropertyDescriptor.throwIfNotTypeOf(newProperties.text, 'string');
        PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
        TextChildrenProperty.throwIfNotText(newProperties.children);

        const type = newProperties.type;
        const message = `The provided toggle type ${type} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(type, message, validator.validateToggleType);
    }
}


