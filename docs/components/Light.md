---
id: light
title: Light
---
## Description
The Light component creates a light in your scene. The default light system supports one directional light, poised on the Headpose camera. This cannot be used in conjunction with other lights. Any light you add to the prism disables the default light. All light nodes default to a white color, but can be modified to use a different light color. Light intensity controls how bright the light is, which ranges from 0 to 1.0. All lights can optionally cast shadows.

## Example

```javascript
<Light />
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Element Properties

| Name         | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| :----------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color        | vec4     | Sets the light color.                                                                                                                                                                                                                                                                                                                                                                                        |
| intensity    | number   | Sets the light intensity.                                                                                                                                                                                                                                                                                                                                                                                    |
| range        | number   | Sets the light range.                                                                                                                                                                                                                                                                                                                                                                                        |
| spotAngle    | number   | Sets the light spot angle (ignored if this is not a spot light).                                                                                                                                                                                                                                                                                                                                             |
| type         | string   | Sets the light type.                                                                                                                                                                                                                                                                                                                                                                                         |
| castsShadows | boolean  | Attempts to set the light's shadow casting status. Currently the system supports only one shadow casting light. In landscape mode this light is created by the system and shared by all apps. In immersive mode, the developer is responsible for setting the shadow casting light. Only directional lights can cast shadows. If this function fails, the reason for the failure appears in the log. |
| useHeadPose  | _object_ | Sets the headpose status of the light. Calling this function and setting `a_on` to `true` results in the light using the headpose world transform as its own transform.                                                                                                                                                                                                                                    |

### type options: [LightType](../types/LightType.md)

### useHeadPose

- on
- offset
