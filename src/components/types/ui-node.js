import PropTypes from 'prop-types'
import { TransformNode } from './transform-node.js';
import { AnchorPoint } from './enums'

const UiNode = {
  PropTypes: {
    ...TransformNode.PropTypes,
    anchorPoint: PropTypes.oneOf([
      AnchorPoint.topLeft, AnchorPoint.topCenter, AnchorPoint.topRight, 
      AnchorPoint.centerLeft, AnchorPoint.centerCenter, AnchorPoint.centerRight, 
      AnchorPoint.bottomLeft, AnchorPoint.bottomCenter, AnchorPoint.bottomRight
    ]),
    enabled: PropTypes.bool,
    hideBounds: PropTypes.bool,

    onActivate: PropTypes.func,
    onPressed: PropTypes.func,
    onLongPress: PropTypes.func,
    onRelease: PropTypes.func,
    onHoverEnter: PropTypes.func,
    onHoverExit: PropTypes.func,
    onHoverMove: PropTypes.func,
    onEnabled: PropTypes.func,
    onDisabled: PropTypes.func,
    onFocusGained: PropTypes.func,
    onFocusLost: PropTypes.func,
    onFocusInput: PropTypes.func,
    onUpdate: PropTypes.func,
    onDeleted: PropTypes.func,
    onEvent: PropTypes.func,
    onUpdateLoop: PropTypes.func
  },

  DefaultProps: {
    ...TransformNode.DefaultProps,
    anchorPoint: AnchorPoint.centerCenter,
    enabled: true,
    hideBounds: false
  }
}

export { UiNode }
