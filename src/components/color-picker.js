import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function ColorPicker(props) {
  return React.createElement("colorPicker", mapProperties("ColorPicker", props));
}

ColorPicker.propTypes = {
  ...UiNode.PropTypes
};

ColorPicker.defaultProps = {
  ...UiNode.DefaultProps
};