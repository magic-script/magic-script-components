import { ui } from 'lumin'
import { UiNode } from './ui-node.js';

export class TextContainer extends UiNode {
    static create(prism, properties) {
        throw new Error('TextContainer cannot be instantiated');
    }

    static apply(component, properties) {
        super.apply(component, properties);       
        super._throwIfNotInstanceOf(component, ui.UiText, ui.UiButton);

        this.validate(properties);
        this._setText(properties.children);
    }

    static _setText(component, children) {
        if (children) {
            component.setText(this._getText(children));
        }
    }

    static _getText(children) {
        let text;

        if (Array.isArray(children)) {
            text = children.join('');
        } else if (typeof children === 'number') {
            text = children.toString();
        } else {
            text = children;
        }

        return text;
    }

    static validate(properties) {
        super.validate(properties);
        this._throwIfNotText(properties.children);
    }

    static _throwIfNotText(children) {
        const validateItem = (item) => {
            let valid = true;

            valid &= Array.isArray(item)
                ? item.every(item => validateItem(item))
                : typeof item === 'string' || typeof item === 'number';

            return valid;
        }
       
        if (super._hasValue(children) && !validateItem(children) ) {
            throw new TypeError('Children elements should be of type string or number ');
        }
    }
}
