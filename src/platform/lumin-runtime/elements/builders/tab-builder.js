// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TextContainerBuilder } from './text-container-builder.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';
import { TextChildrenProperty } from '../properties/text-children-property.js';

import { EclipseLabelType } from '../../types/eclipse-label-type.js';

import { validator } from '../../utilities/validator.js';

export class TabBuilder extends TextContainerBuilder {

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        let { text, type } = properties;

        if (text === undefined) {
            text = this._getText(properties.children);
        }

        const element = type === undefined
            ? ui.UiTab.Create(prism, text)
            : ui.UiTab.CreateEclipseTab(prism, text, EclipseLabelType[type]);

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'type']);

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
        TextChildrenProperty.throwIfNotText(newProperties.children);
        
        const { type } = newProperties;
        const message = `The provided eclipse label type ${type} is not a valid value`;
        super._throwIfPredicateFails(type, message, validator.validateEclipseLabelType);
    }
}


