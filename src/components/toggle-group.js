import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';

export function ToggleGroup(props) {
  return React.createElement('toggleGroup', mapProperties('ToggleGroup', props));
}

ToggleGroup.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  allowMultipleOn: PropTypes.bool,
  allowAllOff: PropTypes.bool,
  allTogglesOff: PropTypes.bool,
};

ToggleGroup.defaultProps = {
  ...UiNode.DefaultProps,

  allowMultipleOn: false,
  allowAllOff: false,
  allTogglesOff: false,
};
