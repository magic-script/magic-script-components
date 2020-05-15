import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function DropdownList (props) {
  return React.createElement('dropdownList', mapProperties('DropdownList', props));
}

// TODO:
// DropdownList.propTypes = {
//     ...UiNode.PropTypes,
// }

// DropdownList.defaultProps = {
//     ...UiNode.DefaultProps,
// }
