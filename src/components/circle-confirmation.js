import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function CircleConfirmation(props) {
  return React.createElement("circleConfirmation", mapProperties("CircleConfirmation", props));
}

CircleConfirmation.propTypes = {
  ...UiNode.PropTypes
};

CircleConfirmation.defaultProps = {
  ...UiNode.DefaultProps
};