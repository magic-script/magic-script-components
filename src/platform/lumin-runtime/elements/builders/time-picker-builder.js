// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';
import { Side } from '../../types/side.js';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { TimeFormatConverter } from '../../types/time-format.js';
import { validator } from '../../utilities/validator.js';

const DEFAULT_TIME_FORMAT = 'hh:mm:ss';

export class TimePickerBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['color'] = new ArrayProperty('color', 'setColor', true, 'vec4');
        this._propertyDescriptors['time'] = new PrimitiveTypeProperty('time', 'setTime', false, 'string');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        let { labelSide, defaultTime } = properties;

        const label = this.getPropertyValue('label', '', properties);

        labelSide = labelSide === undefined
            ? ui.Side.kTop
            : Side[labelSide];

        if (defaultTime === undefined) {
            defaultTime = new ui.Time();
        } else if (typeof defaultTime === 'string') {
            defaultTime = TimeFormatConverter[DEFAULT_TIME_FORMAT].toTime(defaultTime);
        }

        const element = ui.UiTimePicker.Create(prism, label, labelSide, DEFAULT_TIME_FORMAT, defaultTime);

        const unapplied = this.excludeProperties(properties, ['label', 'labelSide', 'defaultTime']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        const { label, labelSide, defaultTime } = newProperties;

        PropertyDescriptor.throwIfNotTypeOf(label, 'string');

        let message = `The provided icon ${labelSide} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(labelSide, message, validator.validateSide);

        // message = `The provided time format ${timeFormat} is not a valid value`;
        // PropertyDescriptor.throwIfPredicateFails(dateFormat, message, validator.validateDateFormat);

        PropertyDescriptor.throwIfNotTypeOf(defaultTime, 'string');
    }

    setTime(element, oldProperties, newProperties) {
        const time = TimeFormatConverter[DEFAULT_TIME_FORMAT].toTime(newProperties.time);
        element.setTime(time);
    }
}
