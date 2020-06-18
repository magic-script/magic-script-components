import React from "react";
import { TransformNode } from './types/transform-node.js';
import mapProperties from '../properties-mapping.js';

export function Prism(props) {
  return React.createElement("prism", mapProperties("Prism", props));
}

Prism.propTypes = {
  ...TransformNode.PropTypes
};

Prism.defaultProps = {
  ...TransformNode.DefaultProps
};