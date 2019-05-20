import { UiNodeAdapter } from './ui-node.adapter.js';

export class UiScrollBarAdapter extends UiNodeAdapter {
    constructor(name, properties) {
        super(name, properties);

        this._defineProperties();
        this._element = this._createElement(properties);
    }

    _defineProperties() {
        // lumin.TransformNode properties
        this._addProperty( new PrimitiveTypeProperty('thumbSize', 'setThumbSize', true, 'number') );
        this._addProperty( new PrimitiveTypeProperty('thumbPosition', 'setThumbPosition', true, 'number') );

        // UiScrollBarAdapter properties
        this._addProperty( new EnumProperty('orientation', 'setOrientation', false, Orientation, 'Orientation') );
    }

    _createElement(properties) {
        this._throwIfInvalidPrism(prism);
        this.validate(undefined, properties);

        const width  = properties.width;
        const height = this.getPropertyValue('height', 0, properties);

        const element = ui.UiScrollBar.Create(prism, width, height);

        const unapplied = this.excludeProperties(properties, ['width', 'height']);

        this.apply(undefined, unapplied);

        return element;
    }

    static getName() {
        return 'scrollBar';
    }
}