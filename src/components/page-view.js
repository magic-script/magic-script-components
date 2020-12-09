import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { Alignment } from './types/enums.js';

export function PageView(props) {
  return React.createElement('pageView', mapProperties('PageView', props));
}

PageView.propTypes = {
  ...UiNode.PropTypes,

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

  // Properties
  defaultPageAlignment: PropTypes.oneOf(Object.values(Alignment)),
  defaultPagePadding: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
  pageAlignment: PropTypes.arrayOf(
    PropTypes.exact({
      index: PropTypes.number.isRequired,
      alignment: PropTypes.oneOf(Object.values(Alignment)).isRequired
    })
  ),
  pagePadding: PropTypes.arrayOf(
    PropTypes.exact({
      index: PropTypes.number.isRequired,
      padding: PropTypes.arrayOf(TypeValidator.arrayOf(4)).isRequired
    })
  ),
  visiblePage: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  
};

PageView.defaultProps = {
  ...UiNode.DefaultProps,

  defaultPageAlignment: Alignment.topLeft,
  defaultPagePadding: [0, 0, 0, 0],
  visiblePage: 0,
  width: 0,
  height: 0
};