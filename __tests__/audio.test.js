// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from 'react';
import renderer from 'react-test-renderer';

import  * as TransformNodeProps from './utils/transform-node-props';
import { Audio } from '../src/components/components.js';

test('Audio component', () => {
  const fileName = 'resources/audio.mp3';
  const soundLooping = true;
  const soundMute = false;
  const soundPitch = 1;
  const soundVolumeLinear = 1;
  const streamedFileOffset = 0.5;

  const component = renderer.create(
    <Audio
      // TransformNodeProps
      position={TransformNodeProps.localPosition}
      rotation={TransformNodeProps.localRotation}
      scale={TransformNodeProps.localScale}
      transform={TransformNodeProps.localTransform}

      path={fileName}
      looping={soundLooping}
      mute={soundMute}
      pitch={soundPitch}
      volume={soundVolumeLinear}
      seekTo={streamedFileOffset}
    />,
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  // TransformNodeProps
  expect(json.props).toHaveProperty('localPosition', TransformNodeProps.localPosition);
  expect(json.props).toHaveProperty('localRotation', TransformNodeProps.localRotation);
  expect(json.props).toHaveProperty('localScale', TransformNodeProps.localScale);
  expect(json.props).toHaveProperty('localTransform', TransformNodeProps.localTransform);

  expect(json.props).toHaveProperty('fileName', fileName);
  expect(json.props).toHaveProperty('soundLooping', soundLooping);
  expect(json.props).toHaveProperty('soundMute', soundMute);
  expect(json.props).toHaveProperty('soundPitch', soundPitch);
  expect(json.props).toHaveProperty('soundVolumeLinear', soundVolumeLinear);
  expect(json.props).toHaveProperty('streamedFileOffset', streamedFileOffset);
});