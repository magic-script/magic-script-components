import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function ProgressBar (props) {
  return React.createElement('progressBar', mapProperties('ProgressBar', props));
}

// TODO:
// ProgressBar.propTypes = {
//     ...UiNode.PropTypes,
// }

// ProgressBar.defaultProps = {
//     ...UiNode.DefaultProps,
// }
