import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";
import { ColorProp } from "./common-props";
import mapProperties from "../properties-mapping.js";

export function ProgressBar(props) {
  return React.createElement(
    "progressBar",
    mapProperties("ProgressBar", props)
  );
}

ProgressBar.propTypes = {
  ...UiNode.PropTypes,

  beginColor: ColorProp,
  endColor: ColorProp,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

ProgressBar.defaultProps = {
  ...UiNode.DefaultProps,

  progressColor: { beginColor: "white", endColor: "black" },
  min: 0,
  max: 1,
  value: 0,
  width: 0,
  height: 0,
};
