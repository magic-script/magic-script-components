import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function GridLayout(props) {
  return React.createElement("gridLayout", mapProperties("GridLayout", props));
}

GridLayout.propTypes = {
  ...UiNode.PropTypes
};

GridLayout.defaultProps = {
  ...UiNode.DefaultProps
};