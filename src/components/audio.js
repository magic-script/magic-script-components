import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function Audio (props) {
  return React.createElement('audio', mapProperties('Audio', props));
}

// TODO:
// Audio.propTypes = {
//     ...UiNode.PropTypes,
// }

// Audio.defaultProps = {
//     ...UiNode.DefaultProps,
// }
