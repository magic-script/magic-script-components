import { ui } from 'lumin';

import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

export class GridLayoutBuilder extends LayoutBuilder {
    constructor(){
        super();

        this._propertyDescriptors['columns'] = new PrimitiveTypeProperty('columns', 'setColumns', true, 'number');
        this._propertyDescriptors['rows'] = new PrimitiveTypeProperty('rows', 'setRows', true, 'number');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = ui.UiGridLayout.Create(prism, finalText, width, height, roundness);

        this.update(element, undefined, properties);

        return element;
    }
}