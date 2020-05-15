import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function Model (props) {
  return React.createElement('model', mapProperties('Model', props));
}

// TODO:
// Model.propTypes = {
//     ...UiNode.PropTypes,
// }

// Model.defaultProps = {
//     ...UiNode.DefaultProps,
// }
