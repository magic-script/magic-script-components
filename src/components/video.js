import React from 'react'
import PropTypes from 'prop-types'

import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';
import { VideoAction, VideoViewMode } from './types/enums.js';

export function Video (props) {
  return React.createElement('video', mapProperties('Video', props));
}

Video.propTypes = {
  ...UiNode.PropTypes,

  path: PropTypes.string.isRequired,
  looping: PropTypes.bool,
  subtitlePath: PropTypes.string,
  volume: TypeValidator.range(0.0, 1.0),
  seekTo: PropTypes.number,
  action: PropTypes.oneOf([
    VideoAction.pause,
    VideoAction.start,
    VideoAction.stop
  ]),

  viewMode: PropTypes.oneOf([
    VideoViewMode.fullArea,
    VideoViewMode.leftRight
  ]),
  width: PropTypes.number,
  height: PropTypes.number
};

Video.defaultProps = {
  ...UiNode.DefaultProps,

  path: '',
  looping: false,
  subtitlePath: '',
  volume: 1.0,
  seekTo: 0.0,
  action: VideoAction.stop,

  viewMode: VideoViewMode.fullArea,
  width: 0.0,
  height: 0.0
};
