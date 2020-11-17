import React from 'react'
import PropTypes from 'prop-types'
import { UiNode } from './types/ui-node.js';
import { FontStyle, FontWeight, TextAlign } from './types/enums.js';
import { ColorProp } from './common-props';
import mapProperties from '../properties-mapping.js';

export function Text (props) {
  return React.createElement('text', mapProperties('Text', props));
}

Text.propTypes = {
  ...UiNode.PropTypes,

  children: PropTypes.string.isRequired,
  allCaps: PropTypes.bool,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOf(Object.values(FontWeight)),
  fontStyle: PropTypes.oneOf(Object.values(FontStyle)),
  letterSpacing: PropTypes.number,
  lineSpacing: PropTypes.number,
  multiline: PropTypes.bool,
  textAlign: PropTypes.oneOf(Object.values(TextAlign)),
  textColor: ColorProp,
  width: PropTypes.number,
  height: PropTypes.number,
};

Text.defaultProps = {
  ...UiNode.DefaultProps,

  children: '',
  allCaps: false,
  fontSize: 0.08,
  fontStyle: FontStyle.normal,
  fontWeight: FontWeight.regular,
  letterSpacing: 0.0,
  lineSpacing: 1.0,
  multiline: false,
  textAlign: TextAlign.left,
  textColor: 'white',
  width: 0,
  height: 0,
};
