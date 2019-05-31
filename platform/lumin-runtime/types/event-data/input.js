import ServerEvent from './server-event.js';

export default class InputEventData extends ServerEvent {
    get DeviceId() {
        return this._nativeEvent.getDeviceId();
    }
    get EventSource() {
        return this._nativeEvent.getEventSource();
    }
    get EventType() {
        return this._nativeEvent.getEventType();
    }
}