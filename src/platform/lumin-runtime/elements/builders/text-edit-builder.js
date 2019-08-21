// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TextContainerBuilder } from './text-container-builder.js';

import { AdvanceDirection } from '../../types/advance-direction.js';
import { FlowDirection } from '../../types/flow-direction.js';
import { Quality }  from '../../types/quality.js';
import { HorizontalTextAlignment } from '../../types/horizontal-text-alignment.js';
import { FontStyle, FontWeight } from '../../types/font-style.js';
import { ScrollBarVisibility } from '../../types/scroll-bar-visibility.js';
import { TextEntryMode } from '../../types/text-entry-mode.js';

import { ArrayProperty } from '../properties/array-property.js';
import { ClassProperty } from '../properties/class-property.js';
import { CursorEdgeScrollMode } from '../../types/cursor-edge-scroll-mode.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { validator } from '../../utilities/validator.js';

export class TextEditBuilder extends TextContainerBuilder {
    constructor(){
        super();

        this._propertyDescriptors['textAlignment'] = new EnumProperty('textAlignment', 'setTextAlignment', true, HorizontalTextAlignment, 'HorizontalTextAlignment');
        this._propertyDescriptors['charLimit'] = new PrimitiveTypeProperty('charLimit', 'setCharacterLimit', true, 'number');
        this._propertyDescriptors['charSpacing'] = new PrimitiveTypeProperty('charSpacing', 'setCharacterSpacing', true, 'number');
        this._propertyDescriptors['cursorEdgeScrollMode'] = new EnumProperty('cursorEdgeScrollMode', 'setCursorEdgeScrollMode', true, CursorEdgeScrollMode, 'CursorEdgeScrollMode');
        this._propertyDescriptors['lineSpacing'] = new PrimitiveTypeProperty('lineSpacing', 'setLineSpacing', true, 'number');
        this._propertyDescriptors['textPadding'] = new ArrayProperty('textPadding', 'setTextPadding', true, 'vec4');
        this._propertyDescriptors['hint'] = new PrimitiveTypeProperty('hint', 'setHintText', true, 'string');
        this._propertyDescriptors['hintColor'] = new ArrayProperty('hintColor', 'setHintTextColor', true, 'vec4');
        this._propertyDescriptors['multiline'] = new PrimitiveTypeProperty('multiline', 'setMultilineMode', true, 'boolean');
        this._propertyDescriptors['password'] = new PrimitiveTypeProperty('password', 'setPasswordMode', true, 'boolean');
        this._propertyDescriptors['scrolling'] = new PrimitiveTypeProperty('scrolling', 'setScrollingEnabled', true, 'boolean');
        this._propertyDescriptors['textEntry'] = new EnumProperty('textEntry', 'setTextEntryMode', true, TextEntryMode, 'TextEntryMode');
        this._propertyDescriptors['scrollBarVisibility'] = new EnumProperty('scrollBarVisibility', 'setScrollBarVisibilityMode', true, ScrollBarVisibility, 'ScrollBarVisibility');
        this._propertyDescriptors['scrollSpeed'] = new PrimitiveTypeProperty('scrollSpeed', 'setScrollSpeed', true, 'number');
        this._propertyDescriptors['scrollValue'] = new PrimitiveTypeProperty('scrollValue', 'setScrollValue', true, 'number');
        // font
        // const fontProperties = [
        //      new EnumProperty('style', undefined, undefined, FontStyle, 'FontStyle'),
        //      new EnumProperty('weight', undefined, undefined, FontWeight, 'FontWeight')
        // ];

        // this._propertyDescriptors['font'] = new ClassProperty('font', 'setFont', false, fontProperties);

        // fontParameters
        const fontParamsProperties = [
            new EnumProperty('style', undefined, undefined, FontStyle, 'FontStyle'),
            new EnumProperty('weight', undefined, undefined, FontWeight, 'FontWeight'),
            new PrimitiveTypeProperty('fontSize', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('tracking', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('allCaps', undefined, undefined, 'boolean'),
        ];

        this._propertyDescriptors['fontParams'] = new ClassProperty('fontParams', 'setFontParams', false, fontParamsProperties);

        // keyboardProperties
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);
        this.validate(undefined, undefined, properties);

        let { children, text } = properties;

        if (text === undefined) {
            text = this._getText(children);
        }

        const { width, height } = properties;

        const element = ui.UiTextEdit.Create(prism, text, width, height);

        this._setFont2dResource(prism, element, properties);

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'width', 'height', 'fontDescription', 'filePath', 'absolutePath']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    update(element, oldProperties, newProperties) {
        // this.throwIfNotInstanceOf(element, ui.UiText);
        super.update(element, oldProperties, newProperties);

        this._validateFont(newProperties);
        this._setFont(element, newProperties);

        this._validateSelectedText(newProperties);
        this._setSelectedText(element, newProperties);
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        this._validateSize(newProperties);
        this._validateFont(newProperties);
        this._validateSelectedText(newProperties);
    }

    setFontParams(element, oldProperties, newProperties) {
        const style = FontStyle[this.getPropertyValue('style', 'normal', newProperties.fontParams)];
        const weight = FontWeight[this.getPropertyValue('weight', 'regular', newProperties.fontParams)];
        const fontSize = this.getPropertyValue('fontSize', 0.02, newProperties.fontParams);
        const tracking = this.getPropertyValue('tracking', 50, newProperties.fontParams);
        const allCaps = this.getPropertyValue('allCaps', false, newProperties.fontParams);

        element.setFontParams(new ui.FontParams(style, weight, fontSize, tracking, allCaps));
    }

    _setFont2dResource(prism, element, properties) {
        const { fontDescription, filePath } = properties;
        const absolutePath = this.getPropertyValue('absolutePath', false, properties);

        if (this._validateFont2dResourceProperties(fontDescription, filePath, absolutePath)) {

            const advanceDirection = AdvanceDirection[fontDescription.advanceDirection];
            const flowDirection = FlowDirection[fontDescription.flowDirection];
            const tileSize = fontDescription.tileSize;
            const quality = this.getPropertyValue('quality', Quality['std'], fontDescription);
            const minAlpha = this.getPropertyValue('minAlpha', 0.15, fontDescription);

            const fontDesc = new Font2dDesc(advanceDirection, flowDirection, tileSize, quality, minAlpha);
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
               && ( !PropertyDescriptor.hasValue(absolutePath) || typeof fontDescription === 'boolean' ) );
    }

    _validateFont2dDescriptionProperties(advanceDirection, flowDirection, tileSize, quality, minAlpha) {
        return (  (  PropertyDescriptor.hasValue(advanceDirection) && validator.validateAdvanceDirection(advanceDirection) )
               && (  PropertyDescriptor.hasValue(flowDirection) && validator.validateFlowDirection(flowDirection) )
               && (  PropertyDescriptor.hasValue(tileSize) && typeof tileSize === 'number' )
               && ( !PropertyDescriptor.hasValue(quality) || validator.validateQuality(quality) )
               && ( !PropertyDescriptor.hasValue(minAlpha) || typeof minAlpha === 'number' ) );
    }

    _validateFont(properties) {
        const { style, weight } = properties;

        let message = `The provided font style ${style} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(style, message, validator.validateFontStyle);

        message = `The provided font weight ${weight} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(weight, message, validator.validateFontWeight);
    }

    _setFont(element, properties) {
        const { style, weight } = properties;

        if (style) {
            const fontStyle = FontStyle[style];
            const fontWeight = weight ? FontWeight[weight] : FontWeight['regular'];

            element.setFont(fontStyle, fontWeight);
        }
    }

    _validateSize(properties) {
        PropertyDescriptor.throwIfNotTypeOf(properties.height, 'number');
        PropertyDescriptor.throwIfNotTypeOf(properties.width, 'number');
    }

    _validateSelectedText(properties){
        PropertyDescriptor.throwIfNotTypeOf(properties.selectedBegin, 'number');
        PropertyDescriptor.throwIfNotTypeOf(properties.selectedEnd, 'number');
    }

    _setSelectedText(element, properties){
        const { selectedBegin, selectedEnd } = properties;

        if (selectedBegin || selectedEnd) {
            if (selectedBegin === undefined) {
                selectedBegin = 0;
            }

            if (selectedEnd === undefined) {
                const text = component.getText();
                selectedEnd = text ? text.length : 0;
            }

            if (selectedBegin <= selectedEnd) {
                element.setSelectedText(selectedBegin, selectedEnd);
            }
        }
    }
}
