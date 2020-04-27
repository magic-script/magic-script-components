import PropTypes from 'prop-types'
import { TypeValidator } from './type-validators'

const Node = {
  PropTypes: {
    name: PropTypes.string,
    skipRaycast: PropTypes.bool,
    visible: PropTypes.bool
  },
  DefaultProps: {
    // name: undefined,
    // skipRaycast: false,
    // visible: true,
  }
}

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
    // TODO: Should we define default values for all properties? How about 'position'?
    // pivot: [0, 0, 0],
    // position: [0, 0, 0],
    // scale: [1, 1, 1],
    // rotation: [0, 0, 0, 1],
    // transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  }
}

export { TransformNode }
