// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import { Text } from '../src/components/components.js';

test('Text component with fontSize == 0.05', () => {
  const component = renderer.create(
    <Text position={[0,0,0]} fontSize={0.05}>MagicScript Components</Text>,
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
