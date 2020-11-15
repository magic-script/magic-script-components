import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function Light(props) {
  return React.createElement("light", mapProperties("Light", props));
}

Light.propTypes = {
  ...UiNode.PropTypes
};

Light.defaultProps = {
  ...UiNode.DefaultProps
};
