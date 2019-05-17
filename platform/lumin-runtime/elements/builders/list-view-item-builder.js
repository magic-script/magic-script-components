// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';

import { Alignment } from '../../types/alignment.js';

export class ListViewItemBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['backgroundColor'] = new ArrayProperty('backgroundColor', 'setBackgroundColor', true, 'vec3');

        this._propertyDescriptors['padding'] = new ArrayProperty('padding', 'setPadding', false, 'vec4');
        this._propertyDescriptors['itemAlignment'] = new EnumProperty('itemAlignment', 'setItemAlignment', false, Alignment, 'Alignment');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiListViewItem.Create(prism);

        this.update(element, undefined, properties);

        // return element;
        return this._getProxy(element);
    }

    _getProxy(element) {
        const handler = {
            padding: undefined,
            itemAlignment: undefined,
            set: function(target, property, value, receiver) {
                if (property === 'padding') {
                    this.padding = value;
                } else if (property === 'itemAlignment') {
                    this.itemAlignment = value;
                } else  {
                    return Reflect.set(...arguments);
                }
            },
            get: function(target, property, receiver) {
                if (property === 'padding') {
                    return this.padding;
                } else if (property === 'itemAlignment') {
                    return this.itemAlignment;
                } else {
                    return Reflect.get(...arguments);
                }
            }
        };

        return new Proxy(element, handler);
    }

    setPadding(element, oldProperties, newProperties) {
        element.padding = newProperties.padding;
    }

    setItemAlignment(element, oldProperties, newProperties) {
        const itemAlignment = newProperties.itemAlignment;
        if (itemAlignment !== undefined) {
            element.itemAlignment = Alignment[itemAlignment];
        }
    }
}
