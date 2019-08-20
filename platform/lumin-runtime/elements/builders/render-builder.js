// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { TransformBuilder } from './transform-builder.js';

import { ArrayProperty } from '../properties/array-property.js';
import { ClassProperty } from '../properties/class-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { RenderingLayer } from '../../types/rendering-layer.js';
import { ShaderType } from '../../types/shader-type.js'

export class RenderBuilder extends TransformBuilder {

    constructor(){
        super();

        this._propertyDescriptors['bloomStrength'] = new PrimitiveTypeProperty('bloomStrength', 'setBloomStrength', true, 'number');
        this._propertyDescriptors['color'] = new ArrayProperty('color', 'setColor', true, 'vec4');
        this._propertyDescriptors['drmContent'] = new PrimitiveTypeProperty('drmContent', 'setDrmContent', true, 'boolean');
        this._propertyDescriptors['shader'] = new EnumProperty('shader', 'setShader', true, ShaderType, 'ShaderType');
        this._propertyDescriptors['renderingLayer'] = new EnumProperty('renderingLayer', 'setRenderingLayer', true, RenderingLayer, 'RenderingLayer');

        this._addRenderStateProperty('backFaceCulls', 'setBackFaceCulls');
        this._addRenderStateProperty('blooms', 'setBlooms');
        this._addRenderStateProperty('castsShadows', 'setCastsShadows');
        this._addRenderStateProperty('frontFaceCulls', 'setFrontFaceCulls');
        this._addRenderStateProperty('isOpaque', 'setIsOpaque');
        this._addRenderStateProperty('isUI', 'setIsUI');
        this._addRenderStateProperty('pushesStencil', 'setPushesStencil');
        this._addRenderStateProperty('readsClip', 'setReadsClip');
        this._addRenderStateProperty('readsDepth', 'setReadsDepth');
        this._addRenderStateProperty('receivesLight', 'setReceivesLight');
        this._addRenderStateProperty('receivesShadows', 'setReceivesShadows');
        this._addRenderStateProperty('writesColor', 'setWritesColor');
        this._addRenderStateProperty('writesDepth', 'setWritesDepth');
        this._addRenderStateProperty('writesStencil', 'setWritesStencil');
    }

    _addRenderStateProperty(propertyName, setFunction) {
        this._propertyDescriptors[propertyName] = this._getClassProperty(propertyName, setFunction);
        this[setFunction] = this._getSetFunction(propertyName, setFunction);
    }

    _getClassProperty(propertyName, setFunction) {
        const properties = [
            new PrimitiveTypeProperty('on', undefined, undefined, 'boolean'),
            new PrimitiveTypeProperty('renderStateIndex', undefined, undefined, 'number')
        ];

        return new ClassProperty(propertyName, setFunction, false, properties);
    }

    _getSetFunction(propertyName, setFunction) {
        const builder = this;

        return function(element, oldProperties, newProperties) {
            const on = newProperties[propertyName].on;

            if (on !== undefined) {
                const renderStateIndex = builder.getPropertyValue('renderStateIndex', BigInt(-1), newProperties[propertyName]);
                element[setFunction](on, renderStateIndex);
            }
        }
    }
}