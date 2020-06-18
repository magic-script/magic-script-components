import React from "react";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function ListViewItem(props) {
  return React.createElement("listViewItem", mapProperties("ListViewItem", props));
}

ListViewItem.propTypes = {
  ...UiNode.PropTypes
};

ListViewItem.defaultProps = {
  ...UiNode.DefaultProps
};