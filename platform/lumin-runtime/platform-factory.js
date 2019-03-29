import { LandscapeApp, ImmersiveApp } from 'lumin';

import { NativeFactory } from '../../core/native-factory.js';
import { MxsLandscapeApp } from '../lumin-runtime/MxsLandscapeApp.js';

import { UiNodeEvents } from './types/ui-node-events.js';

export class PlatformFactory extends NativeFactory {
    constructor(componentMapping) {
        super(componentMapping);

        // { type, builder }
        this.elementBuilders = {};
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

    createComponent(name, ...args) {
      
        if (typeof name !== 'string')
        {
            throw new Error('PlatformFactory.createComponent expects "name" to be string');
        }
      
        if (this.elementBuilders[name] === undefined) {
            const createBuilder = this._mapping.components[name];
            
            if (createBuilder === undefined) {
                throw new Error(`Unknown component type: ${name}`);
            }

            this.elementBuilders[name] = createBuilder();
        } 

        const builder = this.elementBuilders[name];

        const element = builder.create(...args);

        // TODO: Move setComponentEvents to the builders !!!
        this.setComponentEvents(element, args[1]); // args = [prism, props]

        return element;
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
