import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";
import { SpinnerType } from "./types/enums.js";
import mapProperties from "../properties-mapping.js";

export function Spinner(props) {
  return React.createElement("spinner", mapProperties("Spinner", props));
}

Spinner.propTypes = {
  ...UiNode.PropTypes,

  width: PropTypes.number,
  height: PropTypes.number,
  value: PropTypes.number,
  type: PropTypes.oneOf(Object.values(SpinnerType)),
  path: PropTypes.string,
  determinate: PropTypes.bool,
};

Spinner.defaultProps = {
  ...UiNode.DefaultProps,

  width: 0,
  height: 0,

  value: 0,
  type: SpinnerType.spriteAnimation,
  path: "",
  determinate: false,
};
