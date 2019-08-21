// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { ClassProperty } from '../properties/class-property.js';
import { EnumProperty } from '../properties/enum-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { Alignment } from '../../types/alignment.js'
import { CursorEdgeScrollMode } from '../../types/cursor-edge-scroll-mode.js';
import { Orientation } from '../../types/orientation.js';
import { ScrollBarVisibility } from '../../types/scroll-bar-visibility.js';

export class ListViewBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['cursorEdgeScrollMode'] = new EnumProperty('cursorEdgeScrollMode', 'setCursorEdgeScrollMode', true, CursorEdgeScrollMode, 'CursorEdgeScrollMode');
        this._propertyDescriptors['defaultItemAlignment'] = new EnumProperty('defaultItemAlignment', 'setDefaultItemAlignment', true, Alignment, 'Alignment');
        this._propertyDescriptors['defaultItemPadding'] = new ArrayProperty('defaultItemPadding', 'setDefaultItemPadding', true, 'vec4');
        this._propertyDescriptors['defaultItemAlignment'] = new EnumProperty('orientation', 'setOrientation', true, Orientation, 'Orientation');

        // TODO: ScrollBar

        this._propertyDescriptors['scrollBarVisibility'] = new EnumProperty('scrollBarVisibility', 'setScrollBarVisibilityMode', true, ScrollBarVisibility, 'ScrollBarVisibility');
        this._propertyDescriptors['scrollingEnabled'] = new PrimitiveTypeProperty('scrollingEnabled', 'setScrollingEnabled', true, 'boolean');
        this._propertyDescriptors['scrollSpeed'] = new PrimitiveTypeProperty('scrollSpeed', 'setScrollSpeed', true, 'number');
        this._propertyDescriptors['scrollValue'] = new PrimitiveTypeProperty('scrollValue', 'setScrollValue', true, 'number');
        this._propertyDescriptors['scrollToItem'] = new PrimitiveTypeProperty('scrollToItem', 'setScrollToItem', true, 'number');
        this._propertyDescriptors['skipInvisibleItems'] = new PrimitiveTypeProperty('skipInvisibleItems', 'setSkipInvisibleItems', true, 'boolean');

        // itemAlignment
        const itemAlignmentProperties = [
            new PrimitiveTypeProperty('index', undefined, undefined, 'number'),
            new EnumProperty('alignment', undefined, undefined, Alignment, 'Alignment')
        ];

        this._propertyDescriptors['itemAlignment'] = new ClassProperty('itemAlignment', 'setItemAlignment', false, itemAlignmentProperties);

        // itemPadding
        const itemPaddingProperties = [
            new PrimitiveTypeProperty('index', undefined, undefined, 'number'),
            new ArrayProperty('padding', undefined, undefined, 'vec4')
        ];

        this._propertyDescriptors['itemPadding'] = new ClassProperty('itemPadding', 'setItemPadding', false, itemPaddingProperties);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const { width, height } = properties;

        const element = ui.UiListView.Create(prism, width, height);

        const unapplied = this.excludeProperties(properties, ['width', 'height']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiListView);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        this._validateSize(newProperties);
    }

    setItemAlignment(element, oldProperties, newProperties) {
        const { index, alignment } = newProperties.itemAlignment;
        element.setItemAlignment(index, alignment);
    }

    setItemPadding(element, oldProperties, newProperties) {
        const { index, padding } = newProperties.itemPadding;
        element.setItemPadding(index, padding);
    }

    _validateSize(properties) {
        PropertyDescriptor.throwIfNotTypeOf(properties.height, 'number');
        PropertyDescriptor.throwIfNotTypeOf(properties.width, 'number');
    }

    _setSize(element, properties) {
        const { height, width } = properties;

        if (width || height) {
            if (width === undefined) {
                width = element.getSize()[0];
            }

            if (height === undefined) {
                height = element.getSize()[1];
            }

            element.setSize([height, width]);
        }
    }
}