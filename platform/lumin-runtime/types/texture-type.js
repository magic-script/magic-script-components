// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { render } from 'lumin';

/**
 * @exports TextureType
 * @description Represents the supported texture types.
 */
export const TextureType = {
    'albedo' : 0, // render.TextureType.kAlbedo,
    'normal' : 1, // render.TextureType.kNormal,
    'metallic' : 2, // render.TextureType.kMetallic,
    'roughness' : 3, // render.TextureType.kRoughness,
    'ambient' : 4, // render.TextureType.kAO,
    'emissive' : 5, // render.TextureType.kEmissive,
    'reflection' : 6, // render.TextureType.kReflection,
    'specular' : 7, // render.TextureType.kSpecular,
    'brdf-lut' : 8, // render.TextureType.kBrdfLUT,
    'diff-env-map' : 9, // render.TextureType.kDiffEnvMap,
    'spec-env-map' : 10, // render.TextureType.kSpecEnvMap,
    'max' : 11 // render.TextureType.kMAX
}