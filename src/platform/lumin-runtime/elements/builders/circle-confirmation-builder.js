// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class CircleConfirmationBuilder extends UiNodeBuilder {

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const height = this.getPropertyValue('height', 0.0, properties);

        const element = ui.UiCircleConfirmation.Create(prism, height);

        const unapplied = this.excludeProperties(properties, ['height']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
    }
}


