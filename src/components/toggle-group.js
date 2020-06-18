import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function ToggleGroup(props) {
  return React.createElement("toggleGroup", mapProperties("ToggleGroup", props));
}

ToggleGroup.propTypes = {
  ...UiNode.PropTypes
};

ToggleGroup.defaultProps = {
  ...UiNode.DefaultProps
};