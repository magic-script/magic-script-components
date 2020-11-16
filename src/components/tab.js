import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { ColorProp } from './common-props.js';

export function Tab(props) {
  return React.createElement('tab', mapProperties('Tab', props));
}

Tab.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  text: PropTypes.string,
  textColor: ColorProp,
  textSize: PropTypes.number,

  // Events
  onActivate: PropTypes.func
};

Tab.defaultProps = {
  ...UiNode.DefaultProps,

  textColor: 'white',
  textSize: 0.1
};
