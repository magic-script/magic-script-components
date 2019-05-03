export class NativeFactory {
    constructor(mapping) {
        this._mapping = mapping;
    }

    createElement(name) {
        throw new Error('NativeFactory.createElement is not implemented');
    }

    updateElement(name, ...args) {
        throw new Error('NativeFactory.updateElement is not implemented');
    }

    addChildElement(name, ...args) {
        throw new Error('NativeFactory.addChildElement is not implemented');
    }
}