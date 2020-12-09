import React from 'react';
import PropTypes from 'prop-types'
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { ColorProp } from './common-props.js';
import { Side, DateFormat } from './types/enums.js';


export function DatePicker(props) {
  return React.createElement('datePicker', mapProperties('DatePicker', props));
}

DatePicker.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  color: ColorProp,
  date: PropTypes.string,
  dateFormat: PropTypes.oneOf(Object.values(DateFormat)),
  defaultDate: PropTypes.string,
  label: PropTypes.string,
  labelSide: PropTypes.oneOf(Object.values(Side)),
  showHint: PropTypes.bool,
  yearMin: PropTypes.number,
  yearMax: PropTypes.number,

  // Events
  onDateChanged: PropTypes.func,
  onDateConfirmed: PropTypes.func,
  onColorCanceled: PropTypes.func
};

DatePicker.defaultProps = {
  ...UiNode.DefaultProps,

  color: 'white',
  labelSide: Side.top,
  showHint: false,
};
