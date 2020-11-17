import React from 'react'
import PropTypes from 'prop-types'

import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';
import { VideoAction, ViewMode } from './types/enums.js';

export function Video (props) {
  return React.createElement('video', mapProperties('Video', props));
}

Video.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  action: PropTypes.oneOf(Object.values(VideoAction)),
  looping: PropTypes.bool,
  path: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  screenSize: PropTypes.arrayOf(TypeValidator.arrayOf(2)),
  seekTo: PropTypes.number,
  subtitlePath: PropTypes.string,
  viewMode: PropTypes.oneOf(Object.values(ViewMode)),
  volume: TypeValidator.range(0.0, 1.0),
  width: TypeValidator.range(1, 2048),
  height: TypeValidator.range(1, 2048),
};

Video.defaultProps = {
  ...UiNode.DefaultProps,

  action: VideoAction.stop,
  looping: false,
  screenSize: [1.4, 0.85],
  seekTo: 0.0,
  viewMode: ViewMode.fullArea,
  volume: 1.0,
  width: 512,
  height: 512
};
