import { ElementAdapter } from './element.adapter.js';

export class TransformNodeAdapter extends ElementAdapter {
    constructor(name, properties) {
        super(name, properties)

        this._defineProperties();

        this.validate(undefined, properties);
        this._element = this._createElement(properties);
    }

    _defineProperties() {
        // lumin.TransformNode properties
        this._addProperty( new PrimitiveTypeProperty('name', 'setName', true, 'string') );
        this._addProperty( new PrimitiveTypeProperty('parentedBoneName', 'setParentedBoneName', true, 'string') );
        this._addProperty( new PrimitiveTypeProperty('skipRaycast', 'setSkipRaycast', true, 'boolean') );
        this._addProperty( new PrimitiveTypeProperty('triggerable', 'setTriggerable', true, 'boolean') );
        this._addProperty( new PrimitiveTypeProperty('visible', 'setVisible', true, 'boolean') );
        this._addProperty( new PrimitiveTypeProperty('visibilityInherited', 'setVisibilityInherited', true, 'boolean') );
        this._addProperty( new ArrayProperty('anchorPosition', 'setAnchorPosition', true, 'vec3') );
        this._addProperty( new ArrayProperty('localPosition', 'setLocalPosition', true, 'vec3') );
        this._addProperty( new ArrayProperty('localRotation', 'setLocalRotation', true, 'quat') );
        this._addProperty( new ArrayProperty('localScale', 'setLocalScale', true, 'vec3') );
        this._addProperty( new ArrayProperty('localTransform', 'setLocalTransform', true, 'mat4') );
        this._addProperty( new EnumProperty('cursorHoverState', 'setCursorHoverState', true, CursorHoverState, 'CursorHoverState') );

        // TransformNodeAdapter properties
        this._addProperty( new ArrayProperty('offset', 'setOffset', false, 'vec3') );
    }

    _createElement(properties) {
        const prism = properties.prism;
        this._throwIfInvalidPrism(prism);

        const defaultTransform = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ];

        const localTransform = this.getPropertyValue('localTransform', defaultTransform, properties);

        const element = prism.createTransformNode(localTransform);

        const unapplied = this._excludeProperties(properties, ['localTransform']);

        this.apply(element, undefined, unapplied);
    }

    static getName() {
        return 'content';
    }
}