import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";

import mapProperties from "../properties-mapping.js";
import {
  Alignment,
  CursorEdgeScrollMode,
  Orientation,
  ScrollBarVisibility,
} from "./types/enums.js";

export function ListView(props) {
  return React.createElement("listView", mapProperties("ListView", props));
}

ListView.propTypes = {
  ...UiNode.PropTypes,

  width: PropTypes.number,
  height: PropTypes.number,
  itemPadding: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      padding: PropTypes.arrayOf(TypeValidator.arrayOf(4, "number")),
    })
  ),
  itemAlignment: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      alignment: PropTypes.oneOf(Object.values(Alignment)),
    })
  ),
  skipInvisibleItems: PropTypes.bool,
  defaultItemAlignment: PropTypes.oneOf(Object.values(Alignment)),
  defaultItemPadding: PropTypes.arrayOf(TypeValidator.arrayOf(4, "number")),
  scrollingEnabled: PropTypes.bool,

  cursorEdgeScrollMode: PropTypes.oneOf(Object.values(CursorEdgeScrollMode)),

  scrollSpeed: PropTypes.number,
  scrollValue: PropTypes.number,
  scrollToItem: PropTypes.number,

  orientation: PropTypes.oneOf(Object.values(Orientation)),
  scrollBarVisibility: PropTypes.oneOf(Object.values(ScrollBarVisibility)),
};

ListView.defaultProps = {
  ...UiNode.DefaultProps,

  width: 0,
  height: 0,
  itemPadding: [],
  itemAlignment: [],
  skipInvisibleItems: false,
  defaultItemAlignment: Alignment.topLeft,
  defaultItemPadding: [0, 0, 0, 0],
  scrollingEnabled: false,
  cursorEdgeScrollMode: CursorEdgeScrollMode.never,
  scrollSpeed: 0,
  scrollValue: 0,
  scrollToItem: 0,
  orientation: Orientation.horizontal,
  scrollBarVisibility: ScrollBarVisibility.off,
};
