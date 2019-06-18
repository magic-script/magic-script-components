// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { Desc2d } from 'lumin';

import { RenderNodeBuilder } from './render-node-builder.js';

import { ClassProperty } from '../properties/class-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { TextureType } from '../../types/texture-type.js';
import { validator } from '../../utilities/validator.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class ModelBuilder extends RenderNodeBuilder {
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

        const { modelPath, materialPath } = properties;

        prism.createMaterialResourceId(materialPath);

        const modelId = prism.createModelResourceId(modelPath, 1.0);
        const element = prism.createModelNode(modelId);

        const defaultTexture = {
            textureId: properties.defaultTextureId,
            textureSlot: properties.defaultTextureSlot,
            materialName: properties.defaultMaterialName
        };
        this._setTextures(prism, element, properties.texturePaths, defaultTexture)

        this.update(element, undefined, properties);
        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, RenderNode);
    //     super.update(element, oldProperties, newProperties);
    // }

    _setTextures(prism, element, texturePaths, defaultTexture) {
        if (Array.isArray(texturePaths)) {
            const textureIds = texturePaths.map(path => prism.createTextureResourceId(Desc2d.DEFAULT, path));

            const { materialName, textureSlot, textureId } = defaultTexture;

            if ( materialName === undefined) {
                console.log('Value for defaultMaterialName attribute was not provided');
                return;
            }

            if ( !validator.validateTextureType(textureSlot) ) {
                console.log(`Provided defaultTextureSlot value ${textureSlot} is not supported`);
                return;
            }

            if ( textureId >= textureIds.length ) {
                console.log(`defaultTextureId ${textureId} is out of available texture Ids range`);
                return;
            }

            console.log(`name: ${materialName}, slot: ${TextureType[textureSlot]}, id: ${textureIds[textureId]}`);
            element.setTexture(materialName, TextureType[textureSlot], textureIds[textureId]);
        }
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
