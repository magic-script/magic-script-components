import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function Spinner (props) {
  return React.createElement('spinner', mapProperties('Spinner', props));
}

// TODO:
// Spinner.propTypes = {
//     ...UiNode.PropTypes,
// }

// Spinner.defaultProps = {
//     ...UiNode.DefaultProps,
// }
