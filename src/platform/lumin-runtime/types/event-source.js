// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { input } from 'lumin';

/**
 * @exports EventSource
 * @description Represents Magic-Script - Lumin Runtime EventSource mapping.
 */
export const EventSource = {
    'battery' : input.EventSource.BATTERY,
    'ble-control' : input.EventSource.BLE_CONTROL,
    'capture-button' : input.EventSource.CAPTURE_BUTTON,
    'companion-app' : input.EventSource.COMPANION_APP,
    'control' : input.EventSource.CONTROL,
    'gesture' : input.EventSource.GESTURE,
    'headphone' : input.EventSource.HEADPHONE,
    'home-button' : input.EventSource.HOME_BUTTON,
    'keyboard' : input.EventSource.KEYBOARD,
    'power-button' : input.EventSource.POWER_BUTTON,
    'reality-button' : input.EventSource.REALITY_BUTTON,
    'voice' : input.EventSource.VOICE,
    'volume' : input.EventSource.VOLUME
}