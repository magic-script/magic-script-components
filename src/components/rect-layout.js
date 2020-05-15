import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function RectLayout (props) {
  return React.createElement('rectLayout', mapProperties('RectLayout', props));
}

// TODO:
// RectLayout.propTypes = {
//     ...UiNode.PropTypes,
// }

// RectLayout.defaultProps = {
//     ...UiNode.DefaultProps,
// }
