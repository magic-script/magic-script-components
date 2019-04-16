import { VideoNode } from 'lumin';
import { validator } from '../../utilities/validator.js';

import { QuadNodeBuilder } from './quad-node-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { Alignment } from '../../types/alignment.js';
import { ViewMode } from '../../types/view-mode.js';

const DEFAULT_FRAME_WIDTH = 512;
const DEFAULT_FRAME_HEIGHT = 512;
const DEFAULT_VOLUME = 1.0;

export class VideoBuilder extends QuadNodeBuilder {
    constructor(){
        super();

        // Looping
        // TimedTextPath
        // VideoPath
        // VideoUri
        // Volume

        // this._propertyDescriptors['enabled'] = new PrimitiveTypeProperty('enabled', 'setEnabled', true, 'boolean');
        // this._propertyDescriptors['alignment'] = new EnumProperty('alignment', 'setAlignment', true, Alignment, 'Alignment');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        let { width, height, volume, viewMode, videoPath } = properties;

        width  = width  === undefined ? DEFAULT_FRAME_WIDTH  : width;
        height = height === undefined ? DEFAULT_FRAME_HEIGHT : height;
        volume = volume === undefined ? DEFAULT_VOLUME       : volume;

        viewMode = viewMode === undefined
            ? lumin.ViewMode.kFullArea
            : ViewMode[viewMode];
        

        const element = prism.createVideoNode(width, height);

        element.setVideoPath(videoPath);
        element.setViewMode(ViewMode.kFullArea);
        element.setVolume(1.0);

        const unapplied = this.excludeProperties(properties, ['width', 'height', 'volume', 'viewMode', 'videoPath']);

        this.update(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, RenderNode);
    //     super.update(element, oldProperties, newProperties);
    // }

    // validate(element, oldProperties, newProperties) {
    //     super.validate(element, oldProperties, newProperties);

    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.width, 'number');
    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.height, 'number');
    //     // PropertyDescriptor.throwIfNotTypeOf(newProperties.roundness, 'number');
    // }
}