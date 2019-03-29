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
            if (descriptor) {
                action(properties[name], descriptor);
            } else {
                console.log(`Property ${name} does not have a descriptor`);
                // console.log(`Property ${name} is not recognized as property of ${element.getName()}`);
            }
        }
    }
    
    _setProperty(value, descriptor, element, oldProperties, newProperties) {
        if (descriptor.IsNativeSetter) {
            if (typeof element[descriptor.SetterName] === 'function') {
                element[descriptor.SetterName](value);
            } else {
                throw new Error(`${JSON.stringify(element)} does not have method ${descriptor.SetterName}`);
            }
        } else {
            this[descriptor.SetterName](element, oldProperties, newProperties);
        }
    }

    _validateProperty(value, descriptor) {
        if ( descriptor.validate(value) ) {
            return true;
        } else {
            console.log(`Property ${descriptor.Name} is not a valid value ${value}`);
            return false;
        }
    }

    throwIfNotInstanceOf(element, ...expectedTypes) {
        if ( !expectedTypes.some(instanceType => element instanceof instanceType)){
            throw new TypeError(`Component is not a instance of the required type ${expectedTypes.toString()}`);
        }
    }
}