import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';

export class GroupBuilder extends UiNodeBuilder {
    // constructor() {
    //     super();
    // }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiGroup.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiGroup);
    //     super.update(element, oldProperties, newProperties);
    // }
}