import React from 'react';
import PropTypes from 'prop-types';
import { TransformNode } from './types/transform-node.js';

import mapProperties from '../properties-mapping.js';
import { TypeValidator } from './util/type-validators.js';

import { AudioAction } from './types/enums.js';

export function Audio(props) {
  return React.createElement('audio', mapProperties('Audio', props));
}

Audio.propTypes = {
  ...TransformNode.PropTypes,

  // Properties
  action: PropTypes.oneOf(Object.values(AudioAction)),
  absolutePath: PropTypes.bool,
  autoDestroy: PropTypes.bool,
  basePath: PropTypes.string,
  descriptor: PropTypes.number,
  dynamicDecode: PropTypes.bool,
  loadFile: PropTypes.bool,
  looping: PropTypes.bool,
  mute: PropTypes.bool,
  path: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  pitch: PropTypes.number,
  seekTo: PropTypes.number,
  spatialSoundEnable: PropTypes.bool,
  spatialSoundDirection: PropTypes.arrayOf(
    PropTypes.exact({
      channel: PropTypes.number.isRequired,
      channelDirection: PropTypes.arrayOf(TypeValidator.arrayOf(4)).isRequired,
    })
  ),
  spatialSoundDirectSendLevels: PropTypes.arrayOf(
    PropTypes.exact({
      channel: PropTypes.number.isRequired,
      gain: PropTypes.number.isRequired,
      gainHf: PropTypes.number.isRequired,
      gainLf: PropTypes.number.isRequired,
      gainMf: PropTypes.number.isRequired,
    })
  ),
  spatialSoundDistance: PropTypes.arrayOf(
    PropTypes.exact({
      channel: PropTypes.number.isRequired,
      minDistance: PropTypes.number.isRequired,
      maxDistance: PropTypes.number.isRequired,
      rolloffFactor: PropTypes.number.isRequired,
    })
  ),
  spatialSoundPosition: PropTypes.arrayOf(
    PropTypes.exact({
      channel: PropTypes.number.isRequired,
      channelPosition: PropTypes.arrayOf(TypeValidator.arrayOf(3)).isRequired,
    })
  ),
  spatialSoundRadiation: PropTypes.arrayOf(
    PropTypes.exact({
      channel: PropTypes.number.isRequired,
      innerAngle: PropTypes.number.isRequired,
      outerAngle: PropTypes.number.isRequired,
      outerGain: PropTypes.number.isRequired,
      outerGainHf: PropTypes.number.isRequired,
    })
  ),
  spatialSoundRoomSendLevels: PropTypes.arrayOf(
    PropTypes.exact({
      channel: PropTypes.number.isRequired,
      gain: PropTypes.number.isRequired,
      gainHf: PropTypes.number.isRequired,
      gainLf: PropTypes.number.isRequired,
      gainMf: PropTypes.number.isRequired,
    })
  ),
  volume: TypeValidator.range(0.0, 1.0),
};

Audio.defaultProps = {
  ...TransformNode.DefaultProps,

  looping: false,
  mute: false,
  pitch: 0,
  volume: 1.0,
  seekTo: 0.0,
  action: AudioAction.stop,
};
