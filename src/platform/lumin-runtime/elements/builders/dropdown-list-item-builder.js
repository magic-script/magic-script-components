// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { PropertyDescriptor } from '../properties/property-descriptor.js';

export class DropdownListItemBuilder {

    create(prism, properties) {

        const { id, label, children } = properties;

        const content = this._getValue(children);

        const element = content.isText
            ? new ui.DropDownListItem(content.value, [], id)
            : new ui.DropDownListItem(label, content.value, id);

        this.update(element, undefined, properties);

        return element;
    }

    validate(element, oldProperties, newProperties) {
        const { id, label, children, selected } = newProperties;

        if (PropertyDescriptor.hasValue(id)) {
            PropertyDescriptor.throwIfNotTypeOf(id, 'number');
        }

        if (PropertyDescriptor.hasValue(label)) {
            PropertyDescriptor.throwIfNotTypeOf(label, 'string');
        }

        if (PropertyDescriptor.hasValue(children)) {
            this._validateChildren(children);
        }

        if (PropertyDescriptor.hasValue(selected)) {
            PropertyDescriptor.throwIfNotTypeOf(selected, 'boolean');
        }
    }

    apply(element, oldProperties, newProperties) {
        element.setSelected(newProperties.selected);
    }

    update(element, oldProperties, newProperties) {
        // this.throwIfNotInstanceOf(element, ui.UiDropDownListItem);
        this.validate(element, oldProperties, newProperties);
        this.apply(element, oldProperties, newProperties);
    }

    _getValue(children) {
        if (Array.isArray(children)) {
            return children.every(child => typeof child === 'string' || typeof child === 'number')
                ? { isText: true,  value: children.join('') }
                : { isText: false, value: children };
        } else {
            return typeof children === 'number'
                ? { isText: true, value: children.toString() }
                : { isText: true, value: children };
        }
    }

    _validateChildren(children) {
        const message = 'Invalid DropDownListItem content, it should be string, number or DropDownListItem';
        const predicate = (item) => typeof item === 'string' || typeof item === 'number';

        if (Array.isArray(children)) {
            if ( children.some(child => !( child instanceof ui.DropDownListItem || predicate(child) ))) {
                throw new TypeError(message);
            }
        } else {
            if (predicate(children)) {
                throw new TypeError(message);
            }
        }
    }
}