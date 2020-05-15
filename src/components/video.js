import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function Video (props) {
  return React.createElement('video', mapProperties('Video', props));
}

// TODO:
// Video.propTypes = {
//     ...UiNode.PropTypes,
// }

// Video.defaultProps = {
//     ...UiNode.DefaultProps,
// }