// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { ControlPose6DofInputEventData as _ControlPose6DofInputEventData } from 'lumin';
import { ControlPose3DofInputEventData } from './control-pose-3dof-Input-event-data';

export class ControlPose6DofInputEventData extends ControlPose3DofInputEventData {
    get SixDofPosition() {
        return this._nativeEvent.get6DofPosition();
    }

    static isSupported(event) {
        return (event instanceof _ControlPose6DofInputEventData);
    }
}