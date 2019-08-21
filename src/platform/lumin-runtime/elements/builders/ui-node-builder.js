// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TransformBuilder } from './transform-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { ClassProperty } from '../properties/class-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { Alignment } from '../../types/alignment.js'
import { GravityWellSnap } from '../../types/gravity-well-snap.js';
import { FocusRequest } from '../../types/focus-request.js';
import { RenderingLayer } from '../../types/rendering-layer.js';
import { SoundEvent } from '../../types/sound-event.js';

import { validator } from '../../utilities/validator.js';

export class UiNodeBuilder extends TransformBuilder {
    constructor(){
        super();

        // RenderingLayer - second setter

        this._propertyDescriptors['alignment'] = new EnumProperty('alignment', 'setAlignment', true, Alignment, 'Alignment');
        this._propertyDescriptors['activateResponse'] = new EnumProperty('activateResponse', 'setOnActivateResponse', false, FocusRequest, 'FocusRequest');
        this._propertyDescriptors['renderingLayer'] = new EnumProperty('renderingLayer', 'setRenderingLayer', true, RenderingLayer, 'RenderingLayer');
        this._propertyDescriptors['enabled'] = new PrimitiveTypeProperty('enabled', 'setEnabled', true, 'boolean');
        this._propertyDescriptors['eventPassThrough'] = new PrimitiveTypeProperty('eventPassThrough', 'setEventPassThrough', true, 'boolean');
        this._propertyDescriptors['eventPassThroughChildren'] = new PrimitiveTypeProperty('eventPassThroughChildren', 'setEventPassThroughChildren', true, 'boolean');
        this._propertyDescriptors['gravityWellEnabled'] = new PrimitiveTypeProperty('gravityWellEnabled', 'setGravityWellEnabled', true, 'boolean');

        // EventSoundID
        const eventSoundProperties = [
            new EnumProperty('soundEvent', undefined, undefined, SoundEvent, 'SoundEvent'),
            new PrimitiveTypeProperty('soundName', undefined, undefined, 'string')
        ];

        this._propertyDescriptors['eventSoundId'] = new ClassProperty('eventSoundId', 'setEventSoundID', false, eventSoundProperties);

        // GravityWellProperties setup
        const shapeProperties = [
            new ArrayProperty('size', undefined, undefined, 'vec2'),
            new ArrayProperty('offset', undefined, undefined, 'vec3'),
            new PrimitiveTypeProperty('roundness', undefined, undefined, 'number')
        ];

        const gravityWellProperties = [
            new ClassProperty('shape', undefined, undefined, shapeProperties),
            new EnumProperty('snap', undefined, undefined, GravityWellSnap, 'GravityWellSnap'),
            new PrimitiveTypeProperty('internalSnap', undefined, undefined, 'boolean')
        ];

        this._propertyDescriptors['gravityWellProperties'] = new ClassProperty('gravityWellProperties', 'setGravityWellProperties', true, gravityWellProperties);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiNode.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiNode);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        this.validateOnActivateResponse(element, oldProperties, newProperties);
    }

    validateOnActivateResponse(element, oldProperties, newProperties) {
        const focusRequest = newProperties.activateResponse;
        const message = `The provided onActivateResponse ${focusRequest} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(focusRequest, message, validator.validateFocusRequest);
    }

    setOnActivateResponse(element, oldProperties, newProperties) {
        const focusRequest = FocusRequest[newProperties.activateResponse];
        const onActivateResponse = new ui.OnActivateResponse(focusRequest);

        element.setOnActivateResponse(onActivateResponse);
    }

    setEventSoundID(element, oldProperties, newProperties) {
        const { soundEvent, soundName } = newProperties.eventSoundId;

        element.setEventSoundID(SoundEvent[soundEvent], soundName);
    }
}
