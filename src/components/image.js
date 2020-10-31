import React from "react";
import PropTypes from "prop-types";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";

export function Image(props) {
  return React.createElement("image", mapProperties("Image", props));
}

Image.propTypes = {
  ...UiNode.PropTypes,

  path: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Image.defaultProps = {
  ...UiNode.DefaultProps
};
