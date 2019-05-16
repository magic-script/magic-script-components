// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ElementBuilder } from './element-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { CursorHoverState } from '../../types/cursor-hover-state.js';

import { validator } from '../../utilities/validator.js';

export class TransformNodeBuilder extends ElementBuilder {
    constructor(){
        super();

        this._propertyDescriptors['name'] = new PrimitiveTypeProperty('name', 'setName', true, 'string');
        this._propertyDescriptors['parentedBoneName'] = new PrimitiveTypeProperty('parentedBoneName', 'setParentedBoneName', true, 'string');
        this._propertyDescriptors['skipRaycast'] = new PrimitiveTypeProperty('skipRaycast', 'setSkipRaycast', true, 'boolean');
        this._propertyDescriptors['triggerable'] = new PrimitiveTypeProperty('triggerable', 'setTriggerable', true, 'boolean');
        this._propertyDescriptors['visible'] = new PrimitiveTypeProperty('visible', 'setVisible', true, 'boolean');
        this._propertyDescriptors['visibilityInherited'] = new PrimitiveTypeProperty('visibilityInherited', 'setVisibilityInherited', true, 'boolean');
        this._propertyDescriptors['anchorPosition'] = new ArrayProperty('anchorPosition', 'setAnchorPosition', true, 'vec3');
        this._propertyDescriptors['localPosition'] = new ArrayProperty('localPosition', 'setLocalPosition', true, 'vec3');
        this._propertyDescriptors['localRotation'] = new ArrayProperty('localRotation', 'setLocalRotation', true, 'quat');
        this._propertyDescriptors['localScale'] = new ArrayProperty('localScale', 'setLocalScale', true, 'vec3');
        this._propertyDescriptors['localTransform'] = new ArrayProperty('localTransform', 'setLocalTransform', true, 'mat4');
        this._propertyDescriptors['cursorHoverState'] = new EnumProperty('cursorHoverState', 'setCursorHoverState', true, CursorHoverState, 'CursorHoverState');

        this._propertyDescriptors['offset'] = new ArrayProperty('offset', 'setOffset', false, 'vec3');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const defaultTransform = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ];

        const localTransform = this.getPropertyValue('localTransform', defaultTransform, properties);

        const element = prism.createTransformNode(localTransform);

        const unapplied = this.excludeProperties(properties, ['localTransform']);

        this.apply(element, undefined, unapplied);

        // return element;
        return this._getProxy(element);
    }


    _getProxy(element) {
        const handler = {
            offset: undefined,
            set: function(target, property, value, receiver) {
                if (property === 'offset') {
                    // value should be vec3 type
                    if (Array.isArray(value) && value.length === 3) {
                        this.offset = value;
                    } else {
                        throw new TypeError(`offset value ${value} is not a vec3 type`);
                    }
                } else  {
                    return Reflect.set(...arguments);
                }
            },
            get: function(target, property, receiver) {
                if (property === 'offset') {
                    return this.offset;
                } else {
                    return Reflect.get(...arguments);
                }
            }
        };

        return new Proxy(element, handler);
    }

    excludeProperties(properties, exclude) {
        const subset = Object.assign({}, properties);
        exclude.forEach(name => {
            if (properties.hasOwnProperty(name) !== undefined) {
                delete subset[name]
            }
        });
        return subset;
    }

    throwIfInvalidPrism(prism) {
        if ( !validator.validatePrism(prism) ) {
            throw new TypeError('Parameter "prism" is not instance of Prism');
        }
    }
}