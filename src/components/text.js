import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import { FontStyle, FontWeight, TextAlign } from './types/enums.js';
import { ColorProp } from "./common-props";
import mapProperties from '../properties-mapping.js';

export function Text (props) {
  return React.createElement('text', mapProperties('Text', props));
}

Text.propTypes = {
  ...UiNode.PropTypes,

  children: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(Object.values(TextAlign)),
  textColor: ColorProp,
  width: PropTypes.number,
  height: PropTypes.number,
  multiline: PropTypes.bool,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOf(Object.values(FontWeight)),
  fontStyle: PropTypes.oneOf(Object.values(FontStyle)),
  letterSpacing: PropTypes.number,
  lineSpacing: PropTypes.number,
  allCaps: PropTypes.bool,
};

Text.defaultProps = {
  ...UiNode.DefaultProps,

  children: '',
  textAlign: TextAlign.left,
  textColor: 'white',
  width: 0,
  height: 0,
  multiline: false,
  fontSize: 0.08,
  fontWeight: FontWeight.regular,
  fontStyle: FontStyle.normal,
  letterSpacing: 0.0,
  lineSpacing: 1.0,
  allCaps: false
};
