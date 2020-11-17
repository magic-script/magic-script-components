import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';

export function Slider(props) {
  return React.createElement('slider', mapProperties('Slider', props));
}

Slider.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,

  // Events
  onSliderChanged: PropTypes.func
};

Slider.defaultProps = {
  ...UiNode.DefaultProps,

  height: 0,
  min: 0,
  max: 1,
  value: 0
};