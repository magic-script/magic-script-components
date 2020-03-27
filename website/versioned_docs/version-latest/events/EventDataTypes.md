---
id: eventDataTypes
title: Event Data Types
---

## Event data types and their properties

ServerEvent extends EventData

- PrismId
- isInputEvent

InputEventData extends ServerEvent

- DeviceId
- EventSource
- EventType

EyeTrackingEventData extends ServerEvent

- EyeTrackingFixationConfidence
- EyeTrackingFixationPosition
- EyeTrackingLeftEyeBlinkState
- EyeTrackingLeftEyeConfidence
- EyeTrackingLeftEyePosition
- EyeTrackingLeftEyeRotation
- EyeTrackingRightEyeBlinkState
- EyeTrackingRightEyeConfidence
- EyeTrackingRightEyePosition
- EyeTrackingRightEyeRotation
- RemainingTimeAtUncomfortableDepth

NodeEventData extends EventData

- AABB
- AnchorPosition
- ChildCount
- CurrentPrismTransform
- CurrentWorldTransform
- CursorHoverState
- LocalAABB
- LocalTransform
- Name
- NodeId
- ParentedBoneName
- PrismId

TransformNodeEventData extends NodeEventData

- LocalPosition
- LocalRotation
- LocalScale
- PrismPosition
- WorldPosition

UiEventData extends TransformNodeEventData (**in development**)

- Alignment
- Enabled
- EventPassThrough
- EventSoundID
- GravityWellEnabled
- GravityWellProperties
- RenderingLaye
