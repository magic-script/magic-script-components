import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from './util/type-validators.js';
import { UiLayout } from './types/ui-layout.js';
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
  defaultItemAlignment: PropTypes.oneOf(Object.values(Alignment)),
  defaultItemPadding: PropTypes.arrayOf(TypeValidator.arrayOf(4)),
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