import React from 'react';
import PropTypes from 'prop-types';
import mapProperties from '../properties-mapping.js';
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import { Orientation } from './types/enums.js';

export function ScrollBar(props) {
  return React.createElement('scrollBar', mapProperties('ScrollBar', props));
}

ScrollBar.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  length: PropTypes.number.isRequired,
  thickness: PropTypes.number,
  thumbSize: TypeValidator.range(0, 1),
  thumbPosition: TypeValidator.range(0, 1),
  orientation: PropTypes.oneOf(Object.values(Orientation))
};

ScrollBar.defaultProps = {
  ...UiNode.DefaultProps,

  thickness: 0,
  thumbSize: 0,
  thumbPosition: 0,
  orientation: Orientation.vertical
};