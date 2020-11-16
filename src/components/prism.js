import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';

export function Prism (props) {
  return React.createElement('prism', props);
}

Prism.propTypes = {
  // Properties
  position: PropTypes.arrayOf(TypeValidator.arrayOf(3)),
  orientation: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
  scale: PropTypes.arrayOf(TypeValidator.arrayOf(3)),
  transform: PropTypes.arrayOf(TypeValidator.arrayOf(16)),
  size: PropTypes.arrayOf(TypeValidator.arrayOf(3)).isRequired,

  // Event handlers
  onDestroy: PropTypes.func,
  onModeChanged: PropTypes.func,
  onRotationChanged: PropTypes.func,
  onScaleChanged: PropTypes.func,
  onPositionChanged: PropTypes.func
};

Prism.defaultProps = {
  position: [0, 0, 0],
  orientation: [0, 0, 0, 1],
  scale: [1, 1, 1],
  size: [1, 1, 1]
};
