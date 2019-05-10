// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { LabelDisplayMode } from '../../types/label-display-mode.js';

import { TextContainerBuilder } from './text-container-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { TextChildrenProperty } from '../properties/text-children-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { PortalIconSize } from '../../types/portal-icon-size.js';

export class PortalIconBuilder extends TextContainerBuilder {
    constructor(){
        super();

        // BackgroundModel
        // IconModel

        this._propertyDescriptors['hoverScale'] = new PrimitiveTypeProperty('hoverScale', 'setHoverScale', true, 'number');
        this._propertyDescriptors['hoverZOffset'] = new PrimitiveTypeProperty('hoverZOffset', 'setHoverZOffset', true, 'number');
        this._propertyDescriptors['iconActivateAnimation'] = new PrimitiveTypeProperty('iconActivateAnimation', 'setIconActivateAnimation', true, 'string');
        this._propertyDescriptors['iconContextMenuAnimation'] = new PrimitiveTypeProperty('iconContextMenuAnimation', 'setIconContextMenuAnimation', true, 'string');
        this._propertyDescriptors['iconHoverAnimation'] = new PrimitiveTypeProperty('iconHoverAnimation', 'setIconHoverAnimation', true, 'string');
        this._propertyDescriptors['iconIdleAnimation'] = new PrimitiveTypeProperty('iconIdleAnimation', 'setIconIdleAnimation', true, 'string');
        this._propertyDescriptors['iconHoverPosition'] = new ArrayProperty('iconHoverPosition', 'setIconHoverPosition', true, 'vec3');
        this._propertyDescriptors['labelDisplayMode'] = new EnumProperty('labelDisplayMode', 'setLabelDisplayMode', true, LabelDisplayMode, 'LabelDisplayMode');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);
        this.validate(undefined, undefined, properties);

        let { text, portalSize } = properties;

        if (text === undefined) {
            text = this._getText(properties.children);
        }

        portalSize = portalSize === undefined
            ? ui.PortalIconSize.kSmall
            : PortalIconSize[portalSize];

        const element = ui.UiPortalIcon.Create(prism, text, portalSize);

        const unapplied = this.excludeProperties(properties, ['children', 'text']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiText);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        PropertyDescriptor.throwIfNotTypeOf(newProperties.text, 'string');
        TextChildrenProperty.throwIfNotText(newProperties.children);
    }
}
