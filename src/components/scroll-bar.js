import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function ScrollBar(props) {
  return React.createElement("scrollBar", mapProperties("ScrollBar", props));
}

ScrollBar.propTypes = {
  ...UiNode.PropTypes
};

ScrollBar.defaultProps = {
  ...UiNode.DefaultProps
};