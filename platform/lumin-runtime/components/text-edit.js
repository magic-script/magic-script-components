import { ui } from 'lumin'

import { validator } from '../utilities/validator.js';
import { Alignment } from '../types/alignment.js';
import { FontStyle, FontWeight } from '../types/font-style.js';
import { ScrollBarVisibility } from '../types/scroll-bar-visibility.js';
import { TextEntryMode } from '../types/text-entry-mode.js';

import { TextContainer } from './text-container.js';

const DEFAULT_FONT_STYLE = FontStyle['normal'];
const DEFAULT_FONT_WEIGHT = FontWeight['regular'];

export class TextEdit extends TextContainer {
    static _propertySetter() {
        return {
            // style:               { componentMember: false, setter: this._setFont                             },
            // weight,
            lineSpacing:         { componentMember: true, setter: 'setLineSpacing'             },
            textColor:           { componentMember: true, setter: 'setTextColor'               },
            padding:             { componentMember: true, setter: 'setTextPadding'             },
            hint:                { componentMember: true, setter: 'setHintText'                },
            hintColor:           { componentMember: true, setter: 'setHintTextColor'           },
            multiline:           { componentMember: true, setter: 'setMultilineMode'           },
            password:            { componentMember: true, setter: 'setPasswordMode'            },
            scrolling:           { componentMember: true, setter: 'setScrollingEnabled'        }
            // selectedBegin,
            // selectedEnd
        }
    }

    static create(prism, properties) {
        super._throwIfInvalidPrism(prism);
        this.validate(properties)

        const { children, width, height } = properties;

        const text = children ? super._getText(children) : ' ';
        console.log('text-edit children & text');
        console.log(children);
        console.log(text);

        const component = ui.UiTextEdit.Create(prism, text, width, height);

        this._apply(component, properties);

        return component;        
    }

    static apply(component, properties) {
        super.apply(component, properties);
        super._throwIfNotInstanceOf(component, this._component);

        this.validate(properties);

        const { children, height, width } = properties;

        super._setText(component, children);

        if (width || height) {
            if (width === undefined) {
                width = component.getSize()[0];
            }

            if (height === undefined) {
                height = component.getSize()[1];
            }

            component.setSize([height, width]);
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

        const { style, weight, textAlignment, textEntry, scrollBarVisibility, selectedBegin, selectedEnd } = properties;

        if (style) {
            const fontStyle = FontStyle[style];
            const fontWeight = weight ? FontWeight[weight] : DEFAULT_FONT_WEIGHT;
    
            component.setFont(fontStyle, fontWeight);
        }

        if (textAlignment) {
            component.setTextAlignment(Alignment[textAlignment]);
        }

        if (textEntry) {
            component.setTextEntryMode(TextEntryMode[textEntry]);
        }

        if (scrollBarVisibility) {
            component.setScrollBarVisibilityMode(ScrollBarVisibility[scrollBarVisibility]);
        }

        if (selectedBegin || selectedEnd) {
            if (selectedBegin === undefined) {
                selectedBegin = 0;
            }

            if (selectedEnd === undefined) {
                const text = component.getText();
                selectedEnd = text ? text.length : 0;
            }

            if (selectedBegin <= selectedEnd) {
                component.setSelectedText(selectedBegin, selectedEnd);
            }
        }
    }

    static validate(properties) {
        super.validate(properties);

        super._throwIfNotText(properties.children);

        super._throwIfNotTypeOf(properties.hint, 'string');
        super._throwIfNotTypeOf(properties.height, 'number');
        super._throwIfNotTypeOf(properties.width, 'number');
        super._throwIfNotTypeOf(properties.lineSpacing, 'number');
        super._throwIfNotTypeOf(properties.selectedBegin, 'number');
        super._throwIfNotTypeOf(properties.selectedEnd, 'number');
        super._throwIfNotTypeOf(properties.scrolling, 'boolean');
        super._throwIfNotTypeOf(properties.multiline, 'boolean');
        super._throwIfNotTypeOf(properties.password, 'boolean');

        super._throwIfNotArray(properties.textColor, 'vec4');
        super._throwIfNotArray(properties.hintColor, 'vec4');
        super._throwIfNotArray(properties.padding, 'vec4');

        
        const { style, weight, textEntry, scrollBarVisibility } = properties;

        let message = `Provided textEntry mode ${textEntry} is not a valid value`
        super._throwIfPredicateFails(textEntry, message, validator.validateTextEntryMode);

        message = `Provided font style ${style} is not a valid value`
        super._throwIfPredicateFails(style, message, validator.validateFontStyle);

        message = `Provided font weight ${weight} is not a valid value`
        super._throwIfPredicateFails(weight, message, validator.validateFontWeight);

        message = `Provided scroll bar visibility ${scrollBarVisibility} is not a valid value`
        super._throwIfPredicateFails(scrollBarVisibility, message, validator.validateScrollBarVisibility);
    }    
}    