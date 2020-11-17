import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { TransformNode } from './types/transform-node.js';
import mapProperties from '../properties-mapping.js';
import { ColorProp } from './common-props';
import { LightType } from './types/enums.js';

export function Light(props) {
  return React.createElement('light', mapProperties('Light', props));
}

Light.propTypes = {
  ...TransformNode.PropTypes,

  // Properties
  color: ColorProp,
  intensity: PropTypes.number,
  range: PropTypes.number,
  spotAngle: PropTypes.number,
  type: PropTypes.oneOf(Object.values(LightType)).isRequired,
  castsShadows: PropTypes.bool,
  useHeadPose: PropTypes.exact({
    on: PropTypes.bool.isRequired,
    offset: PropTypes.arrayOf(TypeValidator.arrayOf(4)).isRequired,
  })
};

Light.defaultProps = {
  ...TransformNode.DefaultProps,

  color: 'white',
  type: LightType.directional
};
