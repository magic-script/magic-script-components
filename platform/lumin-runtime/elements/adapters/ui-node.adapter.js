import { TransformNodeAdapter } from './transform-node.adapter.js';

export class UiNodeAdapter extends TransformNodeAdapter {
    constructor(name, properties) {
        super(name, properties);

        this._defineProperties();
        this._element = this._createElement(properties);
    }

    _defineProperties() {
        this._addProperty( new EnumProperty('alignment', 'setAlignment', true, Alignment, 'Alignment') );
        this._addProperty( new EnumProperty('activateResponse', 'setOnActivateResponse', false, FocusRequest, 'FocusRequest') );
        this._addProperty( new EnumProperty('renderingLayer', 'setRenderingLayer', true, RenderingLayer, 'RenderingLayer') );
        this._addProperty( new PrimitiveTypeProperty('enabled', 'setEnabled', true, 'boolean') );
        this._addProperty( new PrimitiveTypeProperty('eventPassThrough', 'setEventPassThrough', true, 'boolean') );
        this._addProperty( new PrimitiveTypeProperty('eventPassThroughChildren', 'setEventPassThroughChildren', true, 'boolean') );
        this._addProperty( new PrimitiveTypeProperty('gravityWellEnabled', 'setGravityWellEnabled', true, 'boolean') );

        // EventSoundID
        const eventSoundProperties = [
            new EnumProperty('soundEvent', undefined, undefined, SoundEvent, 'SoundEvent'),
            new PrimitiveTypeProperty('soundName', undefined, undefined, 'string')
        ];

        this._addProperty( new ClassProperty('eventSoundId', 'setEventSoundID', false, eventSoundProperties) );

        // GravityWellProperties setup
        const shapeProperties = [
            new ArrayProperty('size', undefined, undefined, 'vec2'),
            new ArrayProperty('offset', undefined, undefined, 'vec3'),
            new PrimitiveTypeProperty('roundness', undefined, undefined, 'number')
        ];

        const gravityWellProperties = [
            new ClassProperty('shape', undefined, undefined, shapeProperties),
            new EnumProperty('snap', undefined, undefined, GravityWellSnap, 'GravityWellSnap'),
            new PrimitiveTypeProperty('internalSnap', undefined, undefined, 'boolean')
        ];

        this._addProperty( new ClassProperty('gravityWellProperties', 'setGravityWellProperties', true, gravityWellProperties) );
    }

    _createElement(properties) {
        this._throwIfInvalidPrism(prism);

        const element = ui.UiNode.Create(prism);

        this.update(undefined, properties);

        return element;
    }

    static getName() {
        return 'content';
    }
}