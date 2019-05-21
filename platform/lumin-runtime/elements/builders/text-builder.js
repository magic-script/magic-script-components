// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { HorizontalTextAlignment } from '../../types/horizontal-text-alignment.js';
import { FontStyle, FontWeight } from '../../types/font-style.js';

import { TextContainerBuilder } from './text-container-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { ClassProperty } from '../properties/class-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

const DEFAULT_FONT_STYLE = FontStyle['normal'];
const DEFAULT_FONT_WEIGHT = FontWeight['regular'];

export class TextBuilder extends TextContainerBuilder {
    constructor(){
        super();


        this._propertyDescriptors['allCaps'] = new PrimitiveTypeProperty('allCaps', 'setAllCaps', true, 'boolean');
        this._propertyDescriptors['charSpacing'] = new PrimitiveTypeProperty('charSpacing', 'setCharacterSpacing', true, 'number');
        this._propertyDescriptors['lineSpacing'] = new PrimitiveTypeProperty('lineSpacing', 'setLineSpacing', true, 'number');
        this._propertyDescriptors['textAlignment'] = new EnumProperty('textAlignment', 'setTextAlignment', true, HorizontalTextAlignment, 'HorizontalTextAlignment');
        this._propertyDescriptors['style'] = new EnumProperty('style', 'setFont', false, FontStyle, 'FontStyle');
        this._propertyDescriptors['weight'] = new EnumProperty('weight', 'setFont', false, FontWeight, 'FontWeight');

        const boundsSizeProperties = [
            new ArrayProperty('boundsSize', undefined, undefined, 'vec2'),
            new PrimitiveTypeProperty('wrap', undefined, undefined, 'boolean')
        ];

        this._propertyDescriptors['boundsSize'] = new ClassProperty('boundsSize', 'setBoundsSize', false, boundsSizeProperties);

        const fontParamsProperties = [
            new EnumProperty('style', undefined, undefined, FontStyle, 'FontStyle'),
            new EnumProperty('weight', undefined, undefined, FontWeight, 'FontWeight'),
            new PrimitiveTypeProperty('fontSize', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('tracking', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('allCaps', undefined, undefined, 'boolean')
        ];

        this._propertyDescriptors['fontParams'] = new ClassProperty('fontParams', 'setFontParams', false, fontParamsProperties);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);
        this.validate(undefined, undefined, properties);

        const { children, text, style, weight } = properties;

        const finalText  = text ? text : this._getText(children);
        const fontStyle  = style  === undefined ? DEFAULT_FONT_STYLE  : FontStyle[style];
        const fontWeight = weight === undefined ? DEFAULT_FONT_WEIGHT : FontWeight[weight];

        const element = ui.UiText.Create(prism, finalText, fontStyle, fontWeight);

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'style', 'weight']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiText);
    //     super.update(element, oldProperties, newProperties);
    // }

    // validate(element, oldProperties, newProperties) {
    //     super.validate(element, oldProperties, newProperties);
    // }

    setFont(element, oldProperties, newProperties) {
        const { style, weight } = newProperties;

        if (style) {
            const fontStyle = FontStyle[style];
            const fontWeight = weight ? FontWeight[weight] : DEFAULT_FONT_WEIGHT;

            element.setFont(fontStyle, fontWeight);
        }
    }

    setBoundsSize(element, oldProperties, newProperties) {
        let { boundsSize, wrap } = newProperties.wrap;

        if ( !PropertyDescriptor.hasValue(wrap)) {
            wrap = true;
        }

        element.setBoundsSize(boundsSize, wrap);
    }

    setFontParams(element, oldProperties, newProperties) {
        element.setFontParams(newProperties.fontParams);
    }
}
