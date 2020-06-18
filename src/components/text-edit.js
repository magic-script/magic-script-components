import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function TextEdit(props) {
  return React.createElement("textEdit", mapProperties("TextEdit", props));
}

TextEdit.propTypes = {
  ...UiNode.PropTypes
};

TextEdit.defaultProps = {
  ...UiNode.DefaultProps
};