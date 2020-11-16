import React from "react";
import PropTypes from "prop-types";
import { UiNode } from './types/ui-node.js';
import mapProperties from "../properties-mapping.js";
import { ColorProp } from './common-props';
import { FitMode, SystemIcon } from './types/enums.js'

export function Image(props) {
  return React.createElement("image", mapProperties("Image", props));
}

Image.propTypes = {
  ...UiNode.PropTypes,

  path: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOf(Object.values(SystemIcon)),
  color: ColorProp,
  width: PropTypes.number,
  height: PropTypes.number,
  useFrame: PropTypes.bool,
  fit: PropTypes.oneOf(Object.values(FitMode)),
};

Image.defaultProps = {
  ...UiNode.DefaultProps,

  useFrame: false,
  fit: FitMode.stretch,
};
