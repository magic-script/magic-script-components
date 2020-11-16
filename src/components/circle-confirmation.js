import React from 'react';
import PropTypes from 'prop-types'
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';

export function CircleConfirmation(props) {
  return React.createElement('circleConfirmation', mapProperties('CircleConfirmation', props));
}

CircleConfirmation.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  radius: PropTypes.number,

  // Events
  onConfirmationCanceled: PropTypes.func,
  onConfirmationCompleted: PropTypes.func,
  onConfirmationUpdated: PropTypes.func
};

CircleConfirmation.defaultProps = {
  ...UiNode.DefaultProps,

  radius: 0.2
};