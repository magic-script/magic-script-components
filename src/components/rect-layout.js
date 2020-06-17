import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";

import mapProperties from "../properties-mapping.js";
import { Alignment } from "./types/enums.js";

export function RectLayout(props) {
  return React.createElement("rectLayout", mapProperties("RectLayout", props));
}

RectLayout.propTypes = {
  ...UiNode.PropTypes,

  alignment: PropTypes.oneOf(Object.values(Alignment)),
  padding: PropTypes.arrayOf(TypeValidator.arrayOf(4, "number"))
};

RectLayout.defaultProps = {
  ...UiNode.DefaultProps,

  alignment: Alignment.topLeft,
  padding: [0, 0, 0, 0]
};
