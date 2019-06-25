// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { TextChildrenProperty } from '../properties/text-children-property.js';

export class TextContainerBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['children'] = new TextChildrenProperty('children', 'setText', false);

        this._propertyDescriptors['text'] = new PrimitiveTypeProperty('text', 'setText', false, 'string');
        this._propertyDescriptors['textColor'] = new ArrayProperty('textColor', 'setTextColor', true, 'vec4');
        this._propertyDescriptors['textSize'] = new PrimitiveTypeProperty('textSize', 'setTextSize', true, 'number');
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiText, ui.UiButton, ui.UiTextEdit, ui.UiDropDownList, ui.UiToggle, ui.UiTab);
    //     super.update(element, oldProperties, newProperties);
    // }

    setText(element, oldProperties, newProperties) {
        let text = newProperties.text;

        if (text === undefined) {
            text = this._getText(newProperties.children);
        }

        element.setText(text);
    }

    _getText(children) {
        let text;

        if (Array.isArray(children)) {
            text = children.join('');
        } else if (typeof children === 'number') {
            text = children.toString();
        } else {
            text = children;
        }

        return text;
    }
}
