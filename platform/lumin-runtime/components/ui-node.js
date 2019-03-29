import { ui } from 'lumin';
import { validator } from '../utilities/validator.js';
import { TransformNode } from './transform-node.js';

export class UiNode extends TransformNode {
    static _propertySetter() {
        return {
            textSize:  { componentMember: true, setter: 'setTextSize'  },
            textColor: { componentMember: true, setter: 'setTextColor' },
            iconSize:  { componentMember: true, setter: 'setIconSize'  },
            iconColor: { componentMember: true, setter: 'setIconColor' }
        }
    }

    static _throwIfInvalidPrism(prism) {
        if ( !validator.validatePrism(prism) ) {
            throw new TypeError('Parameter "prism" is not instance of Prism');
        }
    }

    static create(prism, properties) {
        UiNode._throwIfInvalidPrism(prism);

        const node = ui.UiNode.Create(prism);

        UiNode._apply(node, properties);

        return node;
    }

    static apply(node, properties) {
        super.apply(node, properties);

        super._throwIfNotInstanceOf(node, ui.UiNode);

        this._apply(node, properties);
    }
    
    static _apply(node, properties) {
        this.validate(properties);

        const setters = this._propertySetter();
        for (const key of Object.keys(setters)) {
            const value = properties[key];
            if (super._hasValue(value)) {
                const descriptor = setters[key];
                if (descriptor.componentMember) {
                    node[descriptor.setter](value);
                } else {
                    descriptor.setter(node, value, properties);
                }
            }
        } 
    }

    static validate(properties) {
        super.validate(properties);

        const { enabled, alignment } = properties;

        super._throwIfNotTypeOf(enabled, 'boolean');

        const message = `The provided alignment ${alignment} is not a valid value`;
        super._throwIfPredicateFails(alignment, message, validator.validateAlignment);
    }
}
