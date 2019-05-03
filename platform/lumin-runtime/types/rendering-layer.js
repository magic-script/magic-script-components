// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { render } from 'lumin';

/**
 * @exports RenderingLayer
 * @description Represents ScrollBarVisibility mode.
 */ 
export const RenderingLayer = {
    'background-layer': render.RenderingLayer.kBackgroundLayer,
    'hud-layer': render.RenderingLayer.kHUDLayer,
    'object-layer': render.RenderingLayer.kObjectLayer,
    'post-hud-layer': render.RenderingLayer.kPostHUDLayer,
    'post-object-layer': render.RenderingLayer.kPostObjectLayer,
    'pre-object-layer': render.RenderingLayer.kPreObjectLayer,
    'rendering-layer-max': render.RenderingLayer.kRenderingLayerMAX
}
