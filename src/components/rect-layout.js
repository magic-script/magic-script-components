import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { UiLayout } from './types/ui-layout.js';
import mapProperties from '../properties-mapping.js';
import { Alignment } from './types/enums.js';

export function RectLayout(props) {
  return React.createElement('rectLayout', mapProperties('RectLayout', props));
}

RectLayout.propTypes = {
  ...UiLayout.PropTypes,

  alignment: PropTypes.oneOf(Object.values(Alignment)),
  padding: PropTypes.arrayOf(TypeValidator.arrayOf(4))
};

RectLayout.defaultProps = {
  ...UiLayout.DefaultProps,

  alignment: Alignment.topLeft,
  padding: [0, 0, 0, 0]
};
