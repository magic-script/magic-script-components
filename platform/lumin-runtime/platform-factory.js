// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { LandscapeApp, ImmersiveApp, PrismController } from 'lumin';

import { NativeFactory } from '../../core/native-factory.js';
import { MxsLandscapeApp } from './mxs-landscape-app.js';

import { UiNodeEvents } from './types/ui-node-events.js';

export class PlatformFactory extends NativeFactory {
    constructor(componentMapping) {
        super(componentMapping);

        // { type, builder }
        this.elementBuilders = {};
        this.controllerBuilders = {};
        this.controllers = new WeakMap();
    }

    isController(element) {
        return this.controllers[element] !== undefined;
    }

    setComponentEvents(element, properties) {
        const eventHandlers = Object.keys(properties)
            .filter(key => key.length > 2 && key.startsWith('on'))
            .map(key => ({ name: key, handler: properties[key] }));

        for (const pair of eventHandlers) {
            const eventName = UiNodeEvents[pair.name];

            if (eventName !== undefined) { 
                if (typeof pair.handler === 'function') {
                    element[eventName](pair.handler);
                } else {
                    throw new TypeError(`The event handler for ${pair.name} is not a function`);                    
                }
            } else {
                throw new TypeError(`Event ${pair.name} is not recognized event`);
            }
        }
    }

    createElement(name, container, ...args) {
        if (typeof name !== 'string')
        {
            throw new Error('PlatformFactory.createElement expects "name" to be string');
        }

        if (this._mapping.elements[name] !== undefined) {
            return this._createElement(name, container, ...args)
        } else if (this._mapping.controllers[name] !== undefined) {
            return this._createController(name, container, ...args);
        } else {
            throw new Error(`Unknown tag: ${name}`);
        }
    }

    _createElement(name, container, ...args) {
        if (this.elementBuilders[name] === undefined) {
            const createBuilder = this._mapping.elements[name];
            this.elementBuilders[name] = createBuilder();
        }

        const prism = container.controller.getPrism();
        const element = this.elementBuilders[name].create(prism, ...args);

        // TODO: Move setComponentEvents to the builders !!!
        this.setComponentEvents(element, args[0]); // args = [props]

        return element;
    }

    _createController(name, container, ...args) {
        if (this.controllerBuilders[name] === undefined) {
            const createBuilder = this._mapping.controllers[name];
            this.controllerBuilders[name] = createBuilder();
        }

        const controller = this.controllerBuilders[name].create(...args)

        // Map the controller object with to the tag
        this.controllers[controller] = name;

        return controller;
    }

    updateElement(name, ...args) {
        if (typeof name !== 'string')
        {
            throw new Error('PlatformFactory.updateElement expects "name" to be string');
        }

        if (this._mapping.elements[name] !== undefined) {
            this.elementBuilders[name].update(...args);
        } else if (this._mapping.controllers[name] !== undefined) {
            this.controllerBuilders[name].update(...args);
        } else {
            throw new Error(`Unknown tag: ${name}`);
        }
    }

    addChildElement(parent, child) {
        if (typeof child === 'string') {
            parent.setText(child);
        } else if (typeof child === 'number') {
            parent.setText(child.toString());
        } else {
            if (this.isController(child)) {
                if ( !this.isController(parent) ) {
                    throw new Error('Adding controller to non-controller parent');
                }
                parent.addChildController(child);
            } else {
                parent.addChild(child);
            }
        }

        // TODO: Replace builders with proxies
        // this.elementBuilders[name].addChild(...args);
    }

    removeChildElement(parent, child) {
        if (typeof child === 'string' || typeof child === 'number') {
            parent.setText('');
        } else {
            if (this.isController(child) !== undefined) {
                if ( !this.isController(parent) ) {
                    throw new Error('Removing controller from non-controller parent');
                }
                parent.removeChildController(child);
            } else if (this.isController(parent) !== undefined) {
                parent.getRoot().removeChild(child);
            } else {
                parent.removeChild(child);
            }
        }
    }

    appendChildToContainer(container, child) {
        if (this.isController(child)){
            container.controller.addChildController(child);
        } else {
            container.controller.getRoot().addChild(child);
        }
    }

    removeChildFromContainer(container, child) {
        if (this.isController(child)) {
            container.controller.removeChildController(child);
        } else {
            container.controller.getRoot().removeChild(child);
        }
    }

    createApp(appComponent) {
        if (typeof appComponent !== 'object') {
            throw new TypeError('Invalid argument: PlatformFactory.createContainer expects "component" to be an object');
        }

        const appType = appComponent.props.type;

        let app;

        if (appType === 'landscape') {
            app = new MxsLandscapeApp(appComponent, 0.5);
        } else if (appType === 'immersive') {
            app = new ImmersiveApp(0.5);
            app.type = 'immersiveApp';  
        } else {
            throw new TypeError(`Invalid argument: Unknown app type: ${appType}`);
        }

        return app;
    }
}
