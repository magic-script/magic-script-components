// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ServerEventType as luminServerEventType } from 'lumin';

/**
 * @exports ServerEventType
 * @description Represents ServerEventType.
 */
export const ServerEventType = {
    'selection-event': luminServerEventType.kSelectionEvent,
    'ray-cast-event': luminServerEventType.kRayCastEvent,
    'video-event': luminServerEventType.kVideoEvent,
    'video-subtitle-event': luminServerEventType.kVideoSubtitleEvent,
    'video-timed-text-event': luminServerEventType.kVideoTimedTextEvent,
    'sprite-animation-event': luminServerEventType.kSpriteAnimationEvent,
    'key-input-event': luminServerEventType.kKeyInputEvent,
    'gesture-input-event': luminServerEventType.kGestureInputEvent,
    'control-pose-3-dof-input-event': luminServerEventType.kControlPose3DofInputEvent,
    'control-pose-6-dof-input-event': luminServerEventType.kControlPose6DofInputEvent,
    'control-touch-pad-input-event': luminServerEventType.kControlTouchPadInputEvent,
    'transform-animation-event': luminServerEventType.kTransformAnimationEvent,
    'world-plane-data': luminServerEventType.kWorldPlaneData,
    'world-ray-hit': luminServerEventType.kWorldRayHit,
    'system-event': luminServerEventType.kSystemEvent,
    'physics-event': luminServerEventType.kPhysicsEvent,
    'particle-event': luminServerEventType.kParticleEvent,
    'audio-event': luminServerEventType.kAudioEvent,
    'eye-tracking-event': luminServerEventType.kEyeTrackingEvent,
    'animation-event': luminServerEventType.kAnimationEvent,
    'animation-custom-event': luminServerEventType.kAnimationCustomEvent,
    'animation-blend-setup-event': luminServerEventType.kAnimationBlendSetupEvent,
    'privilege-event': luminServerEventType.kPrivilegeEvent,
    'resource-event': luminServerEventType.kResourceEvent,
    'world-mesh-block-data': luminServerEventType.kWorldMeshBlockData
}
