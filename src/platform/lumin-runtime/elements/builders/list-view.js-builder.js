import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class ListViewBuilder extends UiNodeBuilder {
    constructor(){
        super();
        
        // CursorEdgeScrollMode
        // DefaultItemAlignment
        // DefaultItemPadding
        // ItemAlignment
        // ItemPadding
        // Orientation
        // ScrollBar
        // ScrollBarVisibilityMode
        // ScrollingEnabled
        // ScrollSpeed
        // ScrollValue
        // SkipInvisibleItems
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