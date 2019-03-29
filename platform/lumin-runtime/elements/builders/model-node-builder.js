import { Desc2d } from 'lumin';
import { validator } from '../../utilities/validator.js';

import { RenderNodeBuilder } from './render-node-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { Alignment } from '../../types/alignment.js'

export class ModelNodeBuilder extends RenderNodeBuilder {
    constructor() {
        super();

        // AnimationPauseState
        // AnimationPlaybackSpeed
        // AnimationTime
        // ModelResource
        // Texture

        this._propertyDescriptors['animation'] = new PrimitiveTypeProperty('animation', 'setAnimation', false, 'string');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        console.log(properties);

        const {modelPath, materialPath, texturePath, textureName} = properties;
        
        prism.createMaterialResourceId(materialPath);

        const textureId = prism.createTextureResourceId(Desc2d.DEFAULT, texturePath);
        const modelResId = prism.createModelResourceId(modelPath, 1.0);
        const element = prism.createModelNode(modelResId);

        element.setTexture(textureName, 0, textureId)

        this.update(element, undefined, properties);
        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, RenderNode);
    //     super.update(element, oldProperties, newProperties);
    // }

    setAnimation(element, oldProperties, newProperties) {
        const modelResId = element.getModelResource();
        element.playAnimation(modelResId, newProperties.animation, false, 0);
    }
}