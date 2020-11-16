import PropTypes from 'prop-types';
import { ColorProp } from '../common-props.js';
import { TransformNode } from './transform-node.js';

const RenderNode = {
  PropTypes: {
    ...TransformNode.PropTypes,
    color: ColorProp,
    isOpaque: PropTypes.bool
  },

  DefaultProps: {
    ...TransformNode.DefaultProps,
  }
}

export { RenderNode }
