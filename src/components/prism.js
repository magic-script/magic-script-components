import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';

export function Prism (props) {
  return React.createElement('prism', props);
}

Prism.propTypes = {
  // Properties
  debug: PropTypes.bool,
  orientation: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
  orientationRelatedToCamera: PropTypes.bool,
  position: PropTypes.arrayOf(TypeValidator.arrayOf(3)),
  positionRelatedToCamera: PropTypes.bool,
  scale: PropTypes.arrayOf(TypeValidator.arrayOf(3)),
  size: PropTypes.arrayOf(TypeValidator.arrayOf(3)).isRequired,
  transform: PropTypes.arrayOf(TypeValidator.arrayOf(16)),

  // Events
  onDestroy: PropTypes.func,
  onModeChanged: PropTypes.func,
  onRotationChanged: PropTypes.func,
  onScaleChanged: PropTypes.func,
  onPositionChanged: PropTypes.func
};

Prism.defaultProps = {
  debug: false,
  orientation: [0, 0, 0, 1],
  orientationRelatedToCamera: false,
  position: [0, 0, 0],
  positionRelatedToCamera: false,
  scale: [1, 1, 1]
};
