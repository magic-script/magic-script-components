// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { Desc2d } from 'lumin';

import { RenderBuilder } from './render-builder.js';

import { ClassProperty } from '../properties/class-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { TextureType } from '../../types/texture-type.js';
import { validator } from '../../utilities/validator.js';

export class ModelBuilder extends RenderBuilder {
    constructor() {
        super();

        this._propertyDescriptors['animationPauseState'] = new PrimitiveTypeProperty('animationPauseState', 'setAnimationPauseState', true, 'boolean');
        this._propertyDescriptors['animationPlaybackSpeed'] = new PrimitiveTypeProperty('animationPlaybackSpeed', 'setAnimationPlaybackSpeed', true, 'number');
        this._propertyDescriptors['animationTime'] = new PrimitiveTypeProperty('animationTime', 'setAnimationTime', true, 'number');
        this._propertyDescriptors['modelResourceId'] = new PrimitiveTypeProperty('modelResourceId', 'setModelResourceId', true, 'number');

        // animation
        const animationProperties = [
            new PrimitiveTypeProperty('resourceId', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('name', undefined, undefined, 'string'),
            new PrimitiveTypeProperty('paused', undefined, undefined, 'boolean'),
            new PrimitiveTypeProperty('loops', undefined, undefined, 'number')
        ];

        this._propertyDescriptors['animation'] = new ClassProperty('animation', 'setAnimation', false, animationProperties);

        // texture
        const textureProperties = [
            new PrimitiveTypeProperty('textureId', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('textureSlot', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('materialName', undefined, undefined, 'string')
        ];

        this._propertyDescriptors['texture'] = new ClassProperty('texture', 'setTexture', false, textureProperties);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const { modelPath, materialPath, texturePaths } = properties;

        let textureIds;
        if (Array.isArray(texturePaths)) {
            textureIds = texturePaths.map(path => prism.createTextureResourceId(Desc2d.DEFAULT, path));
        }

        prism.createMaterialResourceId(materialPath);

        const modelId = prism.createModelResourceId(modelPath, 1.0);
        const element = prism.createModelNode(modelId);

        this._setDefaultTexture(element, textureIds, properties)

        this.update(element, undefined, properties);
        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, RenderNode);
    //     super.update(element, oldProperties, newProperties);
    // }

    _setDefaultTexture(element, textureIds, properties) {
        if (textureIds === undefined || textureIds.length === 0) {
            return;
        }

        if (  properties.defaultTextureIndex === undefined
           || typeof properties.defaultTextureIndex !== 'number') {
            return;
        }

        const defaultTextureIndex = properties.defaultTextureIndex;
        if ( defaultTextureIndex >= textureIds.length ) {
            console.log(`defaultTextureId ${defaultTextureIndex} is out of available texture Ids range`);
            return;
        }

        const defaultTextureSlot = properties.defaultTextureSlot;
        if ( !validator.validateTextureType(defaultTextureSlot) ) {
            console.log(`Provided defaultTextureSlot value ${defaultTextureSlot} is not supported`);
            return;
        }

        const defaultMaterialName = properties.defaultMaterialName;
        if ( defaultMaterialName === undefined) {
            console.log('Value for defaultMaterialName attribute was not provided');
            return;
        }

        element.setTexture(defaultMaterialName, TextureType[defaultTextureSlot], textureIds[defaultTextureIndex]);
    }

    setTexture(element, oldProperties, newProperties) {
        const texture = newProperties.texture;

        if (texture === undefined) {
            return;
        }

        const { materialName, textureSlot, textureId } = texture;

        if (materialName === undefined) {
            console.log('Model.texture.materialName is required');
            return;
        }

        if (textureSlot === undefined) {
            console.log('Model.texture.textureSlot is required');
            return;
        }

        if ( textureId === undefined) {
            console.log('Model.texture.textureId is required');
            return;
        }

        element.setTexture(materialName, textureSlot, textureId)
    }

    setAnimation(element, oldProperties, newProperties) {
        if (newProperties.animation !== undefined) {
            let { resourceId, name, paused, loops } = newProperties.animation;

            if (resourceId === undefined) {
                resourceId = element.getModelResource();
            }

            if (paused === undefined) {
                paused = false;
            }

            if (loops === undefined) {
                loops = 0;
            }

            if (name === undefined) {
                throw new TypeError(`Animation Name has not been provided.`);
            }

            element.playAnimation(resourceId, name, paused, loops);
        }
    }
}
