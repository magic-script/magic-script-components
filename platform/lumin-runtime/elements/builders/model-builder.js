// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { Desc2d } from 'lumin';

import { RenderNodeBuilder } from './render-node-builder.js';

import { ClassProperty } from '../properties/class-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

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

        const {modelPath, materialPath, texturePath, textureName} = properties;

        prism.createMaterialResourceId(materialPath);

        const textureId = prism.createTextureResourceId(Desc2d.DEFAULT, texturePath);
        const modelId = prism.createModelResourceId(modelPath, 1.0);
        const element = prism.createModelNode(modelId);

        element.setTexture(textureName, 0, textureId)

        this.update(element, undefined, properties);
        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, RenderNode);
    //     super.update(element, oldProperties, newProperties);
    // }

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

    setTexture(element, oldProperties, newProperties) {
        if (newProperties.texture !== undefined) {
            const { textureId, textureSlot, materialName } = newProperties.texture;

            if (materialName === undefined) {
                console.log('Model.texture.materialName is required');
                return;
            }

            if (textureSlot === undefined) {
                console.log('Model.texture.textureSlot is required');
                return;
            }

            if (textureId === undefined) {
                console.log('Model.texture.textureId is required');
                return;
            }

            element.setTexture(materialName, textureSlot, textureId);
        }
    }
}
