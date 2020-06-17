import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";
import { ViewMode } from "./types/enums.js";

import mapProperties from "../properties-mapping.js";

export function Quad(props) {
  return React.createElement("quad", mapProperties("Quad", props));
}

Quad.propTypes = {
  ...UiNode.PropTypes,

  width: PropTypes.number,
  height: PropTypes.number,
  viewMode: PropTypes.oneOf(Object.values(ViewMode)),
  texCoords: PropTypes.arrayOf(TypeValidator.arrayOf(4))
};

Quad.defaultProps = {
  ...UiNode.DefaultProps,

  width: 0,
  height: 0,
  viewMode: ViewMode.fullArea,
  texCoords: [0, 0, 0, 0],
};
