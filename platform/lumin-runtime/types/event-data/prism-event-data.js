// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { Prism as _Prism } from 'lumin';
import { EventData } from './event-data.js';
import { NodeEventData } from './node-event-data.js';
import { TransformNodeEventData } from './transform-node-event-data.js';

export class PrismEventData extends EventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'HandGestureHoverDistance', // -> number
            'HandGestureTouchDistance', // -> number
            'Position', // -> vec3
            'PrismId', // -> number
            // 'PrismType', // -> lumin.PrismType [kCamera, kWorld]
            'Rotation', // -> quat
            'Scale', // ->vec3
            'Size', // -> vec3
            'Transform', // mat4
            'UserAutoHapticGesture', // -> number
            'UserHandGesture' // -> number
        ]);
    }

    getNode(id) {
        const node = this._nativeEvent.getNode(id);
        return NodeEventData.isSupported(node)
            ? new NodeEventData(node)
            : undefined;
    }

    getRootNode(id) {
        const node = this._nativeEvent.getRootNode(id);
        return TransformNodeEventData.isSupported(node)
            ? new TransformNodeEventData(node)
            : undefined;
    }

    getResource(parameter) {
        if (typeof parameter === 'string') {
            return this._nativeEvent.getResource(parameter);
        } else if (typeof parameter === 'number') {
            // TODO: Return DTO of lumin.Resource
            return this._nativeEvent.getResource(parameter);
        } else {
            throw new TypeError('PrismEventData.getResource() expects string or number as input parameter');
        }
    }

    getSound(name) {
        // -> lumin.Sound
        const sound = this._nativeEvent.getSound();

        return {
            decode: sound.decode(),
            loop: sound.loop(),
            mute: sound.mute(),
            name: sound.name(),
            pitch: sound.pitch(),
            resource: sound.resource(),
            resources: sound.resources(),
            spatial: sound.spatial(),
            stream: sound.stream(),
            volume: sound.volume()
        };
    }

    isPrismSelected() {
        return this._nativeEvent.isPrismSelected();
    }

    static isSupported(object) {
        return (object instanceof _Prism);
    }
}