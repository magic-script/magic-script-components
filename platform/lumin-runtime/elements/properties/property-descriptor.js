// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

const ArrayLengthByType = {
    'vec2': 2,
    'vec3': 3,
    'vec4': 4,
    'quat': 4,
    'mat4': 4
}

export class PropertyDescriptor {
    constructor(name, setterName, isNativeSetter) {

        this.throwIfNotTypeOf(name, 'string');
        this._name = name;

        this.throwIfNotTypeOf(setterName, 'string');
        this._setterName = setterName;

        this.throwIfNotTypeOf(isNativeSetter, 'boolean');
        this._isNativeSetter = isNativeSetter;
    }

    get Name() {
        return this._name;
    }

    get SetterName() {
        return this._setterName;
    }

    get IsNativeSetter() {
        return this._isNativeSetter;
    }

    validate(value) {
        throw new Error('PropertyDescriptor.validate should be overridden');
    }

    hasValue(value) {
        PropertyDescriptor.hasValue(value);
    }

    static hasValue(value) {
        return (value !== undefined && value !== null);
    }

    throwIfNotTypeOf(value, expectedType) {
        PropertyDescriptor.throwIfNotTypeOf(value, expectedType);
    }

    static throwIfNotTypeOf(value, expectedType) {
        if ( this.hasValue(value) && typeof value !== expectedType ) {
            throw new TypeError(`Parameter ${value} should be ${expectedType} value`);
        }
    }

    throwIfNotArray(value, arrayType) {
        PropertyDescriptor.throwIfNotArray(value, arrayType);
    }

    static throwIfNotArray(value, arrayType) {
        if ( this.hasValue(value) ) {
            if ( !Array.isArray(value) ) {
                throw new TypeError(`Parameter ${value} should have value of type an array`);
            }

            if (this.hasValue(arrayType) && value.length !== ArrayLengthByType[arrayType]) {
                throw new TypeError(`Parameter ${JSON.stringify(value)} should be ${arrayType} value`);
            }
        }
    }

    throwIfConditionFails(value, message, condition) {
        PropertyDescriptor.throwIfConditionFails(value, message, condition);
    }

    static throwIfConditionFails(value, message, condition) {
        if ( this.hasValue(value) && !condition ) {
            throw new TypeError(message);
        }
    }

    throwIfPredicateFails(value, message, predicate) {
        PropertyDescriptor.throwIfPredicateFails(value, message, predicate);
    }

    static throwIfPredicateFails(value, message, predicate) {
        if ( this.hasValue(value) && !predicate(value) ) {
            throw new TypeError(message);
        }
    }
}