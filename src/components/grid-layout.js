import React from "react";
import PropTypes from "prop-types";
import { UiLayout } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";
import { Alignment } from "./types/enums";

export function GridLayout(props) {
  return React.createElement("gridLayout", mapProperties("GridLayout", props));
}

GridLayout.propTypes = {
  ...UiLayout.PropTypes,

  // Properties
  rows: PropTypes.number,
  columns: PropTypes.number,
  defaultItemAlignment: AlignmentProp,
  defaultItemPadding: PropTypes.number,
  skipInvisibleItems: PropTypes.bool,
};

GridLayout.defaultProps = {
  ...UiLayout.DefaultProps,

  rows: 0,
  columns: 0,
  defaultItemAlignment: Alignment.topLeft,
  defaultItemPadding: [0, 0, 0, 0],
  skipInvisibleItems: true
};