import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function TimePicker(props) {
  return React.createElement("timePicker", mapProperties("TimePicker", props));
}

TimePicker.propTypes = {
  ...UiNode.PropTypes
};

TimePicker.defaultProps = {
  ...UiNode.DefaultProps
};