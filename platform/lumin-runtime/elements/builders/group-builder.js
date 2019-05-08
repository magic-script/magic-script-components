// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';

export class GroupBuilder extends UiNodeBuilder {
    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiGroup.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }
}