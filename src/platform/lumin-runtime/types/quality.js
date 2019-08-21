// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { glyph } from 'lumin';

/**
 * @exports Quality
 * @description Describes the quality vs. performance balance when rendering with the font.
 * Can be controlled with Font2dDesc when the font resource is created.
 * Note the quality levels above kStd are still experimental and not recommended for most users.
 */
export const Quality = {
    'enh1': glyph.Quality.kEnh1,
    'enh1-aa': glyph.Quality.kEnh1AA,
    'enh1-fast': glyph.Quality.kEnh1Fast,
    'enh2': glyph.Quality.kEnh2,
    'enh3': glyph.Quality.kEnh3,
    'exper': glyph.Quality.kExper,
    'fast': glyph.Quality.kFast,
    'std': glyph.Quality.kStd,
    'std-0': glyph.Quality.kStd0
}