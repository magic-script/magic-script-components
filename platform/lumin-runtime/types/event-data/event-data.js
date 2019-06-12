// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

export class EventData {
    constructor(nativeEvent) {
        this._nativeEvent = nativeEvent;
    }

    _addGetProperties(propertyNames) {
        propertyNames
            .filter(  name => this._nativeEvent[`get${name}`] === 'function')
            .forEach( name => {
                Object.defineProperty(this, name, {
                    enumerable: true,
                    get:  () => this._nativeEvent[getterName]()
                })
            });
    }
}