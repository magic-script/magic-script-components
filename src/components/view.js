import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function View(props) {
  return React.createElement("view", mapProperties("View", props));
}

View.propTypes = {
  ...UiNode.PropTypes
};

View.defaultProps = {
  ...UiNode.DefaultProps
};