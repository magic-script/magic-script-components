import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { UiLayout } from './types/ui-layout.js';
import mapProperties from '../properties-mapping.js';
import { Alignment } from './types/enums';

export function GridLayout(props) {
  return React.createElement('gridLayout', mapProperties('GridLayout', props));
}

GridLayout.propTypes = {
  ...UiLayout.PropTypes,

  // Properties  
  defaultItemAlignment: PropTypes.oneOf(Object.values(Alignment)),
  defaultItemPadding: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
  itemAlignment: PropTypes.arrayOf(
    PropTypes.exact({
      column: PropTypes.number.isRequired,
      row: PropTypes.number.isRequired,
      alignment: PropTypes.oneOf(Object.values(Alignment)).isRequired
    })
  ),
  itemPadding: PropTypes.arrayOf(
    PropTypes.exact({
      column: PropTypes.number.isRequired,
      row: PropTypes.number.isRequired,
      padding: PropTypes.arrayOf(TypeValidator.arrayOf(4)).isRequired
    })
  ),
  skipInvisibleItems: PropTypes.bool,
  columns: PropTypes.number,
  rows: PropTypes.number
};

GridLayout.defaultProps = {
  ...UiLayout.DefaultProps,

  defaultItemAlignment: Alignment.topLeft,
  defaultItemPadding: [0, 0, 0, 0],
  skipInvisibleItems: false,
  columns: 0,
  rows: 1
};