import React from 'react';
import PropTypes from 'prop-types'
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";
import { ColorProp } from './common-props.js';

export function ColorPicker(props) {
  return React.createElement("colorPicker", mapProperties("ColorPicker", props));
}

ColorPicker.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  color: ColorProp,

  // Event handlers
  onColorChanged: PropTypes.func,
  onColorConfirmed: PropTypes.func,
  onColorCanceled: PropTypes.func
};

ColorPicker.defaultProps = {
  ...UiNode.DefaultProps,

  color: 'white'
};