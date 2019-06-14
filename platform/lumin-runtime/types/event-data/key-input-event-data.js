// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { KeyInputEventData as _KeyInputEventData } from 'lumin';
import { InputEventData } from './input-event-data.js';
import { KeyCodes } from '../key-codes.js';
import { extractor } from '../../utilities/extractor.js';

export class KeyInputEventData extends InputEventData {
    get KeyCode() {
        return extractor.getKeyByValue(KeyCodes, this._nativeEvent.keyCode());
    }

    // TODO: Should this be available at all since it is platform specific ?
    get KeyVal() {
        return this._nativeEvent.keyVal();
    }

    get MetaKeys() {
        // TOOD: Find what metaKey is !
        return this._nativeEvent.metaKeys();
    }

    static isSupported(event) {
        return (event instanceof _KeyInputEventData);
    }
}
