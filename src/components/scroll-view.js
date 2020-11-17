import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { ScrollBarVisibility, ScrollDirection } from './types/enums';

export function ScrollView(props) {
  return React.createElement('scrollView', mapProperties('ScrollView', props));
}

ScrollView.propTypes = {
  ...UiNode.PropTypes,

  scrollBarVisibility: PropTypes.oneOf(Object.values(ScrollBarVisibility)),
  scrollDirection: PropTypes.oneOf(Object.values(ScrollDirection)),
  scrollMask: PropTypes.number,
  scrollOffset: PropTypes.arrayOf(TypeValidator.arrayOf(3)),
  scrollSpeed: PropTypes.number,
  scrollValue: PropTypes.number,
  scrollBounds: PropTypes.exact({
    min: PropTypes.arrayOf(TypeValidator.arrayOf(3)).isRequired,
    max: PropTypes.arrayOf(TypeValidator.arrayOf(3)).isRequired,
  }).isRequired,

  // Events
  onScrollChanged: PropTypes.func
};

ScrollView.defaultProps = {
  ...UiNode.DefaultProps,

  scrollBarVisibility: ScrollBarVisibility.auto,
  scrollDirection: ScrollDirection.vertical,
  scrollSpeed: 0.1,
  scrollValue: 0,
};
