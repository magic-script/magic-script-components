import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function Quad (props) {
  return React.createElement('quad', mapProperties('Quad', props));
}

// TODO:
// Quad.propTypes = {
//     ...UiNode.PropTypes,
// }

// Quad.defaultProps = {
//     ...UiNode.DefaultProps,
// }