// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { input } from 'lumin';

/**
 * @exports EventType
 * @description Represents Magic-Script - Lumin Runtime EventType mapping.
 */
export const EventType = {
    'axis-value' : input.EventType.EVENT_AXIS_VALUE,
    'control-gesture' : input.EventType.EVENT_CONTROL_GESTURE,
    'control-touchpad' : input.EventType.EVENT_CONTROL_TOUCHPAD,
    'gesture-continue' : input.EventType.EVENT_GESTURE_CONTINUE,
    'gesture-end' : input.EventType.EVENT_GESTURE_END,
    'gesture-start' : input.EventType.EVENT_GESTURE_START,
    'key-down' : input.EventType.EVENT_KEY_DOWN,
    'key-up' : input.EventType.EVENT_KEY_UP,
    'key-long-down' : input.EventType.EVENT_KEY_LONG_DOWN,
    'key-long-up' : input.EventType.EVENT_KEY_LONG_UP,
    'plugged-in' : input.EventType.EVENT_PLUGGED_IN,
    'plugged-out' : input.EventType.EVENT_PLUGGED_OUT,
    'pose-3dof' : input.EventType.EVENT_POSE_3DOF,
    'pose-6dof' : input.EventType.EVENT_POSE_6DOF,
    'unknown' : input.EventType.EVENT_UNKNOWN,
    'voice' : input.EventType.EVENT_VOICE
}
