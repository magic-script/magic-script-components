import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function PortalIcon(props) {
  return React.createElement("portalIcon", mapProperties("PortalIcon", props));
}

PortalIcon.propTypes = {
  ...UiNode.PropTypes
};

PortalIcon.defaultProps = {
  ...UiNode.DefaultProps
};