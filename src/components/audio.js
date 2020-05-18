import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';

export function Audio (props) {
  return React.createElement('audio', mapProperties('Audio', props));
}

Audio.propTypes = {
    ...UiNode.PropTypes,
    
    path: PropTypes.string.isRequired,
    looping: PropTypes.bool,
    mute: PropTypes.bool,
    pitch: PropTypes.number,
    volume: PropTypes.number,
    seekTo: PropTypes.number
}

Audio.defaultProps = {
    ...UiNode.DefaultProps,
}
