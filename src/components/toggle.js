import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { ToggleType } from './types/enums';
import { ColorProp } from './common-props.js';

export function Toggle(props) {
  return React.createElement('toggle', mapProperties('Toggle', props));
}

Toggle.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  height: PropTypes.number,
  on: PropTypes.bool,
  text: PropTypes.string,
  textColor: ColorProp,
  textSize: PropTypes.number,
  type: PropTypes.oneOf(Object.values(ToggleType)),

  // Events
  onToggleChanged: PropTypes.func
};

Toggle.defaultProps = {
  ...UiNode.DefaultProps,

  height: 0,
  on: false,
  text: '',
  textColor: 'white',
  textSize: 0.08,
  type: ToggleType.default
};