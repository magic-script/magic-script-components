import { ui } from 'lumin';

import { validator } from '../utilities/validator.js';
import { SystemIcons } from '../types/system-icons.js';
import { UiNode } from './ui-node.js';

export class Image extends UiNode {
    static _propertySetter() {
        return {
            color:  { componentMember: true, setter: 'setColor'    },
            opaque: { componentMember: true, setter: 'setIsOpaque' }
        }
    }

    static create(prism, properties) {
        super._throwIfInvalidPrism(prism);

        this.validate(properties);

        const { icon, filePath, resourceId, height, width } = properties;

        let component;        
        if (typeof icon === 'string') {
            component = ui.UiImage.Create(prism, SystemIcons[icon], height);
        } else if (resourceId) {
            component = ui.UiImage.Create(prism, resourceId, width, height);
        } else if (filePath) {
            component = ui.UiImage.Create(prism, filePath, width, height);
        }

        this._apply(component, properties);

        return component;
    }

    static apply(component, properties) {
        super.apply(component, properties);
        super._throwIfNotInstanceOf(component, ui.Image);

        this.validate(properties);
        
        const { height, width } = properties;

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
    }

    static validate(properties) {
        super.validate(properties);

        const message = `The provided icon ${properties.icon} is not a valid value`;
        super._throwIfPredicateFails(properties.icon, message, validator.validateSystemIcon)

        super._throwIfNotTypeOf(properties.resourceId, 'number');
        super._throwIfNotTypeOf(properties.filePath, 'string');
        super._throwIfNotTypeOf(properties.height, 'number');
        super._throwIfNotTypeOf(properties.width, 'number');
        super._throwIfNotTypeOf(properties.opaque, 'boolean');

        super._throwIfNotArray(properties.color, 'vec4');
    }
}
