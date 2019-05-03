// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { PrismController } from 'lumin';
import { TransformNodeBuilder } from '../elements/builders/transform-node-builder.js';

export class MxsPrismController extends PrismController {
    constructor(properties) {
        super(properties.name);

        this.rootChild;

        this.initialProperties = properties;

        this.eventHandlers = {
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
            if (this.rootChild === undefined) {
                this.rootChild = child;
            } else {
                this.rootChild.addChild(child);
            }
        } else {
            root.addChild(child);
        }
    }

    addListener(eventName, eventHandler) {
        const handlers = this.eventHandlers[eventName];
        if (handlers !== undefined) {
            handlers.push(eventHandler);
        } else {
            throw TypeError(`Event ${eventName} is not supported by the controller`);
        }
    }

    removeListener(eventName, eventHandler) {
        const handlers = this.eventHandlers[eventName];
        if (handlers !== undefined) {
            const index = handlers.indexOf(eventHandler);
            handlers.splice(index, 1);
        } else {
            throw TypeError(`Event ${eventName} is not supported by the controller`);
        }
    }

    onPreAttachPrism(prism) {
        this.eventHandlers.onPreAttachPrism.forEach(handler => handler(prism));
    }

    onAttachPrism(prism) {
        const root = this.getRoot();
        
        if (this.initialProperties !== undefined) {
            const builder = new TransformNodeBuilder();
            builder.update(root, undefined, this.initialProperties);

            this.initialProperties = undefined;            
        }

        if (this.rootChild !== undefined) {
            root.addChild(this.rootChild);
        }

        this.eventHandlers.onAttachPrism.forEach(handler => handler(prism));
    }

    onDetachPrism(prism) {
        this.eventHandlers.onDetachPrism.forEach(handler => handler(prism));
    }    

    onEvent(event) {
        this.eventHandlers.onEvent.forEach(handler => handler(event));
        return false;
    }
    
    onUpdate(delta) {
        this.eventHandlers.onUpdate.forEach(handler => handler(delta));
    }
}