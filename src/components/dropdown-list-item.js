import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function DropdownListItem(props) {
  return React.createElement("dropdownListItem", mapProperties("DropdownListItem", props));
}

DropdownListItem.propTypes = {
  ...UiNode.PropTypes
};

DropdownListItem.defaultProps = {
  ...UiNode.DefaultProps
};