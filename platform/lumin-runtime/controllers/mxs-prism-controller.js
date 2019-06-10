// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { PrismController } from 'lumin';
import { TransformNodeBuilder } from '../elements/builders/transform-node-builder.js';

import { ControlPose3DofInputEventData } from '../types/event-data/control-pose-3dof-Input-event-data.js';
import { ControlPose6DofInputEventData } from '../types/event-data/control-pose-6dof-input-event-data.js';
import { ControlTouchPadInputEventData } from '../types/event-data/control-touch-pad-input-event-data.js';
import { EyeTrackingEventData } from '../types/event-data/eye-tracking-event-data.js';
import { GestureInputEventData } from '../types/event-data/gesture-input-event-data.js';
import { InputEventData } from '../types/event-data/input-event-data.js';
import { KeyInputEventData } from '../types/event-data/key-input-event-data.js';
import { SelectionEventData } from '../types/event-data/selection-event-data.js';
import { UiEventData } from '../types/event-data/ui-event-data.js';
import { VideoEventData } from '../types/event-data/video-event-data.js';

export class MxsPrismController extends PrismController {
    constructor(properties) {
        super(properties.name);

        this._children = [];

        this._initialProperties = properties;

        this._eventHandlers = {
            onPreAttachPrism: [],
            onAttachPrism: [],
            onDetachPrism: [],
            onEvent:[],
            onUpdate: []
        };
    }

    addChild(child) {
        const root = this.getRoot();
        if (root === undefined || root === null) {
            this._children.push(child);
        } else {
            root.addChild(child);
        }
    }

    addListener(eventName, eventHandler) {
        const handlers = this._eventHandlers[eventName];
        if (handlers !== undefined) {
            handlers.push(eventHandler);
        } else {
            throw TypeError(`Event ${eventName} is not supported by the controller`);
        }
    }

    removeListener(eventName, eventHandler) {
        const handlers = this._eventHandlers[eventName];
        if (handlers !== undefined) {
            const index = handlers.indexOf(eventHandler);
            handlers.splice(index, 1);
        } else {
            throw TypeError(`Event ${eventName} is not supported by the controller`);
        }
    }

    onPreAttachPrism(prism) {
        this._eventHandlers.onPreAttachPrism.forEach(handler => handler(prism));
    }

    onAttachPrism(prism) {
        const root = this.getRoot();

        if (this._initialProperties !== undefined) {
            const builder = new TransformNodeBuilder();
            builder.update(root, undefined, this._initialProperties);

            this._initialProperties = undefined;
        }

        if (this._children !== undefined) {
            this._children.forEach(child => root.addChild(child));
            this._children = undefined;
        }

        this._eventHandlers.onAttachPrism.forEach(handler => handler(prism));
    }

    onDetachPrism(prism) {
        this._eventHandlers.onDetachPrism.forEach(handler => handler(prism));
    }

    _getEventDataByEventType(eventData) {
        if (eventData instanceof lumin.ControlPose3DofInputEventData) {
            return new ControlPose3DofInputEventData(eventData);
        }
        if (eventData instanceof lumin.ControlPose6DofInputEventData) {
            return new ControlPose6DofInputEventData(eventData);
        }
        if (eventData instanceof lumin.ControlTouchPadInputEventData) {
            return new ControlTouchPadInputEventData(eventData);
        }
        if (eventData instanceof lumin.EyeTrackingEventData) {
            return new EyeTrackingEventData(eventData);
        }
        if (eventData instanceof lumin.GestureInputEventData) {
            return new GestureInputEventData(eventData);
        }
        if (eventData instanceof lumin.InputEventData) {
            return new InputEventData(eventData);
        }
        if (eventData instanceof lumin.KeyInputEventData) {
            return new KeyInputEventData(eventData);
        }
        if (eventData instanceof lumin.SelectionEventData) {
            return new SelectionEventData(eventData);
        }
        if (eventData instanceof lumin.ui.UiEventData) {
            return new UiEventData(eventData);
        }
        if (eventData instanceof lumin.VideoEventData) {
            return new VideoEventData(eventData);
        }

        return eventData;
    }

    onEvent(event) {
        const eventData = this._getEventDataByEventType(event);
        this._eventHandlers.onEvent.forEach(handler => handler(eventData));
        return false;
    }

    onUpdate(delta) {
        this._eventHandlers.onUpdate.forEach(handler => handler(delta));
    }
}