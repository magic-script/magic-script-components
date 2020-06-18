import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function DatePicker(props) {
  return React.createElement("datePicker", mapProperties("DatePicker", props));
}

DatePicker.propTypes = {
  ...UiNode.PropTypes
};

DatePicker.defaultProps = {
  ...UiNode.DefaultProps
};