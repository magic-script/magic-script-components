import { ui } from 'lumin';
import { HorizontalTextAlignment } from '../../types/horizontal-text-alignment.js';
import { FontStyle, FontWeight } from '../../types/font-style.js';
import { validator } from '../../utilities/validator.js';

import { TextContainerBuilder } from './text-container-builder.js';
import { EnumProperty } from '../properties/enum-property.js';
import { TextChildrenProperty } from '../properties/text-children-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

const DEFAULT_FONT_STYLE = FontStyle['normal'];
const DEFAULT_FONT_WEIGHT = FontWeight['regular'];

export class PortalIconBuilder extends TextContainerBuilder {
    constructor(){
        super();

        // BackgroundModel
        // HoverScale
        // HoverZOffset
        // IconActivateAnimation
        // IconContextMenuAnimation
        // IconHoverAnimation
        // IconHoverPosition
        // IconIdleAnimation
        // IconModel
        // LabelDisplayMode

        // this._propertyDescriptors['textAlignment'] = new EnumProperty('textAlignment', 'setTextAlignment', true, HorizontalTextAlignment, 'HorizontalTextAlignment');
        // this._propertyDescriptors['charSpacing'] = new PrimitiveTypeProperty('iconSize', 'setCharacterSpacing', true, 'number');
        // this._propertyDescriptors['lineSpacing'] = new PrimitiveTypeProperty('iconColor', 'setLineSpacing', true, 'number');
        // this._propertyDescriptors['style'] = new EnumProperty('style', 'setFont', true, FontStyle, 'FontStyle');
        // this._propertyDescriptors['weight'] = new EnumProperty('weight', 'setFont', true, FontWeight, 'FontWeight');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);
        this.validate(undefined, undefined, properties);

        let { children, text } = properties;

        if (text === undefined) {
            text = this._getText(children);
        }

        const element = ui.UiPortalIcon.Create(prism, labelText, portalSizeopt);

        const unapplied = this.excludeProperties(properties, ['children', 'text']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiText);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        PropertyDescriptor.throwIfNotTypeOf(newProperties.text, 'string');
        TextChildrenProperty.throwIfNotText(newProperties.children);
    }
}
