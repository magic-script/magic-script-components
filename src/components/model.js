import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';

export function Model(props) {
  return React.createElement('model', mapProperties('Model', props));
}

Model.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  animation: PropTypes.exact({
    resourceId: PropTypes.number,
    name: PropTypes.string,
    paused: PropTypes.bool,
    loops: PropTypes.number,
  }),
  animationPauseState: PropTypes.bool,
  animationPlaybackSpeed: PropTypes.number,
  animationTime: PropTypes.number,
  importScale: PropTypes.number,
  materialPath: PropTypes.string,
  path: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  resourceId: PropTypes.number, 
  texture: PropTypes.exact({
    textureId: PropTypes.number.isRequired,
    textureSlot: PropTypes.string.isRequired,
    materialName: PropTypes.string.isRequired,
  }),
};

Model.defaultProps = {
  ...UiNode.DefaultProps,

  animationPauseState: false,
  importScale: 1.0
};
