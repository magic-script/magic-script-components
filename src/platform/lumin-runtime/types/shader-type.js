// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { utils } from 'lumin';

/**
 * @exports ShaderType
 * @description Shader types for rendering objects
 */
export const ShaderType = {
    'diffuse-normal-spec': utils.ShaderType.kDiffuseNormalSpec,
    'pbr': utils.ShaderType.kPbr,
    'unlit-textured': utils.ShaderType.kUnlitTextured
}