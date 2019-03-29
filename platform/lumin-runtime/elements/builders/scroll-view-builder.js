import { ui } from 'lumin';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

export class ScrollViewBuilder extends UiNodeBuilder {
    constructor(){
        super();
        
        // ScrollBar
        // ScrollBarVisibilityMode
        // ScrollBounds
        // ScrollContent
        // ScrollDirection
        // ScrollMask
        // ScrollOffset
        // ScrollSpeed
        // ScrollValue
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiScrollView.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiScrollView);
    //     super.update(element, oldProperties, newProperties);
    // }
}