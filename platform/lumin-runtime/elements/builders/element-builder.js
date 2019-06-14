// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

export class ElementBuilder {
    constructor() {
        // { name: PropertyDescriptor }
        this._propertyDescriptors = {};
    }

    update(element, oldProperties, newProperties) {
        this._applyAction(newProperties, (value, descriptor) => {
            if (this._validateProperty(value, descriptor)) {
                this._setProperty(value, descriptor, element, oldProperties, newProperties);
            }
        });
    }

    apply(element, oldProperties, newProperties) {
        this._applyAction(newProperties, (value, descriptor) => {
            this._setProperty(value, descriptor, element, oldProperties, newProperties);
        });
    }

    validate(element, oldProperties, newProperties) {
        this._applyAction(newProperties, this._validateProperty);
    }

    _applyAction(properties, action){

        for (const name of Object.keys(properties)) {
            const descriptor = this._propertyDescriptors[name];
            if (descriptor !== undefined) {
                action(properties[name], descriptor);
            } else {
                console.log(`Property ${name} does not have a descriptor`);
            }
        }
    }

    _setProperty(value, descriptor, element, oldProperties, newProperties) {
        if (descriptor.IsNativeSetter) {
            if (typeof element[descriptor.SetterName] === 'function') {
                try {
                    element[descriptor.SetterName](descriptor.parse(value));
                } catch (error) {
                    throw new Error(`[Native.${descriptor.SetterName}]: ${error.name} - ${error.message}\n${error.stack}`);
                }
            } else {
                throw new Error(`${JSON.stringify(element)} does not have method ${descriptor.SetterName}`);
            }
        } else {
            try {
                this[descriptor.SetterName](element, oldProperties, newProperties);
            } catch (error) {
                throw new Error(`[Builder.${descriptor.SetterName}]: ${error.name} - ${error.message}\n${error.stack}`);
            }
        }
    }

    _validateProperty(value, descriptor) {
        if ( descriptor.validate(value) ) {
            return true;
        } else {
            console.log(`Property ${descriptor.Name} does not have a valid value: ${value}`);
            return false;
        }
    }

    throwIfNotInstanceOf(element, ...expectedTypes) {
        if ( !expectedTypes.some(instanceType => element instanceof instanceType)){
            throw new TypeError(`Component is not a instance of the required type ${expectedTypes.toString()}`);
        }
    }

    getPropertyValue(name, defaultValue, properties) {
        const  value = properties[name];
        return value !== undefined ? value : defaultValue;
    }
}