import { ui } from 'lumin';

const ArrayLengthByType = {
    'vec2': 2,
    'vec3': 3,
    'vec4': 4,
    'quat': 4,
    'mat4': 4
}

export class TransformNode {
    static _propertySetter() {
        return {
            name:      { componentMember: true,  setter: 'setName'           },
            visible:   { componentMember: false, setter: 'setVisible'        },
            position:  { componentMember: true,  setter: 'setLocalPosition'  },
            rotation:  { componentMember: true,  setter: 'setLocalRotation'  },
            scale:     { componentMember: true,  setter: 'setLocalScale'     },
            transform: { componentMember: true,  setter: 'setLocalTransform' }
        }
    }

    static create() {
        throw new Error('TransformNode cannot be instantiated');
    }

    /**
     * @param node is lumin runtime TransformNode
     * @param properties = { name, visible, position, rotation, scale, transform }
     * where position, rotation, scale and transform are local
     */
    static apply(node, properties) {
        this._throwIfNotInstanceOf(node, ui.TransformNode);
        this.validate(properties);

        const setters = this._propertySetter();
        for (const key of Object.keys(setters)) {
            const value = properties[key];
            if (super._hasValue(value)) {
                const descriptor = setters[key];
                if (descriptor.componentMember) {
                    node[descriptor.setter](value);
                } else {
                    this[descriptor.setter](node, value, properties);
                }
            }
        } 
    }

    static _setVisible(node, value, properties) {
        // Propagate visibility to children by default
        node.setVisible(value, true);
    }

    /**
     * 
     * @param properties = { name, visible, position, rotation, scale, transform }
     * where position, rotation, scale and transform are local
     */
    static validate(properties) {
        this._throwIfNotTypeOf(properties.name, 'string');
        this._throwIfNotTypeOf(properties.visible, 'boolean');

        this._throwIfNotArray(properties.position, 'vec3');
        this._throwIfNotArray(properties.rotation, 'quat');
        this._throwIfNotArray(properties.scale, 'vec3');
        this._throwIfNotArray(properties.transform, 'mat4');
    }

    static _hasValue(property) {
        return (property !== undefined && property !== null);
    }

    static _throwIfNotTypeOf(property, expectedType) {
        if ( this._hasValue(property) && typeof property !== expectedType ) {
            throw new TypeError(`Parameter ${property} should be ${expectedType} value`);
        }
    }

    static _throwIfNotArray(property, arrayType) {
        if ( this._hasValue(property) && !(Array.isArray(property) && property.length === ArrayLengthByType[arrayType]) ) {
            throw new TypeError(`Parameter ${property} should be ${arrayType} value`);
        }
    }

    static _throwIfConditionFails(property, message, condition) {
        if ( this._hasValue(property) && !condition ) {
            throw new TypeError(message);
        }
    }

    static _throwIfPredicateFails(property, message, predicate) {
        if ( this._hasValue(property) && !predicate(property) ) {
            throw new TypeError(message);
        }
    }

    static _throwIfNotInstanceOf(component, ...expectedTypes) {
        console.log(expectedTypes);
        if ( !expectedTypes.some(instanceType => component instanceof instanceType)){
            throw new TypeError(`Component is not a ${expectedInstance} instance`);
        }
    }
}