import React from "react";
import PropTypes from "prop-types";
import { TransformNode } from "./types/transform-node";

import mapProperties from "../properties-mapping.js";
import { TypeValidator } from './util/type-validators.js';

import { AudioAction } from "./types/enums.js";

export function Audio(props) {
  return React.createElement("audio", mapProperties("Audio", props));
}

Audio.propTypes = {
  ...TransformNode.PropTypes,

  path: PropTypes.string.isRequired,
  looping: PropTypes.bool,
  mute: PropTypes.bool,
  pitch: PropTypes.number,
  volume: TypeValidator.range(0.0, 1.0),
  seekTo: PropTypes.number,
  action: PropTypes.oneOf([
    AudioAction.pause,
    AudioAction.resume,
    AudioAction.start,
    AudioAction.stop,
  ]),

  spatialSoundEnable: PropTypes.bool,
  spatialSoundDirection: PropTypes.exact({
    channel: PropTypes.number,
    channelDirection: PropTypes.arrayOf(TypeValidator.arrayOf(4, 'number')),
  }),
  spatialSoundDirectSendLevels: PropTypes.exact({
    channel: PropTypes.number,
    gain: PropTypes.number,
    gainHf: PropTypes.number,
    gainLf: PropTypes.number,
    gainMf: PropTypes.number,
  }),
  spatialSoundDistance: PropTypes.exact({
    channel: PropTypes.number,
    minDistance: PropTypes.number,
    maxDistance: PropTypes.number,
    rolloffFactor: PropTypes.number,
  }),
  spatialSoundPosition: PropTypes.exact({
    channel: PropTypes.number,
    channelPosition: PropTypes.number,
  }),
  spatialSoundRadiation: PropTypes.exact({
    channel: PropTypes.number,
    innerAngle: PropTypes.number,
    outerAngle: PropTypes.number,
    outerGain: PropTypes.number,
    outerGainHf: PropTypes.number,
  }),
  spatialSoundRoomSendLevels: PropTypes.exact({
    channel: PropTypes.number,
    gain: PropTypes.number,
    gainHf: PropTypes.number,
    gainLf: PropTypes.number,
    gainMf: PropTypes.number,
  }),

  // should this be hidden from end-user?
  loadFile: PropTypes.bool,
  absolutePath: PropTypes.bool,
  descriptor: PropTypes.number,
  basePath: PropTypes.string,
  autoDestroy: PropTypes.bool,
  dynamicDecode: PropTypes.bool,
};

Audio.defaultProps = {
  ...TransformNode.DefaultProps,

  path: '',
  looping: false,
  mute: false,
  pitch: 0,
  volume: 1.0,
  seekTo: 0.0,
  action: AudioAction.stop
};
