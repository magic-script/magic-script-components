import React from 'react';
import PropTypes from 'prop-types';

export function Scene (props) {
  return React.createElement('scene', props);
}

Scene.propTypes = {
  // Event handlers
  onAppStart: PropTypes.func,
  onAppPause: PropTypes.func,
  onAppResume: PropTypes.func,
};

Scene.defaultProps = {
};
