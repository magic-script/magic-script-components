// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { ui } from 'lumin';
import { UiEventData } from './ui-event-data.js';

export class TextEditEventData extends UiEventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            // CharacterLimit
            // CharacterSpacing
            // CursorEdgeScrollMode
            // Font
            // FontParameters
            // HintText
            // HintTextColor
            // KeyboardProperties
            // LineSpacing
            // MultilineMode
            // PasswordMode
            // ScrollBarVisibilityMode
            // ScrollingEnabled
            // ScrollSpeed
            // ScrollValue
            // SelectedText
            'Text'
            // TextAlignment
            // TextColor
            // TextEntryMode
            // TextPadding
            // TextSize
        ]);
    }

    static isSupported(event) {
        return (event.getUiNode() instanceof ui.UiTextEdit);
    }
}