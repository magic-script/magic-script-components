import { ui } from 'lumin';
import { validator } from '../../utilities/validator.js';
import { HorizontalTextAlignment } from '../../types/horizontal-text-alignment.js';
import { ScrollBarVisibility } from '../../types/scroll-bar-visibility.js';
import { TextEntryMode } from '../../types/text-entry-mode.js';
import { FontStyle, FontWeight } from '../../types/font-style.js';

import { TextContainerBuilder } from './text-container-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

const DEFAULT_FONT_STYLE = FontStyle['normal'];
const DEFAULT_FONT_WEIGHT = FontWeight['regular'];

export class TextEditBuilder extends TextContainerBuilder {
    constructor(){
        super();

        this._propertyDescriptors['textAlignment'] = new EnumProperty('textAlignment', 'setTextAlignment', true, HorizontalTextAlignment, 'HorizontalTextAlignment');
        this._propertyDescriptors['charSpacing'] = new PrimitiveTypeProperty('iconSize', 'setCharacterSpacing', true, 'number');
        this._propertyDescriptors['lineSpacing'] = new PrimitiveTypeProperty('iconColor', 'setLineSpacing', true, 'number');
        this._propertyDescriptors['padding'] = new ArrayProperty('padding', 'setTextPadding', true, 'vec4');
        this._propertyDescriptors['hint'] = new PrimitiveTypeProperty('hint', 'setHintText', true, 'string');
        this._propertyDescriptors['hintColor'] = new ArrayProperty('hintColor', 'setHintTextColor', true, 'vec3');
        this._propertyDescriptors['multiline'] = new PrimitiveTypeProperty('multiline', 'setMultilineMode', true, 'boolean');
        this._propertyDescriptors['password'] = new PrimitiveTypeProperty('password', 'setPasswordMode', true, 'boolean');
        this._propertyDescriptors['scrolling'] = new PrimitiveTypeProperty('scrolling', 'setScrollingEnabled', true, 'boolean');
        this._propertyDescriptors['textEntry'] = new EnumProperty('textEntry', 'setTextEntryMode', true, TextEntryMode, 'TextEntryMode');
        this._propertyDescriptors['scrollBarVisibility'] = new EnumProperty('scrollBarVisibility', 'setScrollBarVisibilityMode', true, ScrollBarVisibility, 'ScrollBarVisibility');

        // TODO:
        // this._propertyDescriptors['style'] = new EnumProperty('style', 'setFont', true, FontStyle, 'FontStyle');
        // this._propertyDescriptors['weight'] = new EnumProperty('weight', 'setFont', true, FontWeight, 'FontWeight');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const { children, text, width, height } = properties;

        const finalText = text ? text : this._getText(children);

        const element = ui.UiTextEdit.Create(prism, finalText, width, height);

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'width', 'height']);

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

    // FONT
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
            const fontWeight = weight ? FontWeight[weight] : DEFAULT_FONT_WEIGHT;
    
            element.setFont(fontStyle, fontWeight);
        }
    }

    // SIZE
    _validateSize(properties) {
        PropertyDescriptor.throwIfNotTypeOf(properties.height, 'number');
        PropertyDescriptor.throwIfNotTypeOf(properties.width, 'number');
    }

    // SELECTED TEXT
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
