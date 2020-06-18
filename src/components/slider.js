import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function Slider(props) {
  return React.createElement("slider", mapProperties("Slider", props));
}

Slider.propTypes = {
  ...UiNode.PropTypes
};

Slider.defaultProps = {
  ...UiNode.DefaultProps
};