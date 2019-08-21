// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui, glyph } from 'lumin';

import { AdvanceDirection } from '../../types/advance-direction.js';
import { FlowDirection } from '../../types/flow-direction.js';
import { Quality }  from '../../types/quality.js';
import { HorizontalTextAlignment } from '../../types/horizontal-text-alignment.js';
import { FontStyle, FontWeight } from '../../types/font-style.js';

import { TextContainerBuilder } from './text-container-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { ClassProperty } from '../properties/class-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { validator } from '../../utilities/validator.js';

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

        let { children, text } = properties;

        if (text === undefined) {
            text = this._getText(children);
        }
        
        const { style, weight } = properties;

        const fontStyle  = style  === undefined ? DEFAULT_FONT_STYLE  : FontStyle[style];
        const fontWeight = weight === undefined ? DEFAULT_FONT_WEIGHT : FontWeight[weight];

        const element = ui.UiText.Create(prism, text, fontStyle, fontWeight);

        this._setFont2dResource(prism, element, properties);

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'style', 'weight', 'fontDescription', 'filePath', 'absolutePath']);

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

    _setFont2dResource(prism, element, properties) {
        const { fontDescription, filePath } = properties;
        const absolutePath = this.getPropertyValue('absolutePath', false, properties);

        if (this._validateFont2dResourceProperties(fontDescription, filePath, absolutePath)) {

            const advanceDirection = AdvanceDirection[fontDescription.advanceDirection];
            const flowDirection = FlowDirection[fontDescription.flowDirection];
            const tileSize = fontDescription.tileSize;
            const quality = this.getPropertyValue('quality', Quality['std'], fontDescription);
            const minAlpha = this.getPropertyValue('minAlpha', 0.15, fontDescription);

            const fontDesc = new glyph.Font2dDesc(advanceDirection, flowDirection, tileSize, quality, minAlpha);
            const font2dResourceId = prism.createFont2dResourceId(fontDesc, filePath, absolutePath);

            element.setFont(font2dResourceId);
        }
    }

    _validateFont2dResourceProperties(fontDescription, filePath, absolutePath) {
        if ( !PropertyDescriptor.hasValue(fontDescription) ) {
            return false;
        }

        const { advanceDirection, flowDirection, tileSize, quality, minAlpha } = fontDescription;

        return (  (  this._validateFont2dDescriptionProperties(advanceDirection, flowDirection, tileSize, quality, minAlpha) )
               && (  PropertyDescriptor.hasValue(filePath) && typeof filePath === 'string' )
               && ( !PropertyDescriptor.hasValue(absolutePath) || typeof absolutePath === 'boolean' ) );
    }

    _validateFont2dDescriptionProperties(advanceDirection, flowDirection, tileSize, quality, minAlpha) {
        return (  (  PropertyDescriptor.hasValue(advanceDirection) && validator.validateAdvanceDirection(advanceDirection) )
               && (  PropertyDescriptor.hasValue(flowDirection) && validator.validateFlowDirection(flowDirection) )
               && (  PropertyDescriptor.hasValue(tileSize) && typeof tileSize === 'number' )
               && ( !PropertyDescriptor.hasValue(quality) || validator.validateQuality(quality) )
               && ( !PropertyDescriptor.hasValue(minAlpha) || typeof minAlpha === 'number' ) );
    }

    setFont(element, oldProperties, newProperties) {
        const { style, weight } = newProperties;

        if (style) {
            const fontStyle = FontStyle[style];
            const fontWeight = weight ? FontWeight[weight] : DEFAULT_FONT_WEIGHT;

            element.setFont(fontStyle, fontWeight);
        }
    }

    setBoundsSize(element, oldProperties, newProperties) {
        let { boundsSize, wrap } = newProperties.boundsSize;

        if ( !PropertyDescriptor.hasValue(wrap)) {
            wrap = true;
        }

        element.setBoundsSize(boundsSize, wrap);
    }

    setFontParams(element, oldProperties, newProperties) {
        const style = FontStyle[this.getPropertyValue('style', 'normal', newProperties.fontParams)];
        const weight = FontWeight[this.getPropertyValue('weight', 'regular', newProperties.fontParams)];
        const fontSize = this.getPropertyValue('fontSize', 0.02, newProperties.fontParams);
        const tracking = this.getPropertyValue('tracking', 50, newProperties.fontParams);
        const allCaps = this.getPropertyValue('allCaps', false, newProperties.fontParams);

        element.setFontParams(new ui.FontParams(style, weight, fontSize, tracking, allCaps));
    }
}
