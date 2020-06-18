import React from "react";
import { TransformNode } from './types/transform-node.js';
import mapProperties from "../properties-mapping.js";

export function Scene(props) {
  return React.createElement("scene", mapProperties("Scene", props));
}

Scene.propTypes = {
  ...TransformNode.PropTypes
};

Scene.defaultProps = {
  ...TransformNode.DefaultProps
};