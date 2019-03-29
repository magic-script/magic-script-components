import { PropertyDescriptor } from './property-descriptor.js';

export class EnumProperty extends PropertyDescriptor {
    constructor(name, setterName, isNativeSetter, enumType, enumName) {
        super(name, setterName, isNativeSetter)

        this._enumType = enumType;
        this._enumName = enumName;
    }

    validate(value) {
        const message = `The provided value ${value} is not valid ${this._enumName} value`;
        this.throwIfConditionFails(value, message, this._enumType[value] !== undefined);
        return true;
    }
}
