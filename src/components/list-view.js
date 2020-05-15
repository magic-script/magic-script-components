import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function ListView (props) {
  return React.createElement('listView', mapProperties('ListView', props));
}

// TODO:
// ListView.propTypes = {
//     ...UiNode.PropTypes,
// }

// ListView.defaultProps = {
//     ...UiNode.DefaultProps,
// }
