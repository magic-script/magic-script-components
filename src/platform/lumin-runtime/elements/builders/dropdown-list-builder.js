// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { TextContainerBuilder } from './text-container-builder.js';

export class DropdownListBuilder extends TextContainerBuilder {
    constructor() {
        super();

    // ButtonModel
    // List

    // listFont - expects Id
    // const listFontProperties = [
    //     new PrimitiveTypeProperty('fontFile', undefined, undefined, 'string'),
    //     new PrimitiveTypeProperty('absolutePath', undefined, undefined, 'boolean'),
    //     new PrimitiveTypeProperty('tileSize', undefined, undefined, 'number'),
    //     new PrimitiveTypeProperty('minAlpha', undefined, undefined, 'number'),
    //     new EnumProperty('advanceDir', undefined, undefined, Orientation, 'Orientation'),
    //     new EnumProperty('flowDir', undefined, undefined, Orientation, 'Orientation'),
    //     new EnumProperty('quality', undefined, undefined, Orientation, 'Orientation')
    // ];
    // this._propertyDescriptors['listFont'] = new ClassProperty('listFont', 'setListFont', false, listFontProperties);

        this._propertyDescriptors['iconSize'] = new PrimitiveTypeProperty('iconSize', 'setIconSize', true, 'number');
        this._propertyDescriptors['iconColor'] = new ArrayProperty('iconColor', 'setIconColor', true, 'vec3');
        this._propertyDescriptors['listMaxHeight'] = new PrimitiveTypeProperty('listMaxHeight', 'setListMaxHeight', true, 'number');
        this._propertyDescriptors['listTextSize'] = new PrimitiveTypeProperty('listTextSize', 'setListTextSize', true, 'number');
        this._propertyDescriptors['maxCharacterLimit'] = new PrimitiveTypeProperty('maxCharacterLimit', 'setMaxCharacterLimit', true, 'number');
        this._propertyDescriptors['multiSelect'] = new PrimitiveTypeProperty('multiSelect', 'setMultiSelect', true, 'boolean');
        this._propertyDescriptors['showList'] = new PrimitiveTypeProperty('showList', 'showList', true, 'boolean');

        // Selected
        const selectedProperties = [
            new PrimitiveTypeProperty('id', undefined, undefined, 'number'),
            new PrimitiveTypeProperty('selected', undefined, undefined, 'boolean')
        ];

        this._propertyDescriptors['selected'] = new ClassProperty('selected', 'setSelected', false, selectedProperties);
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        const text = this._getText(properties.children);

        const element = ui.UiDropDownList.Create(prism, text);

        this.update(element, undefined, properties);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiGroup);
    //     super.update(element, oldProperties, newProperties);
    // }

    setSelected(element, oldProperties, newProperties) {
        const { id, selected } = newProperties;

        if ( id != undefined && selected !== undefined ) {
            element.setSelected(id, selected);
        }
    }
}