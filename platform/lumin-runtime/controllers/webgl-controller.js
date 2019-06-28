// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { PrismController } from 'lumin';
import egl from 'egl';
import gl from 'gl';
import png from 'png';
import jpeg from 'jpeg';

import { QuadBuilder } from '../elements/builders/quad-builder.js';

import { ControlPose3DofInputEventData } from '../types/event-data/control-pose-3dof-Input-event-data.js';
import { ControlPose6DofInputEventData } from '../types/event-data/control-pose-6dof-input-event-data.js';
import { ControlTouchPadInputEventData } from '../types/event-data/control-touch-pad-input-event-data.js';
import { EyeTrackingEventData } from '../types/event-data/eye-tracking-event-data.js';
import { GestureInputEventData } from '../types/event-data/gesture-input-event-data.js';
import { InputEventData } from '../types/event-data/input-event-data.js';
import { KeyInputEventData } from '../types/event-data/key-input-event-data.js';
import { PrismEventData } from '../types/event-data/prism-event-data.js';
import { SelectionEventData } from '../types/event-data/selection-event-data.js';
import { UiEventData } from '../types/event-data/ui-event-data.js';
import { VideoEventData } from '../types/event-data/video-event-data.js';

export class WebGlController extends PrismController {
    constructor(properties) {
        super(properties.name);

        this._children = [];
        this._controllers = [];

        this._initialProperties = {...properties};

        this._eventHandlers = {
            onPreAttachPrism: [],
            onAttachPrism: [],
            onDetachPrism: [],
            onEvent:[],
            onUpdate: []
        };

        this._eventTypes = [
            ControlPose3DofInputEventData,
            ControlPose6DofInputEventData,
            ControlTouchPadInputEventData,
            EyeTrackingEventData,
            GestureInputEventData,
            InputEventData,
            KeyInputEventData,
            SelectionEventData,
            UiEventData,
            VideoEventData
        ];
    }

    addChild(child) {
        const root = this.getRoot();
        if (root === undefined || root === null) {
            this._children.push(child);
        } else {
            root.addChild(child);
        }
    }

    addChildController(controller) {
        // It will receive all onEvent callbacks received by this controller (the parent).
        // If a prism is already attached,
        // the child controller will also receive an onAttachPrism callback.
        const root = this.getRoot();
        if (root === undefined || root === null) {
            this._controllers.push(controller);
        } else {
            super.addChildController(controller);
            this.addChild(controller.getRoot());
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

    clearListeners() {
        this._eventHandlers = {
            onPreAttachPrism: [],
            onAttachPrism: [],
            onDetachPrism: [],
            onEvent:[],
            onUpdate: []
        };
    }

    _getQuadNode(prism) {
        const root = this.getRoot();
        const [width, height] = prism.getSize();

        // create planar resource
        const id = prism.createPlanarEGLResourceId(1024, 1024);
        const quad = this.quad = prism.createQuadNode(id);
        quad.setLocalScale([width, height, 1]);
        quad.setLocalPosition([-width / 2, -height / 2, 0]);
        quad.setBackFaceCulls(false);
        quad.setIsOpaque(false);

        root.addChild(quad);

        const resource = this.resource = prism.getResource(id);
        const surface = this.surface = resource.getEGLSurface();
        const context = this.context = resource.getEGLContext();
        egl.makeCurrent(surface, surface, context);

        this.start = Date.now();

        globalThis.requestAnimationFrame = callback => {
          this.cb = callback;
        };

        if (cb) {
            this.cb = cb;
        }
        // if (window.onload) { window.onload(); }

        return quad;
    }

    onPreAttachPrism(prism) {
        this._eventHandlers.onPreAttachPrism.forEach(handler => handler(new PrismEventData(prism)));
    }

    onAttachPrism(prism) {
        const quad = this._getQuadNode(prism);

        if (this._initialProperties !== undefined) {
            const builder = new QuadBuilder();
            builder.update(quad, undefined, this._initialProperties);

            this._initialProperties = undefined;
        }

        if (this._controllers !== undefined) {
            this._controllers.forEach(controller => {
                super.addChildController(controller);
                quad.addChild(controller.getRoot());
            });
            this._controllers = undefined;
        }

        if (this._children !== undefined) {
            this._children.forEach(child => quad.addChild(child));
            this._children = undefined;
        }

        this._eventHandlers.onAttachPrism.forEach(handler => handler(new PrismEventData(prism)));
    }

    onDetachPrism(prism) {
        this._eventHandlers.onDetachPrism.forEach(handler => handler(new PrismEventData(prism)));
    }

    _getEventDataByEventType(eventData) {

        const eventConstructor = this._eventTypes
            .find( eventType => eventType.isSupported(eventData) );

        return eventConstructor === undefined
            ? eventData
            : new eventConstructor(eventData);
    }

    onEvent(event) {
        const eventData = this._getEventDataByEventType(event);
        this._eventHandlers.onEvent.forEach(handler => handler(eventData));
        return false;
    }

    onUpdate(delta) {
        this._eventHandlers.onUpdate.forEach(handler => handler(delta));

        if (this.cb) {
            gl.clear(gl.COLOR_BUFFER_BIT);
            const fn = this.cb;
            this.cb = null;
            fn(Date.now() - this.start);
            egl.swapBuffers(this.surface);
        }
    }
}