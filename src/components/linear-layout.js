import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { UiLayout } from './types/ui-layout.js';
import mapProperties from '../properties-mapping.js';
import { Alignment, Orientation } from './types/enums.js';

export function LinearLayout(props) {
  return React.createElement('linearLayout', mapProperties('LinearLayout', props));
}

LinearLayout.propTypes = {
  ...UiLayout.PropTypes,

  // Properties
  defaultItemAlignment: PropTypes.oneOf(Object.values(Alignment)),
  defaultItemPadding: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
  itemAlignment: PropTypes.arrayOf(
    PropTypes.exact({
      index: PropTypes.number.isRequired,
      alignment: PropTypes.oneOf(Object.values(Alignment)).isRequired
    })
  ),
  itemPadding: PropTypes.arrayOf(
    PropTypes.exact({
      index: PropTypes.number.isRequired,
      padding: PropTypes.arrayOf(TypeValidator.arrayOf(4)).isRequired
    })
  ),
  skipInvisibleItems: PropTypes.bool,
  orientation: PropTypes.oneOf(Object.values(Orientation))
};

LinearLayout.defaultProps = {
  ...UiLayout.DefaultProps,

  defaultItemAlignment: Alignment.topLeft,
  defaultItemPadding: [0, 0, 0, 0],
  skipInvisibleItems: false,
  orientation: Orientation.vertical
};