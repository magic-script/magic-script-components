// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { HorizontalTextAlignment } from '../../types/horizontal-text-alignment.js';
import { validator } from '../../utilities/validator.js';

import { TextContainerBuilder } from './text-container-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { TextChildrenProperty } from '../properties/text-children-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { PortalIconSize } from '../../types/portal-icon-size.js';

export class PortalIconBuilder extends TextContainerBuilder {
    constructor(){
        super();

        // BackgroundModel
        // HoverScale
        // HoverZOffset
        // IconActivateAnimation
        // IconContextMenuAnimation
        // IconHoverAnimation
        // IconHoverPosition
        // IconIdleAnimation
        // IconModel
        // LabelDisplayMode

        // this._propertyDescriptors['textAlignment'] = new EnumProperty('textAlignment', 'setTextAlignment', true, HorizontalTextAlignment, 'HorizontalTextAlignment');
        // this._propertyDescriptors['charSpacing'] = new PrimitiveTypeProperty('iconSize', 'setCharacterSpacing', true, 'number');
        // this._propertyDescriptors['lineSpacing'] = new PrimitiveTypeProperty('iconColor', 'setLineSpacing', true, 'number');
        // this._propertyDescriptors['style'] = new EnumProperty('style', 'setFont', true, FontStyle, 'FontStyle');
        // this._propertyDescriptors['weight'] = new EnumProperty('weight', 'setFont', true, FontWeight, 'FontWeight');
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
