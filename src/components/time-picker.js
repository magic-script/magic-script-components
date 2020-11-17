import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { ColorProp } from './common-props.js';
import { Side, TimeFormat } from './types/enums.js';

export function TimePicker(props) {
  return React.createElement('timePicker', mapProperties('TimePicker', props));
}

TimePicker.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  color: ColorProp,
  defaultTime: PropTypes.string,
  label: PropTypes.string,
  labelSide: PropTypes.oneOf(Object.values(Side)),
  showHint: PropTypes.bool,
  time: PropTypes.string,
  timeFormat: PropTypes.oneOf(Object.values(TimeFormat)),

  // Events
  onTimeChanged: PropTypes.func,
  onTimeConfirmed: PropTypes.func
};

TimePicker.defaultProps = {
  ...UiNode.DefaultProps,

  color: 'white',
  labelSide: Side.top,
  showHint: false,
  timeFormat: TimeFormat.auto,
};