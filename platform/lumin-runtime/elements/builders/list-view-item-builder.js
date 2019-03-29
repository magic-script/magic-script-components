import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

export class ListViewItemBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['backgroundColor'] = new ArrayProperty('backgroundColor', 'setBackgroundColor', true, 'vec3');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiListViewItem.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiListViewItem);
    //     super.update(element, oldProperties, newProperties);
    // }
}