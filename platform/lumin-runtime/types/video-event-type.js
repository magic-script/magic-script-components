// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { VideoEventType as luminVideoEventType } from 'lumin';

/**
 * @exports VideoEventType
 * @description Represents VideoEventType.
 */
export const VideoEventType = {
    'buffering-update': luminVideoEventType.kBufferingUpdate,
    'completion' : luminVideoEventType.kCompletion,
    'error' : luminVideoEventType.kError,
    'info' : luminVideoEventType.kInfo,
    'prepared' : luminVideoEventType.kPrepared,
    'seek-complete' : luminVideoEventType.kSeekComplete,
    'video-size-changed' : luminVideoEventType.kVideoSizeChanged
}