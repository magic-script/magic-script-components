import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';

export function Panel(props) {
  return React.createElement('panel', mapProperties('Panel', props));
}

Panel.propTypes = {
  ...UiNode.PropTypes
};

Panel.defaultProps = {
  ...UiNode.DefaultProps
};