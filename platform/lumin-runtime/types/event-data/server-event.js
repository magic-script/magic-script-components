export default class ServerEvent {
    constructor(nativeEvent) {
        this._nativeEvent = nativeEvent;
    }

    get PrismId() {
        return this._nativeEvent.getPrismId();
    }

    get isInputEvent() {
        return this._nativeEvent.isInputEventType();
    }
}