import { ui } from 'lumin'

import { validator } from '../utilities/validator.js';
import { FontStyle, FontWeight } from '../types/font-style.js';
import { TextContainer } from './text-container.js';

const DEFAULT_FONT_STYLE = FontStyle['normal'];
const DEFAULT_FONT_WEIGHT = FontWeight['regular'];

export class Text extends TextContainer {
    static _propertySetter () {
        return {
            textSize:    { componentMember: true, setter: 'setTextSize'         },
            textColor:   { componentMember: true, setter: 'setTextColor'        },
            charSpacing: { componentMember: true, setter: 'setCharacterSpacing' },
            lineSpacing: { componentMember: true, setter: 'setLineSpacing'      }
        }
    }

    static create(prism, properties) {
        super._throwIfInvalidPrism(prism);

        this.validate(properties)

        const { children, style, weight } = properties;
        
        const text = super._getText(children);
        const fontStyle = style ? FontStyle[style] : DEFAULT_FONT_STYLE;
        const fontWeight = weight ? FontWeight[weight] : DEFAULT_FONT_WEIGHT;

        const component = ui.UiText.Create(prism, text, fontStyle, fontWeight);

        this._apply(component, properties);

        return component;
    }

    static apply(component, properties) {
        super.apply(component, properties);
        super._throwIfNotInstanceOf(component, ui.UiText);

        this.validate(properties);
    
        const { children, style, weight } = properties;

        super._setText(component, children);

        if (style) {
            const fontStyle = FontStyle[style];
            const fontWeight = weight ? FontWeight[weight] : DEFAULT_FONT_WEIGHT;
    
            component.setFont(fontStyle, fontWeight);
        }
      
        this._apply(component, properties);
    }

    static _apply(component, properties) {
        const setters = this._propertySetter();
        for (const key of Object.keys(setters)) {
            const value = properties[key];
            if (super._hasValue(value)) {
                const descriptor = setters[key];
                if (descriptor.componentMember) {
                    component[descriptor.setter](value);
                } else {
                    descriptor.setter(component, value, properties);
                }
            }
        } 
    }

    static validate(properties) {
        super.validate(properties);

        const { children, style, weight, size, textColor, charSpacing, lineSpacing } = properties;

        super._throwIfNotText(children);

        super._throwIfNotArray(textColor, 'vec4');

        super._throwIfNotTypeOf(size, 'number');
        super._throwIfNotTypeOf(charSpacing, 'number');
        super._throwIfNotTypeOf(lineSpacing, 'number');

        let message = `The provided font style ${style} is not a valid value`;
        super._throwIfPredicateFails(style, message, validator.validateFontStyle);

        message = `The provided font weight ${weight} is not a valid value`;
        super._throwIfPredicateFails(weight, message, validator.validateFontWeight);        
    }
}
