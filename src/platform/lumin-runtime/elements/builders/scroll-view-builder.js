// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui, math } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { ClassProperty } from '../properties/class-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { ScrollBarVisibility } from '../../types/scroll-bar-visibility.js';
import { ScrollDirection } from '../../types/scroll-direction.js';

export class ScrollViewBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['scrollBarVisibility'] = new EnumProperty('scrollBarVisibility', 'setScrollBarVisibilityMode', true, ScrollBarVisibility, 'ScrollBarVisibility');
        this._propertyDescriptors['scrollDirection'] = new EnumProperty('scrollDirection', 'setScrollDirection', true, ScrollDirection, 'ScrollDirection');
        this._propertyDescriptors['scrollMask'] = new PrimitiveTypeProperty('scrollMask', 'setScrollMask', true, 'number');
        this._propertyDescriptors['scrollOffset'] = new ArrayProperty('scrollOffset', 'setScrollOffset', true, 'vec3')
        this._propertyDescriptors['scrollSpeed'] = new PrimitiveTypeProperty('scrollSpeed', 'setScrollSpeed', true, 'number');
        this._propertyDescriptors['scrollValue'] = new PrimitiveTypeProperty('scrollValue', 'setScrollValue', true, 'number');

        // ScrollBar
        // ScrollContent

        // ScrollBounds
        const scrollBoundsProperties = [
            new ArrayProperty('min', undefined, undefined, 'vec3'),
            new ArrayProperty('max', undefined, undefined, 'vec3')
        ];

        this._propertyDescriptors['scrollBounds'] = new ClassProperty('scrollBounds', 'setScrollBounds', false, scrollBoundsProperties);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiScrollView.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }

    setScrollBounds(element, oldProperties, newProperties) {
        const { min, max } = newProperties;

        if ( min !== undefined && max !== undefined ) {
            element.setScrollBounds(new math.AABB(min, max));
        }
    }
}