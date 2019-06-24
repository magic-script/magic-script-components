// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { MxsPrismController } from '../mxs-prism-controller.js';
import { TransformBuilder } from '../../elements/builders/transform-builder.js';
// import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

export class ControllerBuilder {
    constructor() {
        this._transformBuilder = new TransformBuilder();
        this._eventHandlerNames = ['onPreAttachPrism', 'onAttachPrism', 'onDetachPrism', 'onEvent', 'onUpdate'];
    }

    create(properties) {
        const controller = new MxsPrismController(properties);

        this.update(controller, undefined, properties)

        return controller;
    }

    validate(properties) {
        this._validateProperties(properties);
        this._validateEventHandlers(properties);
    }

    _validateProperties(properties) {
        const { eventSleepTime, retainSceneGraph } = properties;

        if (eventSleepTime != undefined && typeof eventSleepTime !== 'number') {
            throw new TypeError('controller expects property "eventSleepTime" to be number');
        }

        if (retainSceneGraph != undefined && typeof retainSceneGraph !== 'boolean') {
            throw new TypeError('controller expects property "retainSceneGraph" to be boolean');
        }
    }

    _validateEventHandlers(properties) {
        return this._eventHandlerNames.every(name => {
            const handler = properties[name];

            if (handler === undefined || typeof handler === 'function') {
                return true;
            } else {
                throw new TypeError(`Event handler ${name} should be a function`);
            }
        });
    }

    update(controller, oldProperties, newProperties) {
        this.validate(newProperties);

        this._updateProperties(controller, newProperties);
        this._updateEventHandlers(controller, newProperties);

        if (controller.getRoot() !== null) {
            this._updateRootNodeProperties(controller, newProperties);
        }
    }

    _updateProperties(controller, properties) {
        const { eventSleepTime, retainSceneGraph } = properties;

        if (eventSleepTime !== undefined) {
            controller.setEventSleepTime(eventSleepTime);
        }

        if (retainSceneGraph !== undefined) {
            controller.setRetainSceneGraph(retainSceneGraph);
        }
    }

    _updateEventHandlers(controller, properties) {
        controller.clearListeners();

        this._eventHandlerNames.forEach(name => {
            const handler = properties[name];

            if (handler !== undefined) {
                controller.addListener(name, handler);
            }
        });
    }

    _updateRootNodeProperties(controller, properties) {
        const root = controller.getRoot();
        console.log(JSON.stringify(root));
        this._transformBuilder.update(root, undefined, properties);
    }

    _updateRootNodeEventHandlers(controller, properties) {
        // TODO: update the root node event handlers if root exists
    }
}