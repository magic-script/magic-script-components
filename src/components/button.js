import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import { Side, SystemIcon } from './types/enums.js';
import mapProperties from '../properties-mapping.js';
import { ColorProp } from './common-props.js';

export function Button (props) {
  return React.createElement('button', mapProperties('Button', props));
}

Button.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  children: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  outline: PropTypes.bool,
  fontSize: PropTypes.number,
  textColor: ColorProp,
  textSide: PropTypes.oneOf(Object.values(Side)),
  iconColor: ColorProp,
  iconPath: PropTypes.string,
  iconSize: PropTypes.arrayOf(TypeValidator.arrayOf(2)),
  iconType: PropTypes.oneOf(Object.values(SystemIcon)),

  // Event handlers
  onClick: PropTypes.func
};

Button.defaultProps = {
  ...UiNode.DefaultProps,

  children: '',
  width: 0,
  height: 0,
  outline: false,
  fontSize: 0.08,
  textColor: 'white',
  textSide: Side.left,
  iconColor: 'white',
  iconSize: [0.05, 0.05],
};
