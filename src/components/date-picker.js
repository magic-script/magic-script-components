import React from 'react';
import PropTypes from 'prop-types'
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { DateFormat } from 'magic-script-components/src/components/types/enums';

export function DatePicker(props) {
  return React.createElement('datePicker', mapProperties('DatePicker', props));
}

DatePicker.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  label: PropTypes.string,
  dateFormat: PropTypes.oneOf(Object.values(DateFormat)),

  // Events
  onDateChanged: PropTypes.func,
  onDateConfirmed: PropTypes.func,
  onColorCanceled: PropTypes.func
};

DatePicker.defaultProps = {
  ...UiNode.DefaultProps,

  label: ''
};