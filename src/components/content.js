import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function Content(props) {
  return React.createElement("content", mapProperties("Content", props));
}

Content.propTypes = {
  ...UiNode.PropTypes
};

Content.defaultProps = {
  ...UiNode.DefaultProps
};