// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { PropertyDescriptor } from './property-descriptor.js';

export class TextChildrenProperty extends PropertyDescriptor {
    constructor(name, setterName, isNativeSetter) {
        super(name, setterName, isNativeSetter)
    }

    validate(value) {
        this.throwIfNotText(value);
        return true;
    }
    
    throwIfNotText(children) {
        TextChildrenProperty.throwIfNotText(children);
    }

    static throwIfNotText(children) {
        const validateItem = (item) => {
            let valid = true;

            valid &= Array.isArray(item)
                ? item.every(item => validateItem(item))
                : typeof item === 'string' || typeof item === 'number';

            return valid;
        }
       
        if (this.hasValue(children) && !validateItem(children) ) {
            throw new TypeError('Children elements should be of type string or number ');
        }
    }
}
