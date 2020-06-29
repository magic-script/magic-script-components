import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function ScrollView(props) {
  return React.createElement("scrollView", mapProperties("ScrollView", props));
}

ScrollView.propTypes = {
  ...UiNode.PropTypes
};

ScrollView.defaultProps = {
  ...UiNode.DefaultProps
};