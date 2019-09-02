// Copyright (c) 2019 Magic Leap, Inc. All Rights Reservedimport { ui } from 'lumin';

import { Side } from '../../types/side.js';

import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PropertyDescriptor } from '../properties/property-descriptor.js';

import { DateFormatConverter } from '../../types/date-format.js';
import { validator } from '../../utilities/validator.js';

const DEFAULT_DATE_FORMAT = 'MM/DD/YYYY';

export class DatePickerBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['color'] = new ArrayProperty('color', 'setColor', true, 'vec4');
        this._propertyDescriptors['date'] = new PrimitiveTypeProperty('date', 'setDate', false, 'string');
    }

    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        this.validate(undefined, undefined, properties);

        let { labelSide, defaultDate } = properties;

        const label = this.getPropertyValue('label', '', properties);

        labelSide = labelSide === undefined
            ? labelSide = Side.kTop
            : Side[labelSide];

        if( defaultDate === undefined ) {
            defaultDate = new ui.Date();
        } else if (typeof defaultDate === 'string') {
            defaultDate = DateFormatConverter[DEFAULT_DATE_FORMAT].toDate(defaultDate);
        }

        const yearMin = this.getPropertyValue('yearMin', -1, properties);
        const yearMax = this.getPropertyValue('yearMax', -1, properties);

        const element = ui.UiDatePicker.Create(prism, label, labelSide, DEFAULT_DATE_FORMAT, defaultDate, yearMin, yearMax);

        const unapplied = this.excludeProperties(properties, ['label', 'labelSide', 'defaultDate', 'yearMin', 'yearMax']);

        this.apply(element, undefined, unapplied);

        return element;
    }

    // update(element, oldProperties, newProperties) {
    //     // this.throwIfNotInstanceOf(element, ui.UiImage);
    //     super.update(element, oldProperties, newProperties);
    // }

    validate(element, oldProperties, newProperties) {
        super.validate(element, oldProperties, newProperties);

        const { label, labelSide } = newProperties;

        PropertyDescriptor.throwIfNotTypeOf(label, 'string');

        let message = `The provided icon ${labelSide} is not a valid value`;
        PropertyDescriptor.throwIfPredicateFails(labelSide, message, validator.validateSide);

        // message = `The provided icon ${dateFormat} is not a valid value`;
        // PropertyDescriptor.throwIfPredicateFails(dateFormat, message, validator.validateDateFormat);

        PropertyDescriptor.throwIfNotTypeOf(defaultDate, 'string');
        PropertyDescriptor.throwIfNotTypeOf(yearMin, 'number');
        PropertyDescriptor.throwIfNotTypeOf(yearMax, 'number');
    }

    setDate(element, oldProperties, newProperties) {
        const date = DateFormatConverter[DEFAULT_DATE_FORMAT].toDate(newProperties.date);
        element.setDate(date);
    }
}
