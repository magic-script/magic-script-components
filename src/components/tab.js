import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function Tab(props) {
  return React.createElement("tab", mapProperties("Tab", props));
}

Tab.propTypes = {
  ...UiNode.PropTypes
};

Tab.defaultProps = {
  ...UiNode.DefaultProps
};