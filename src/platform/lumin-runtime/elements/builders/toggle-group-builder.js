// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { SystemIcons } from '../../types/system-icons.js';

import { UiNodeBuilder } from './ui-node-builder.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

export class ToggleGroupBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['allowMultipleOn'] = new PrimitiveTypeProperty('allowMultipleOn', 'setAllowMultipleTogglesOn', true, 'boolean');
        this._propertyDescriptors['allowAllOff'] = new PrimitiveTypeProperty('allowAllOff', 'setAllowAllTogglesOff', true, 'boolean');
        this._propertyDescriptors['allTogglesOff'] = new PrimitiveTypeProperty('allTogglesOff', 'setAllTogglesOff', true, 'boolean');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const allowMultipleOn = this.getPropertyValue('allowMultipleOn', false, properties);
        const allowAllOff = this.getPropertyValue('allowAllOff', false, properties);

        const element = ui.UiToggleGroup.Create(prism, allowMultipleOn, allowAllOff);

        const unapplied = this.excludeProperties(properties, ['allowMultipleOn', 'allowAllOff']);

        this.apply(element, undefined, unapplied);

        return element;
    }
}
