// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import { Text } from '../src/components/components.js';

test('Text component', () => {
  const component = renderer.create(
    <Text
      position={[1, 1, 1]}
      rotation={[1, 1, 1, 1]}
      scale={[1, 1, 1]}
      transform={[1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]}
      anchorPoint='top-left'
      letterSpacing={0.01}
      textAlign='center'
      width={0.6}
      height={0.4}
      multiline={true}
      fontStyle={'normal'}
      fontWeight={'regular'}
      fontSize={0.05}
      allCaps={true}
    >MagicScript Components</Text>,
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('Audio component', () => {
  const component = renderer.create(
    <Audio
    path='resources/audio.mp3'
    looping={true}
    mute={false}
    pitch={1}
    volume={1}
    seekTo={0.5}
    />,
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('Video component', () => {
  const component = renderer.create(
    <Video
      path='resources/video.mp4'
      subtitlePath='resources/video.txt'
    />
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('Model component', () => {
  const component = renderer.create(
    <Model path='resources/model.glb'/>
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('Quad component', () => {
  const component = renderer.create(
    <Quad width={0.5} height={0.4}/>
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('Spinner component', () => {
  const component = renderer.create(
    <Spinner width={0.3} height={0.3}/>
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('ListView component', () => {
  const component = renderer.create(
    <ListView scrollEnabled={true}/>
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('DropdownList component', () => {
  const component = renderer.create(
    <DropdownList
      fontSize={0.08}
      listFontSize={0.05}
    />
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('RectLayout component', () => {
  const component = renderer.create(
    <RectLayout alignment='top-left'/>
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('Dialog component', () => {
  const component = renderer.create(
    <Dialog scrollEnabled={true}/>
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

test('ProgressColor component', () => {
  const component = renderer.create(
    <ProgressColor
      beginColor='white'
      endColor='blue'
    />
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
})

test('Button component', () => {
  const component = renderer.create(
    <Button textSide='left'/>
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
})
