// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { PrismController } from 'lumin';
import { TransformNodeBuilder } from '../elements/builders/transform-node-builder.js';

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

    onEvent(event) {
        this._eventHandlers.onEvent.forEach(handler => handler(event));
        return false;
    }
    
    onUpdate(delta) {
        this._eventHandlers.onUpdate.forEach(handler => handler(delta));
    }
}