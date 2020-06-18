import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function Image(props) {
  return React.createElement("image", mapProperties("Image", props));
}

Image.propTypes = {
  ...UiNode.PropTypes
};

Image.defaultProps = {
  ...UiNode.DefaultProps
};