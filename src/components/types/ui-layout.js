import PropTypes from 'prop-types';
import { UiNode } from './ui-node.js';

const UiLayout = {
  PropTypes: {
    ...UiNode.PropTypes,

    // Properties
    width: PropTypes.number,
    height: PropTypes.number,
  },

  DefaultProps: {
    ...UiNode.DefaultProps,
    
    width: 0,
    height: 0
  }
}

export { UiLayout }
