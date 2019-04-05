import { ui } from 'lumin';
import { HorizontalTextAlignment } from '../../types/horizontal-text-alignment.js';
import { FontStyle, FontWeight } from '../../types/font-style.js';
import { validator } from '../../utilities/validator.js';

import { TextContainerBuilder } from './text-container-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

const DEFAULT_FONT_STYLE = FontStyle['normal'];
const DEFAULT_FONT_WEIGHT = FontWeight['regular'];

export class TextBuilder extends TextContainerBuilder {
    constructor(){
        super();

        this._propertyDescriptors['textAlignment'] = new EnumProperty('textAlignment', 'setTextAlignment', true, HorizontalTextAlignment, 'HorizontalTextAlignment');
        this._propertyDescriptors['charSpacing'] = new PrimitiveTypeProperty('iconSize', 'setCharacterSpacing', true, 'number');
        this._propertyDescriptors['lineSpacing'] = new PrimitiveTypeProperty('iconColor', 'setLineSpacing', true, 'number');

        // TODO:
        // this._propertyDescriptors['style'] = new EnumProperty('style', 'setFont', true, FontStyle, 'FontStyle');
        // this._propertyDescriptors['weight'] = new EnumProperty('weight', 'setFont', true, FontWeight, 'FontWeight');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);
        this.validate(undefined, undefined, properties);

        const { children, text, style, weight } = properties;

        const finalText = text ? text : this._getText(children);
        const fontStyle = style === undefined ? DEFAULT_FONT_STYLE : FontStyle[style];
        const fontWeight = weight === undefined ? DEFAULT_FONT_WEIGHT : FontWeight[weight];

        const element = ui.UiText.Create(prism, finalText, fontStyle, fontWeight);

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'style', 'weight']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    update(element, oldProperties, newProperties) {
        // this.throwIfNotInstanceOf(element, ui.UiText);
        super.update(element, oldProperties, newProperties);

        this._validateFont(newProperties);
        this._setFont(element, newProperties);
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        this._validateFont(newProperties);
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
            const fontWeight = weight ? FontWeight[weight] : DEFAULT_FONT_WEIGHT;
    
            element.setFont(fontStyle, fontWeight);
        }
    }
}
