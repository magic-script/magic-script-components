export class ElementAdapter {
    constructor(name, properties) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Property "name" expects value of type string');
        }

        // properties = { name: property }
        this._properties = {};
        this._element = undefined;
    }

    get Name() {
        return this._name;
    }

    get Element() {
        return this._element;
    }

    _addProperty(property) {
        if (this._properties[property.Name] === undefined) {
            this._properties[property.Name] = property;
        } else {
            throw new Error(`Property ${property.Name} has been already defined`);
        }
    }

    _excludeProperties(properties, exclude) {
        const subset = Object.assign({}, properties);
        exclude.forEach(name => {
            if (properties.hasOwnProperty(name) !== undefined) {
                delete subset[name]
            }
        });
        return subset;
    }

    _throwIfInvalidPrism(prism) {
        if ( !validator.validatePrism(prism) ) {
            throw new TypeError('Parameter "prism" is not instance of Prism');
        }
    }

    addChild(child) {
        this._element.addChild(child.Element);
    }

    removeChild(child) {
        this._element.removeChild(child);
    }

    update(oldProperties, newProperties) {
        this.validate(oldProperties, newProperties);
        this.apply(oldProperties, newProperties);
    }

    validate(oldProperties, newProperties) {
        throw new Error('ElementAdapter.update() is not implemented !');
    }

    apply(oldProperties, newProperties) {
        throw new Error('ElementAdapter.update() is not implemented !');
    }
}