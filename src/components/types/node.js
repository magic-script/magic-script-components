import PropTypes from 'prop-types'

const Node = {
  PropTypes: {
    name: PropTypes.string,
    skipRaycast: PropTypes.bool,
    visible: PropTypes.bool
  },
  DefaultProps: {
    name: undefined,
    skipRaycast: false,
    visible: true
  }
}

export { Node }
