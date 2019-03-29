import { ui } from 'lumin';
import { TextContainer } from './text-container.js';

export class Button extends TextContainer {
    static _propertySetter() {
        return {
            textSize:  { componentMember: true, setter: 'setTextSize'  },
            textColor: { componentMember: true, setter: 'setTextColor' },
            iconSize:  { componentMember: true, setter: 'setIconSize'  },
            iconColor: { componentMember: true, setter: 'setIconColor' }
        }
    }

    static create (prism, properties) {
        super._throwIfInvalidPrism(prism);

        this.validate(properties)

        const { children, width, height, roundness } = properties;
    
        // TODO: use setButtonModel in case the children are ui elements
        const text = super._getText(children);

        const component = ui.UiButton.Create(prism, text, width, height, roundness);

        this._apply(component, properties);

        return component;
    }

    static apply(component, properties) {
        super.apply(component, properties);
        super._throwIfNotInstanceOf(component, ui.UiButton);

        this.validate(properties);

        super._setText(component, properties.children);
    
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

        super._throwIfNotText(properties.children);

        super._throwIfNotTypeOf(properties.width, 'number');
        super._throwIfNotTypeOf(properties.height, 'number');
        super._throwIfNotTypeOf(properties.roundness, 'number');
        super._throwIfNotTypeOf(properties.textSize, 'number');

        super._throwIfNotArray(properties.textColor, 'vec4');
        super._throwIfNotArray(properties.iconColor, 'vec4');
        super._throwIfNotArray(properties.iconSize, 'vec2');
    }
}