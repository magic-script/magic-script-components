// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { RayCastEventType as luminRayCastEventType } from 'lumin';

/**
 * @exports RayCastEventType
 * @description Represents RayCastEventType.
 */
export const RayCastEventType = {
    'invalid': luminRayCastEventType.kInvalid,
    'node-on-control-enter': luminRayCastEventType.kNodeOnControlEnter,
    'node-on-control-exit': luminRayCastEventType.kNodeOnControlExit,
    'node-on-control-move': luminRayCastEventType.kNodeOnControlMove,
    'node-on-cursor-enter': luminRayCastEventType.kNodeOnCursorEnter,
    'node-on-cursor-exit': luminRayCastEventType.kNodeOnCursorExit,
    'node-on-cursor-move': luminRayCastEventType.kNodeOnCursorMove,
    'node-on-head-enter': luminRayCastEventType.kNodeOnHeadEnter,
    'node-on-head-exit': luminRayCastEventType.kNodeOnHeadExit,
    'node-on-head-move': luminRayCastEventType.kNodeOnHeadMove,
    'volume-on-control-enter': luminRayCastEventType.kVolumeOnControlEnter,
    'volume-on-control-exit': luminRayCastEventType.kVolumeOnControlExit,
    'volume-on-control-move': luminRayCastEventType.kVolumeOnControlMove,
    'volume-on-head-enter': luminRayCastEventType.kVolumeOnHeadEnter,
    'volume-on-head-exit': luminRayCastEventType.kVolumeOnHeadExit,
    'volume-on-head-move': luminRayCastEventType.kVolumeOnHeadMove
}
