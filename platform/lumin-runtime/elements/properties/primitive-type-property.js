import { PropertyDescriptor } from './property-descriptor.js';

export class PrimitiveTypeProperty extends PropertyDescriptor {
    constructor(name, setterName, isNativeSetter, typeName) {
        super(name, setterName, isNativeSetter)

        this._typeName = typeName;
    }

    validate(value) {
        this.throwIfNotTypeOf(value, this._typeName);
        return true;
    }
}