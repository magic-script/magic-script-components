import { ElementBuilder } from './element-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { CursorHoverState } from '../../types/cursor-hover-state.js';

import { validator } from '../../utilities/validator.js';

export class WebGLBuilder extends ElementBuilder {
    constructor(){
        super();

        // TransformNode properties
        this._propertyDescriptors['name'] = new PrimitiveTypeProperty('name', 'setName', false, 'string');
        this._propertyDescriptors['parentedBoneName'] = new PrimitiveTypeProperty('parentedBoneName', 'setParentedBoneName', false, 'string');
        this._propertyDescriptors['skipRaycast'] = new PrimitiveTypeProperty('skipRaycast', 'setSkipRaycast', false, 'boolean');
        this._propertyDescriptors['triggerable'] = new PrimitiveTypeProperty('triggerable', 'setTriggerable', false, 'boolean');
        this._propertyDescriptors['visible'] = new PrimitiveTypeProperty('visible', 'setVisible', false, 'boolean');
        this._propertyDescriptors['visibilityInherited'] = new PrimitiveTypeProperty('visibilityInherited', 'setVisibilityInherited', false, 'boolean');
        this._propertyDescriptors['anchorPosition'] = new ArrayProperty('anchorPosition', 'setAnchorPosition', false, 'vec3');
        this._propertyDescriptors['localPosition'] = new ArrayProperty('localPosition', 'setLocalPosition', false, 'vec3');
        this._propertyDescriptors['localRotation'] = new ArrayProperty('localRotation', 'setLocalRotation', false, 'quat');
        this._propertyDescriptors['localScale'] = new ArrayProperty('localScale', 'setLocalScale', false, 'vec3');
        this._propertyDescriptors['localTransform'] = new ArrayProperty('localTransform', 'setLocalTransform', false, 'mat4');
        this._propertyDescriptors['cursorHoverState'] = new EnumProperty('cursorHoverState', 'setCursorHoverState', false, CursorHoverState, 'CursorHoverState');

        this._propertyDescriptors['offset'] = new ArrayProperty('offset', 'setOffset', false, 'vec3');

        // RenderNode properties
        this._propertyDescriptors['bloomStrength'] = new PrimitiveTypeProperty('bloomStrength', 'setBloomStrength', false, 'number');
        this._propertyDescriptors['color'] = new ArrayProperty('color', 'setColor', false, 'vec4');
        this._propertyDescriptors['drmContent'] = new PrimitiveTypeProperty('drmContent', 'setDrmContent', false, 'boolean');
        this._propertyDescriptors['shader'] = new EnumProperty('shader', 'setShader', false, ShaderType, 'ShaderType');
        this._propertyDescriptors['renderingLayer'] = new EnumProperty('renderingLayer', 'setRenderingLayer', false, RenderingLayer, 'RenderingLayer');

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

        // QuadNode properties
        this._propertyDescriptors['renderResourceId'] = new PrimitiveTypeProperty('renderResourceId', 'setRenderResource', false, 'number');
        this._propertyDescriptors['texCoords'] = new ArrayProperty('texCoords', 'setTexCoords', false, 'vec2');
        this._propertyDescriptors['viewMode'] = new EnumProperty('viewMode', 'setViewMode', false, ViewMode, 'ViewMode');
        this._propertyDescriptors['size'] = new ArrayProperty('size', 'setSize', false, 'vec2');

        // WebGLNode properties
        this._propertyDescriptors['width'] = new PrimitiveTypeProperty('width', 'setWidth', false, 'number');
        this._propertyDescriptors['height'] = new PrimitiveTypeProperty('height', 'setHeight', false, 'number');
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
                const renderStateIndex = builder.getPropertyValue('renderStateIndex', -1, newProperties[propertyName]);
                builder[setFunction](element, on, renderStateIndex);
            }
        }
    }

    create(prism, properties) {
        print("WebGLBuilder.create has not been implemented yet");
        return {};
    }

    validate(element, oldProperties, newProperties) {
        print("WebGLBuilder.validate has not been implemented yet");
    }

    update(element, oldProperties, newProperties) {
        print("WebGLBuilder.update has not been implemented yet");
    }

    setName(element, oldProperties, newProperties) {
        print("WebGLBuilder.setName has not been implemented yet");
    }

    setParentedBoneName(element, oldProperties, newProperties) {
        print("WebGLBuilder.setParentedBoneName has not been implemented yet");
    }

    setSkipRaycast(element, oldProperties, newProperties) {
        print("WebGLBuilder.setSkipRaycast has not been implemented yet");
    }

    setTriggerable(element, oldProperties, newProperties) {
        print("WebGLBuilder.setTriggerable has not been implemented yet");
    }

    setVisible(element, oldProperties, newProperties) {
        print("WebGLBuilder.setVisible has not been implemented yet");
    }

    setVisibilityInherited(element, oldProperties, newProperties) {
        print("WebGLBuilder.setVisibilityInherited has not been implemented yet");
    }

    setAnchorPosition(element, oldProperties, newProperties) {
        print("WebGLBuilder.setAnchorPosition has not been implemented yet");
    }

    setLocalPosition(element, oldProperties, newProperties) {
        print("WebGLBuilder.setLocalPosition has not been implemented yet");
    }

    setLocalRotation(element, oldProperties, newProperties) {
        print("WebGLBuilder.setLocalRotation has not been implemented yet");
    }

    setLocalScale(element, oldProperties, newProperties) {
        print("WebGLBuilder.setLocalScale has not been implemented yet");
    }

    setLocalTransform(element, oldProperties, newProperties) {
        print("WebGLBuilder.setLocalTransform has not been implemented yet");
    }

    setCursorHoverState(element, oldProperties, newProperties) {
        print("WebGLBuilder.setCursorHoverState has not been implemented yet");
    }

    setOffset(element, oldProperties, newProperties) {
        const offset = newProperties.offset;
        if (offset !== undefined) {
            Object.defineProperty(element, 'offset', {
                enumerable: true,
                writable: true,
                configurable: false,
                value: offset
            });
        }
    }

    setBloomStrength(element, oldProperties, newProperties) {
        print("WebGLBuilder.setBloomStrength has not been implemented yet");
    }

    setColor(element, oldProperties, newProperties) {
        print("WebGLBuilder.setColor has not been implemented yet");
    }

    setDrmContent(element, oldProperties, newProperties) {
        print("WebGLBuilder.setDrmContent has not been implemented yet");
    }

    setShader(element, oldProperties, newProperties) {
        print("WebGLBuilder.setShader has not been implemented yet");
    }

    setRenderingLayer(element, oldProperties, newProperties) {
        print("WebGLBuilder.setRenderingLayer has not been implemented yet");
    }

    setBackFaceCulls(element, on, renderStateIndex) {
        print("WebGLBuilder.setBackFaceCulls has not been implemented yet");
    }

    setBlooms(element, on, renderStateIndex) {
        print("WebGLBuilder.setBlooms has not been implemented yet");
    }

    setCastsShadows(element, on, renderStateIndex) {
        print("WebGLBuilder.setCastsShadows has not been implemented yet");
    }

    setFrontFaceCulls(element, on, renderStateIndex) {
        print("WebGLBuilder.setFrontFaceCulls has not been implemented yet");
    }

    setIsOpaque(element, on, renderStateIndex) {
        print("WebGLBuilder.setIsOpaque has not been implemented yet");
    }

    setIsUI(element, on, renderStateIndex) {
        print("WebGLBuilder.setIsUI has not been implemented yet");
    }

    setPushesStencil(element, on, renderStateIndex) {
        print("WebGLBuilder.setPushesStencil has not been implemented yet");
    }

    setReadsClip(element, on, renderStateIndex) {
        print("WebGLBuilder.setReadsClip has not been implemented yet");
    }

    setReadsDepth(element, on, renderStateIndex) {
        print("WebGLBuilder.setReadsDepth has not been implemented yet");
    }

    setReceivesLight(element, on, renderStateIndex) {
        print("WebGLBuilder.setReceivesLight has not been implemented yet");
    }

    setReceivesShadows(element, on, renderStateIndex) {
        print("WebGLBuilder.setReceivesShadows has not been implemented yet");
    }

    setWritesColor(element, on, renderStateIndex) {
        print("WebGLBuilder.setWritesColor has not been implemented yet");
    }

    setWritesDepth(element, on, renderStateIndex) {
        print("WebGLBuilder.setWritesDepth has not been implemented yet");
    }

    setWritesStencil(element, on, renderStateIndex) {
        print("WebGLBuilder.setWritesStencil has not been implemented yet");
    }

    setWidth(element, oldProperties, newProperties) {
        print("WebGLBuilder.setWidth has not been implemented yet");
    }
    setHeight(element, oldProperties, newProperties) {
        print("WebGLBuilder.setHeight has not been implemented yet");
    }
}
