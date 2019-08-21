// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { PropertyDescriptor } from './property-descriptor.js';

export class ClassProperty extends PropertyDescriptor {
    constructor(name, setterName, isNativeSetter, properties) {
        super(name, setterName, isNativeSetter)

        this._properties = properties;
    }

    validate(value) {
        for (const property of this._properties) {
            property.validate( value[property.Name] );
        }

        return true;
    }
}