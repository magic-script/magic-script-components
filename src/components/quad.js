import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { RenderNode } from './types/render-node.js';
import { ViewMode } from './types/enums.js';
import mapProperties from '../properties-mapping.js';

export function Quad(props) {
  return React.createElement('quad', mapProperties('Quad', props));
}

Quad.propTypes = {
  ...RenderNode.PropTypes,

  width: PropTypes.number,
  height: PropTypes.number,
  viewMode: PropTypes.oneOf(Object.values(ViewMode)),
  texCoords: PropTypes.arrayOf(
    PropTypes.arrayOf(TypeValidator.arrayOf(2))
  )
};

Quad.defaultProps = {
  ...RenderNode.DefaultProps,

  width: 1,
  height: 1,
  viewMode: ViewMode.fullArea,
  texCoords: [[0, 0], [1, 0], [0, 1], [1, 1]],
};
