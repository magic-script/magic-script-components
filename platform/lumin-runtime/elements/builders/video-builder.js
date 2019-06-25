// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ViewMode as luminViewMode } from 'lumin';

import { QuadBuilder } from './quad-builder.js';

import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { ViewMode } from '../../types/view-mode.js';

const DEFAULT_FRAME_WIDTH = 512;
const DEFAULT_FRAME_HEIGHT = 512;
const DEFAULT_VOLUME = 1.0;

export class VideoBuilder extends QuadBuilder {
    constructor(){
        super();

        this._propertyDescriptors['looping'] = new PrimitiveTypeProperty('looping', 'setLooping', false, 'boolean');
        this._propertyDescriptors['timedTextPath'] = new PrimitiveTypeProperty('timedTextPath', 'setTimedTextPath', true, 'string');
        this._propertyDescriptors['videoPath'] = new PrimitiveTypeProperty('videoPath', 'setVideoPath', true, 'string');
        this._propertyDescriptors['videoUri'] = new PrimitiveTypeProperty('videoUri', 'setVideoUri', true, 'string');
        this._propertyDescriptors['volume'] = new PrimitiveTypeProperty('volume', 'setVolume', true, 'number');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        let { width, height, volume, viewMode, videoPath } = properties;

        width  = width  === undefined ? DEFAULT_FRAME_WIDTH  : width;
        height = height === undefined ? DEFAULT_FRAME_HEIGHT : height;
        volume = volume === undefined ? DEFAULT_VOLUME       : volume;

        viewMode = viewMode === undefined
            ? luminViewMode.kFullArea
            : ViewMode[viewMode];

        const element = prism.createVideoNode(width, height);
        const statusCode = element.setVideoPath(videoPath);

        element.setViewMode(viewMode);
        element.setVolume(volume);

        const unapplied = this.excludeProperties(properties, ['width', 'height', 'volume', 'viewMode', 'videoPath']);
        this.update(element, undefined, unapplied);

        return element;
    }

    update(element, oldProperties, newProperties) {
        // this.throwIfNotInstanceOf(element, RenderNode);
        super.update(element, oldProperties, newProperties);

        this.setLooping(element, oldProperties, newProperties)
    }

    // validate(element, oldProperties, newProperties) {
    //     super.validate(element, oldProperties, newProperties);

    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.width, 'number');
    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.roundness, 'number');
    // }

    setLooping(element, oldProperties, newProperties) {
        const looping = newProperties.looping;
        if ( looping !== undefined ) {
            element.setLooping(looping ? 1 : 0);
        }
    }
}