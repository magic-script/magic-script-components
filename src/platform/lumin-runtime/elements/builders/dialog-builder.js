// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { EnumProperty } from '../properties/enum-property.js';

import { DialogType } from '../../types/dialog-type.js';
import { DialogLayout } from '../../types/dialog-layout.js';
import { EclipseButtonType } from '../../types/eclipse-button-type.js';
import { SystemIcons } from '../../types/system-icons.js';

export class DialogBuilder extends UiNodeBuilder {
    constructor() {
        super();

        // DialogContent

        this._propertyDescriptors['buttonType'] = new EnumProperty('buttonType', 'setButtonType', true, EclipseButtonType, 'EclipseButtonType');
        this._propertyDescriptors['cancelText'] = new PrimitiveTypeProperty('cancelText', 'setCancelText', true, 'string');
        this._propertyDescriptors['cancelIcon'] = new EnumProperty('cancelIcon', 'setCancelIcon', true, SystemIcons, 'SystemIcon');
        this._propertyDescriptors['confirmText'] = new PrimitiveTypeProperty('confirmText', 'setConfirmText', true, 'string');
        this._propertyDescriptors['confirmIcon'] = new EnumProperty('confirmIcon', 'setConfirmIcon', true, SystemIcons, 'SystemIcon');
        this._propertyDescriptors['expireTime'] = new PrimitiveTypeProperty('expireTime', 'setExpireTime', true, 'number');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        let { text, title, type, layout } = properties;

        if (text === undefined) {
            text = this._getText(properties.children);
        }

        type = type === undefined
            ? ui.DialogType.kDualAction
            : DialogType[type];

        layout = layout === undefined
            ? DialogLayout.kStandard
            : DialogLayout[layout];

        const element = title === undefined
            ? ui.UiTab.Create(prism, type, layout)
            : ui.UiTab.CreateEclipseTab(prism, title, text, null, type, layout);

        const unapplied = this.excludeProperties(properties, ['children', 'text', 'title', 'type', 'layout']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiButton);
    //     super.update(element, oldProperties, newProperties);
    // }
}
