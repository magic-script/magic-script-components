import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function LinearLayout(props) {
  return React.createElement("linearLayout", mapProperties("LinearLayout", props));
}

LinearLayout.propTypes = {
  ...UiNode.PropTypes
};

LinearLayout.defaultProps = {
  ...UiNode.DefaultProps
};