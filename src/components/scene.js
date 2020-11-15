import React from 'react'
import PropTypes from 'prop-types'
import mapProperties from '../properties-mapping.js';

export function Scene (props) {
  return React.createElement('scene', mapProperties('Scene', props));
}

Scene.propTypes = {
  // Event handlers
  onAppStart: PropTypes.func,
  onAppPause: PropTypes.func,
  onAppResume: PropTypes.func,
};

Scene.defaultProps = {
};
