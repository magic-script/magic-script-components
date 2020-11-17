import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { RenderNode } from './types/render-node.js';
import mapProperties from '../properties-mapping.js';

export function Line(props) {
  return React.createElement('line', mapProperties('Line', props));
}

Line.propTypes = {
  ...RenderNode.PropTypes,

  // Properties
  points: PropTypes.arrayOf(
    PropTypes.arrayOf(TypeValidator.arrayOf(3))
  ).isRequired
};

Line.defaultProps = {
  ...RenderNode.DefaultProps
};
