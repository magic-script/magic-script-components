import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';

export function PageView(props) {
  return React.createElement('pageView', mapProperties('PageView', props));
}

PageView.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  width: PropTypes.number,
  height: PropTypes.number,
  visiblePage: PropTypes.number
};

PageView.defaultProps = {
  ...UiNode.DefaultProps,

  width: 0,
  height: 0,
  visiblePage: 0
};