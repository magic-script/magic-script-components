import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import { ColorProp } from './common-props';
import mapProperties from '../properties-mapping.js';

export function ProgressBar(props) {
  return React.createElement('progressBar', mapProperties('ProgressBar', props));
}

ProgressBar.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  beginColor: ColorProp,
  endColor: ColorProp,

  // Events
  onProgressBarChanged: PropTypes.func
};

ProgressBar.defaultProps = {
  ...UiNode.DefaultProps,

  height: 0,
  min: 0,
  max: 1,
  value: 0,
  beginColor: 'white', 
  endColor: 'white',
};
