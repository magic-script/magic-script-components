import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function Line(props) {
  return React.createElement("line", mapProperties("Line", props));
}

Line.propTypes = {
  ...UiNode.PropTypes
};

Line.defaultProps = {
  ...UiNode.DefaultProps
};