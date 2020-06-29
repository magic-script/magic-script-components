import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function Toggle(props) {
  return React.createElement("toggle", mapProperties("Toggle", props));
}

Toggle.propTypes = {
  ...UiNode.PropTypes
};

Toggle.defaultProps = {
  ...UiNode.DefaultProps
};