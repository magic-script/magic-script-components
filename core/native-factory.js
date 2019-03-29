export class NativeFactory {
    constructor(mapping) {
        this._mapping = mapping;
    }

    createComponent(name) {
        throw new Error('NativeFactory.createComponent is not implemented');
    }
}