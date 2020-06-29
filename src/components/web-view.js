import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function WebView(props) {
  return React.createElement("webView", mapProperties("WebView", props));
}

WebView.propTypes = {
  ...UiNode.PropTypes
};

WebView.defaultProps = {
  ...UiNode.DefaultProps
};