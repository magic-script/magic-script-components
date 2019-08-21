// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { glyph } from 'lumin';

/**
 * @exports AdvanceDirection
 * @description Direction from the current glyph to the next one on the baseline,
 * which can be horizontal or vertical, in the natural script of the language.
 */
export const AdvanceDirection = {
    'down': glyph.AdvanceDirection.kDown,
    'left': glyph.AdvanceDirection.kLeft,
    'right': glyph.AdvanceDirection.kRight,
    'up': glyph.AdvanceDirection.kUp
}