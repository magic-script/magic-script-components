// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class WebViewBuilder extends UiNodeBuilder {
    constructor(){
        super();
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const { width, height } = properties;

        const element = ui.UiWebView.Create(prism, [width, height]);

        const unapplied = this.excludeProperties(properties, ['width, height']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        _validateProperty(newProperties.width, 'number', 'Property width is required.');
        _validateProperty(newProperties.height, 'number', 'Property height is required.');
    }

    _validateProperty(value, type, errorMessage) {
        if (PropertyDescriptor.hasValue(value)) {
            PropertyDescriptor.throwIfNotTypeOf(value, type);
        } else {
            throw new TypeError(errorMessage);
        }
    }
}


