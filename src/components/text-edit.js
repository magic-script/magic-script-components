import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import { CursorEdgeScrollMode, FontStyle, FontWeight, ScrollBarVisibility, TextAlign, TextEntryMode } from './types/enums.js';
import { ColorProp } from './common-props';
import mapProperties from '../properties-mapping.js';

export function TextEdit(props) {
  return React.createElement('textEdit', mapProperties('TextEdit', props));
}

TextEdit.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  allCaps: PropTypes.bool,
  charLimit: PropTypes.number,
  cursorEdgeScrollMode: PropTypes.oneOf(Object.values(CursorEdgeScrollMode)),
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOf(Object.values(FontWeight)),
  fontStyle: PropTypes.oneOf(Object.values(FontStyle)),
  hint: PropTypes.string,
  hintColor: ColorProp,
  letterSpacing: PropTypes.number,
  lineSpacing: PropTypes.number,
  multiline: PropTypes.bool,
  password: PropTypes.bool,
  scrollBarVisibility: PropTypes.oneOf(Object.values(ScrollBarVisibility)),
  scrolling: PropTypes.bool,
  scrollSpeed: PropTypes.number,
  scrollValue: PropTypes.number,
  selectedBegin: PropTypes.number,
  selectedEnd: PropTypes.number,
  text: PropTypes.string,
  textAlign: PropTypes.oneOf(Object.values(TextAlign)),
  textColor: ColorProp,
  textEntry: PropTypes.oneOf(Object.values(TextEntryMode)),
  textPadding: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
  width: PropTypes.number,
  height: PropTypes.number,

  // Events
  onTextChanged: PropTypes.func
};

TextEdit.defaultProps = {
  ...UiNode.DefaultProps,

  allCaps: false,
  charLimit: 0,
  fontSize: 0.08,
  fontWeight: FontWeight.regular,
  fontStyle: FontStyle.normal,
  letterSpacing: 0,
  lineSpacing: 1,
  multiline: false,
  password: false,
  scrollBarVisibility: ScrollBarVisibility.auto,
  scrolling: false,
  scrollSpeed: 0.1,
  textAlign: TextAlign.left,
  textColor: 'white',
  textEntry: TextEntryMode.normal,
  textPadding: [0, 0, 0, 0]
};
