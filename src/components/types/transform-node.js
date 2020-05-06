import PropTypes from 'prop-types';
import { TypeValidator } from '../util/type-validators.js';
import { Node } from './node.js';

const TransformNode = {
  PropTypes: {
    ...Node.PropTypes,
    debug: PropTypes.bool,
    pivot: PropTypes.arrayOf(TypeValidator.arrayOf(3)),
    position: PropTypes.arrayOf(TypeValidator.arrayOf(3)),
    scale: PropTypes.arrayOf(TypeValidator.arrayOf(3)),
    rotation: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
    transform: PropTypes.arrayOf(TypeValidator.arrayOf(16)),
  },

  DefaultProps: {
    ...Node.DefaultProps,
    debug: false,
    pivot: [0, 0, 0],
    position: [0, 0, 0],
    scale: [1, 1, 1], 
    rotation: [0, 0, 0, 1],
    transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  }
}

export { TransformNode }
