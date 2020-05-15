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

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(component).toHaveProperty('localPosition', localPosition);
  expect(tree).toHaveProperty('localRotation', localRotation);
  expect(tree).toHaveProperty('localScale', localScale);
  expect(tree).toHaveProperty('localTransform', localTransform);
  expect(tree).toHaveProperty('alignment', alignment);
  expect(tree).toHaveProperty('charSpacing', charSpacing);
  expect(tree).toHaveProperty('textAlignment', textAlignment);
  expect(tree).toHaveProperty('boundsSize.wrap', true);
  expect(tree).toHaveProperty('boundsSize.boundsSize', [0.6, 0.4]);
  expect(tree).toHaveProperty('fontParameters.fontStyle', fontParameters.fontStyle);
  expect(tree).toHaveProperty('fontParameters.fontWeight', fontParameters.fontWeight);
  expect(tree).toHaveProperty('fontParameters.fontSize', fontParameters.fontSize);
  expect(tree).toHaveProperty('fontParameters.allCaps', fontParameters.allCaps);
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

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('fileName', fileName);
  expect(tree).toHaveProperty('soundLooping', soundLooping);
  expect(tree).toHaveProperty('soundMute', soundMute);
  expect(tree).toHaveProperty('soundPitch', soundPitch);
  expect(tree).toHaveProperty('soundVolumeLinear', soundVolumeLinear);
  expect(tree).toHaveProperty('streamedFileOffset', streamedFileOffset);
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

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('videoPath', videoPath);
  expect(tree).toHaveProperty('timedTextPath', timedTextPath);
});

test('Model component', () => {
  const modelPath = 'resources/model.glb';

  const component = renderer.create(
    <Model path={modelPath}/>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('modelPath', modelPath);
});

test('Quad component', () => {
  const size = [0.5, 0.4];

  const component = renderer.create(
    <Quad
      width={size[0]}
      height={size[1]}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('size', size);
});

test('Spinner component', () => {
  const size = [0.3, 0.3];

  const component = renderer.create(
    <Spinner
      width={size[0]}
      height={size[1]}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('size', size);
});

test('ListView component', () => {
  const scrollingEnabled = true;

  const component = renderer.create(
    <ListView scrollEnabled={scrollingEnabled}/>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('scrollingEnabled', scrollingEnabled);
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

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('textSize', textSize);
  expect(tree).toHaveProperty('listTextSize', listTextSize);
});

test('RectLayout component', () => {
  const contentAlignment = 'top-left';

  const component = renderer.create(
    <RectLayout alignment={contentAlignment}/>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('contentAlignment', contentAlignment);
});

test('Dialog component', () => {
  const scrolling = true;

  const component = renderer.create(
    <Dialog scrollEnabled={scrolling}/>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('scrolling', scrolling);
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

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('progressColor.beginColor', progressColor.beginColor);
  expect(tree).toHaveProperty('progressColor.endColor', progressColor.endColor);
});

test('Button component', () => {
  const labelSide = 'left';

  const component = renderer.create(
    <Button textSide={labelSide}/>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveProperty('labelSide', labelSide);
});
