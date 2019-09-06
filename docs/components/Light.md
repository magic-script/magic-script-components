---
id: light
title: Light
---

## Tag: `<Light>`

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name   | Type   | Description |
| :----- | :----- | :---------- |
| color  | vec4 | Sets the light color. |
| intensity | number | Sets the light intensity. |
| range | number | Sets the light range. |
| spotAngle | number | Sets the light spot angle (ignored if this is not a spot light). |
| type | string | Sets the light type. |
| castsShadows | boolean | Attempts to set the light's shadow casting status. Currently the system supports only one shadow casting light. In landscape mode this light is created by the system and shared by all apps. In immersive mode, the developer is responsible for setting the the shadow casting light. Only directional lights can cast shadows. If this function fails, the reason for the failure will appear in the log. |
| useHeadPose | _object_ | Sets the head pose status of the light. Calling this function and setting a_on to true will result in the light using the headpose world transform as it's own transform. |

### type options: [LightType](../types/LightType.md)

### useHeadPose
- on
- offset