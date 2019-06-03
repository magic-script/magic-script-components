// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { InputEventData } from './input-event-data.js';
import { KeyCodes } from '../key-codes.js';
import { extractor } from '../../utilities/extractor.js';

export class KeyInputEventData extends InputEventData {
    get keyCode() {
        return extractor.getKeyByValue(KeyCodes, this._nativeEvent.keyCode());
    }

    // TODO: Should this be available at all since it is platform specific ?
    get keyVal() {
        return this._nativeEvent.keyVal();
    }

    get metaKeys() {
        // TOOD: Find what metaKey is !
        return this._nativeEvent.metaKeys();
    }
}
