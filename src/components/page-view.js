import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function PageView(props) {
  return React.createElement("pageView", mapProperties("PageView", props));
}

PageView.propTypes = {
  ...UiNode.PropTypes
};

PageView.defaultProps = {
  ...UiNode.DefaultProps
};