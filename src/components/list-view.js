import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { Alignment, CursorEdgeScrollMode, Orientation, ScrollBarVisibility } from './types/enums.js';

export function ListView(props) {
  return React.createElement('listView', mapProperties('ListView', props));
}

ListView.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  width: PropTypes.number,
  height: PropTypes.number,
  cursorEdgeScrollMode: PropTypes.oneOf(Object.values(CursorEdgeScrollMode)),
  defaultItemAlignment: PropTypes.oneOf(Object.values(Alignment)),
  defaultItemPadding: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
  itemAlignment: PropTypes.arrayOf(
    PropTypes.exact({
      index: PropTypes.number.isRequired,
      alignment: PropTypes.oneOf(Object.values(Alignment)).isRequired,
    })
  ),
  itemPadding: PropTypes.arrayOf(
    PropTypes.exact({
      index: PropTypes.number.isRequired,
      padding: PropTypes.arrayOf(TypeValidator.arrayOf(4)).isRequired,
    })
  ),
  orientation: PropTypes.oneOf(Object.values(Orientation)),
  scrollBarVisibility: PropTypes.oneOf(Object.values(ScrollBarVisibility)),
  scrollingEnabled: PropTypes.bool,
  scrollSpeed: PropTypes.number,
  scrollValue: PropTypes.number,
  scrollToItem: PropTypes.number,
  skipInvisibleItems: PropTypes.bool,

  // Events
  onScrollChanged: PropTypes.func
};

ListView.defaultProps = {
  ...UiNode.DefaultProps,

  width: 0,
  height: 0,
  cursorEdgeScrollMode: CursorEdgeScrollMode.never,
  defaultItemAlignment: Alignment.topLeft,
  defaultItemPadding: [0, 0, 0, 0],
  orientation: Orientation.vertical,
  scrollBarVisibility: ScrollBarVisibility.always,
  scrollingEnabled: true,
  scrollSpeed: 0.1,
  scrollValue: 0,
  skipInvisibleItems: false,
};
