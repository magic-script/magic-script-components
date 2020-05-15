import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function Dialog (props) {
  return React.createElement('dialog', mapProperties('Dialog', props));
}

// TODO:
// Dialog.propTypes = {
//     ...UiNode.PropTypes,
// }

// Dialog.defaultProps = {
//     ...UiNode.DefaultProps,
// }
