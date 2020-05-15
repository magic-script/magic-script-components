// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import {
    Audio,
    Model,
    Video,
    Quad,
    Spinner,
    ListView,
    DropdownList,
    RectLayout,
    Dialog,
    ProgressBar,
    Button,
    Text
} from '../src/components/components.js';

test('Text component', () => {
  const localPosition = [1, 1, 1];
  const localRotation = [1, 1, 1, 1];
  const localScale= [1, 1, 1];
  const localTransform= [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
  const alignment = 'top-left';
  const charSpacing = 0.01;
  const textAlignment = 'center';

  const boundsSize = {
    boundsSize: [0.6, 0.4],
    wrap: true
  };

  const fontParameters = {
    fontStyle: 'normal',
    fontWeight: 'regular',
    fontSize: 0.05,
    allCaps: true
  };

  const component = renderer.create(
    <Text
      position={localPosition}
      rotation={localRotation}
      scale={localScale}
      transform={localTransform}
      anchorPoint={alignment}
      letterSpacing={charSpacing}
      textAlign={textAlignment}
      width={boundsSize.boundsSize[0]}
      height={boundsSize.boundsSize[1]}
      multiline={boundsSize.wrap}
      fontStyle={fontParameters.fontStyle}
      fontWeight={fontParameters.fontWeight}
      fontSize={fontParameters.fontSize}
      allCaps={fontParameters.allCaps}
    >MagicScript Components</Text>,
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('localPosition', localPosition);
  expect(json.props).toHaveProperty('localRotation', localRotation);
  expect(json.props).toHaveProperty('localScale', localScale);
  expect(json.props).toHaveProperty('localTransform', localTransform);
  expect(json.props).toHaveProperty('alignment', alignment);
  expect(json.props).toHaveProperty('charSpacing', charSpacing);
  expect(json.props).toHaveProperty('textAlignment', textAlignment);
  expect(json.props).toHaveProperty('boundsSize.wrap', true);
  expect(json.props).toHaveProperty('boundsSize.boundsSize', [0.6, 0.4]);
  expect(json.props).toHaveProperty('fontParameters.fontStyle', fontParameters.fontStyle);
  expect(json.props).toHaveProperty('fontParameters.fontWeight', fontParameters.fontWeight);
  expect(json.props).toHaveProperty('fontParameters.fontSize', fontParameters.fontSize);
  expect(json.props).toHaveProperty('fontParameters.allCaps', fontParameters.allCaps);
});

test('Audio component', () => {
  const fileName = 'resources/audio.mp3';
  const soundLooping = true;
  const soundMute = false;
  const soundPitch = 1;
  const soundVolumeLinear = 1;
  const streamedFileOffset = 0.5;

  const component = renderer.create(
    <Audio
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

  expect(json.props).toHaveProperty('fileName', fileName);
  expect(json.props).toHaveProperty('soundLooping', soundLooping);
  expect(json.props).toHaveProperty('soundMute', soundMute);
  expect(json.props).toHaveProperty('soundPitch', soundPitch);
  expect(json.props).toHaveProperty('soundVolumeLinear', soundVolumeLinear);
  expect(json.props).toHaveProperty('streamedFileOffset', streamedFileOffset);
});

test('Video component', () => {
  const videoPath = 'resources/video.mp4';
  const timedTextPath = 'resources/subtitles.txt';

  const component = renderer.create(
    <Video
      path={videoPath}
      subtitlePath={timedTextPath}
    />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('videoPath', videoPath);
  expect(json.props).toHaveProperty('timedTextPath', timedTextPath);
});

test('Model component', () => {
  const modelPath = 'resources/model.glb';

  const component = renderer.create(
    <Model path={modelPath}/>
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('modelPath', modelPath);
});

test('Quad component', () => {
  const size = [0.5, 0.4];

  const component = renderer.create(
    <Quad
      width={size[0]}
      height={size[1]}
    />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('size', size);
});

test('Spinner component', () => {
  const size = [0.3, 0.3];

  const component = renderer.create(
    <Spinner
      width={size[0]}
      height={size[1]}
    />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('size', size);
});

test('ListView component', () => {
  const scrollingEnabled = true;

  const component = renderer.create(
    <ListView scrollEnabled={scrollingEnabled}/>
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('scrollingEnabled', scrollingEnabled);
});

test('DropdownList component', () => {
  const textSize = 0.08;
  const listTextSize = 0.05;

  const component = renderer.create(
    <DropdownList
      fontSize={textSize}
      listFontSize={listTextSize}
    />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('textSize', textSize);
  expect(json.props).toHaveProperty('listTextSize', listTextSize);
});

test('RectLayout component', () => {
  const contentAlignment = 'top-left';

  const component = renderer.create(
    <RectLayout alignment={contentAlignment}/>
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('contentAlignment', contentAlignment);
});

test('Dialog component', () => {
  const scrolling = true;

  const component = renderer.create(
    <Dialog scrollEnabled={scrolling}/>
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('scrolling', scrolling);
});

test('ProgressBar component', () => {
  const progressColor = {
    beginColor: 'white',
    endColor: 'blue'
  };

  const component = renderer.create(
    <ProgressBar
      beginColor={progressColor.beginColor}
      endColor={progressColor.endColor}
    />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('progressColor.beginColor', progressColor.beginColor);
  expect(json.props).toHaveProperty('progressColor.endColor', progressColor.endColor);
});

test('Button component', () => {
  const labelSide = 'left';

  const component = renderer.create(
    <Button textSide={labelSide}/>
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty('labelSide', labelSide);
});
