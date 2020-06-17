import PropTypes from 'prop-types';
import { TypeValidator } from '../util/type-validators.js';
import { TransformNode } from './transform-node.js';

const RenderNode = {
  PropTypes: {
    ...TransformNode.PropTypes,
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(TypeValidator.arrayOf(4)),
      PropTypes.exact({
        h:PropTypes.number.isRequired,
        s: PropTypes.number.isRequired,
        l: PropTypes.number.isRequired
      }),
      PropTypes.exact({
        l: PropTypes.number.isRequired,
        c: PropTypes.number.isRequired,
        h: PropTypes.number.isRequired
      }),
      PropTypes.exact({
        c: PropTypes.number.isRequired,
        m: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        k: PropTypes.number.isRequired
      }),
      PropTypes.exact({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        a: PropTypes.number.isRequired,
        type: PropTypes.string
      }),
    ]),
  },

  DefaultProps: {
    ...TransformNode.DefaultProps,
    color: [1, 1, 1, 1],
  }
}

export { RenderNode }
