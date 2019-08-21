// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { SpatialSoundSendLevels, SpatialSoundDistanceProperties, SpatialSoundRadiationProperties } from 'lumin';

import { TransformBuilder } from './transform-builder.js';
import { ArrayProperty } from '../properties/array-property.js'
import { ClassProperty } from '../properties/class-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { AudioAction } from '../../types/audio-action.js';

export class AudioBuilder extends TransformBuilder {
    constructor(){
        super();

        this._propertyDescriptors['action'] = new EnumProperty('action', 'setAction', false, AudioAction, 'AudioAction');
        this._propertyDescriptors['soundLooping'] = new PrimitiveTypeProperty('soundLooping', 'setSoundLooping', true, 'boolean');
        this._propertyDescriptors['soundMute'] = new PrimitiveTypeProperty('soundMute', 'setSoundMute', true, 'boolean');
        this._propertyDescriptors['soundPitch'] = new PrimitiveTypeProperty('soundPitch', 'setSoundPitch', true, 'number');
        this._propertyDescriptors['soundVolumeLinear'] = new PrimitiveTypeProperty('soundVolumeLinear', 'setSoundVolumeLinear', true, 'number');
        this._propertyDescriptors['spatialSoundEnable'] = new PrimitiveTypeProperty('spatialSoundEnable', 'setSpatialSoundEnable', true, 'boolean');
        this._propertyDescriptors['streamedFileOffset'] = new PrimitiveTypeProperty('streamedFileOffset', 'setStreamedFileOffset', true, 'number');

        // SpatialSoundDirection
        const spatialSoundDirectionProperties = [
            new PrimitiveTypeProperty('channel', undefined, undefined, 'number'),
            new ArrayProperty('channelDirection', undefined, undefined, 'quat')
        ];

        this._propertyDescriptors['spatialSoundDirection'] = new ClassProperty('spatialSoundDirection', 'setSpatialSoundDirection', false, spatialSoundDirectionProperties);

        // SpatialSoundDirectSendLevels
        const spatialSoundDirectSendLevelsProperties = [
            new PrimitiveTypeProperty('channel', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('gain', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('gainHf', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('gainLf', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('gainMf', undefined, undefined, 'number')
        ];

        this._propertyDescriptors['spatialSoundDirectSendLevels'] = new ClassProperty('spatialSpatialSoundDirectSendLevels', 'setSpatialSoundDirectSendLevels', false, spatialSoundDirectSendLevelsProperties);

        // SpatialSoundDistanceProperties
        const spatialSoundDistanceProperties = [
            new PrimitiveTypeProperty('channel', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('minDistance', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('maxDistance', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('rolloffFactor', undefined, undefined, 'number')
        ];

        this._propertyDescriptors['spatialSoundDistance'] = new ClassProperty('spatialSoundDistance', 'setSpatialSoundDistance', false, spatialSoundDistanceProperties);


        // SpatialSoundPosition
        const spatialSoundPositionProperties = [
            new PrimitiveTypeProperty('channel', undefined, undefined, 'number'),
            new ArrayProperty('channelPosition', undefined, undefined, 'vec3')
        ];

        this._propertyDescriptors['spatialSoundPosition'] = new ClassProperty('spatialSoundPosition', 'setSpatialSoundPosition', false, spatialSoundPositionProperties);

        // SpatialSoundRadiationProperties
        const spatialSoundRadiationProperties = [
            new PrimitiveTypeProperty('channel', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('innerAngle', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('outerAngle', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('outerGain', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('outerGainHf', undefined, undefined, 'number')
        ];

        this._propertyDescriptors['spatialSoundRadiation'] = new ClassProperty('spatialSoundRadiation', 'setSpatialSoundRadiation', false, spatialSoundRadiationProperties);

        // SpatialSoundRoomSendLevels
        const spatialSoundRoomSendLevelsProperties = [
            new PrimitiveTypeProperty('channel', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('gain', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('gainHf', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('gainLf', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('gainMf', undefined, undefined, 'number')
        ];

        this._propertyDescriptors['spatialSoundRoomSendLevels'] = new ClassProperty('spatialSoundRoomSendLevels', 'setSpatialSoundRoomSendLevels', false, spatialSoundRoomSendLevelsProperties);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        // Required properties
        const fileName = properties.fileName;

        this._throwIfNoFileName(fileName, 'Property "fileName" is required');

        // Optional properties
        const loadFile = this.getPropertyValue('loadFile', false, properties);
        const absolutePath = this.getPropertyValue('absolutePath', false, properties);
        const descriptor = this.getPropertyValue('descriptor', -1, properties);
        const basePath = this.getPropertyValue('basePath', null, properties);
        const autoDestroy = this.getPropertyValue('autoDestroy', false, properties);
        const dynamicDecode = this.getPropertyValue('dynamicDecode', false, properties);

        const resourceId = loadFile
            ? prism.createLoadedFileAudioResourceId(fileName, absolutePath, descriptor, basePath)
            : prism.createStreamedFileAudioResourceId(fileName, absolutePath, descriptor, basePath);

        this._throwIfNoAudioResource(resourceId, `Error ocurred while loading ${fileName} file`);

        const element = prism.createAudioNode();

        if (loadFile) {
            element.createSoundWithLoadedFile(resourceId, autoDestroy, dynamicDecode);
        } else {
            element.createSoundWithStreamedFile(resourceId, autoDestroy);
        }

        this.update(element, undefined, properties);

        return element;
    }

    _throwIfNoFileName(fileName, message) {
        if (fileName === undefined || fileName === null || fileName === '') {
            throw new Error(message);
        }
    }

    _throwIfNoAudioResource(id, message) {
        if (id === undefined || id === null || id === 0) {
            throw new Error(message);
        }
    }

    _getSpatialSoundSendLevels(gain, gainHf, gainLf, gainMf) {
        let channelSendlevels = undefined;

        if (   gain    !== undefined
            && gainHf  !== undefined
            && gainLf  !== undefined
            && gainMf  !== undefined ) {

            channelSendlevels = new SpatialSoundSendLevels();
            channelSendlevels.gain = gain;
            channelSendlevels.gainHf = gainHf;
            channelSendlevels.gainLf = gainLf;
            channelSendlevels.gainMf = gainMf;
        }

        return channelSendlevels;
    }

    setSpatialSoundDirection(element, oldProperties, newProperties) {
        const { channel, channelDirection } = newProperties.spatialSoundDirection;

        if (channel !== undefined && channelDirection !== undefined) {
            element(channel, channelDirection);
        }
    }

    setSpatialSoundDirectSendLevels(element, oldProperties, newProperties) {
        const { channel, gain, gainHf, gainLf, gainMf } = newProperties.spatialSoundDirectSendLevels;

        const channelSendlevels = this._getSpatialSoundSendLevels(gain, gainHf, gainLf, gainMf);

        if ( channel !== undefined && channelSendlevels !== undefined ) {
            element.setSpatialSoundDirectSendLevels(channel, channelSendlevels);
        }
    }

    setSpatialSoundDistance(element, oldProperties, newProperties) {
        const { channel, minDistance, maxDistance, rolloffFactor }  = newProperties.setSpatialSoundDistance

        if (  channel !== undefined
           && minDistance   !== undefined
           && maxDistance   !== undefined
           && rolloffFactor !== undefined) {

            const distanceProperties = new SpatialSoundDistanceProperties();
            distanceProperties.minDistance = minDistance;
            distanceProperties.maxDistance = maxDistance;
            distanceProperties.rolloffFactor = rolloffFactor;

            element.setSpatialSoundDistanceProperties(channel, distanceProperties);
        }
    }

    setSpatialSoundPosition(element, oldProperties, newProperties) {
         const { channel, channelPosition } = newProperties.spatialSoundPosition;

         if (channel !== undefined && channelPosition !== undefined) {
             element.setSpatialSoundPosition(channel, channelPosition);
         }
    }

    setSpatialSoundRadiation(element, oldProperties, newProperties) {
        const {channel, innerAngle, outerAngle, outerGain, outerGainHf} = newProperties.spatialSoundRadiation;

        if (  channel !== undefined
           && innerAngle   !== undefined
           && outerAngle   !== undefined
           && outerGain    !== undefined
           && outerGainHf  !== undefined ) {

            const radiationProperties	= new SpatialSoundRadiationProperties();
            radiationProperties.innerAngle  = innerAngle;
            radiationProperties.outerAngle  = outerAngle;
            radiationProperties.outerGain   = outerGain;
            radiationProperties.outerGainHf = outerGainHf;

            element.setSpatialSoundRadiationProperties(channel, radiationProperties);
        }
    }

    setSpatialSoundRoomSendLevels(element, oldProperties, newProperties) {
        const { channel, gain, gainHf, gainLf, gainMf } = newProperties.spatialSoundRoomSendLevels;

        const channelSendlevels = this._getSpatialSoundSendLevels(gain, gainHf, gainLf, gainMf);

        if ( channel !== undefined && channelSendlevels !== undefined ) {
            element.setSpatialSoundRoomSendLevels(channel, channelSendlevels);
        }
    }

    setAction(element, oldProperties, newProperties) {
        const action = newProperties.action;

        if (action === undefined) {
            return
        }

        if (AudioAction[action] === AudioAction.start) {
            element.startSound();
        } else if (AudioAction[action] === VideoAction.stop) {
            element.stopSound();
        } else if (AudioAction[action] === VideoAction.pause) {
            element.pauseSound();
        } else if (AudioAction[action] === VideoAction.resume) {
            element.resumeSound();
        }
    }
}