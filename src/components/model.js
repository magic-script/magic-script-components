import React from "react";
import PropTypes from "prop-types";
import { UiNode } from "./types/ui-node.js";
import mapProperties from "../properties-mapping.js";

export function Model(props) {
  return React.createElement("model", mapProperties("Model", props));
}

Model.propTypes = {
  ...UiNode.PropTypes,

  path: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  materialPath: PropTypes.string,
  animationPauseState: PropTypes.bool,
  animationPlaybackSpeed: PropTypes.number,
  animationTime: PropTypes.number,
  resourceId: PropTypes.number, 
  importScale: PropTypes.number,
  animation: PropTypes.shape({
    resourceId: PropTypes.number,
    name: PropTypes.string,
    paused: PropTypes.bool,
    loops: PropTypes.number,
  }),
  texture: PropTypes.shape({
    textureId: PropTypes.number,
    textureSlot: PropTypes.string,
    materialName: PropTypes.string,
  }),
};

Model.defaultProps = {
  ...UiNode.DefaultProps,

  materialPath: "",
  animationPauseState: false,
  animationPlaybackSpeed: 1.0,
  animationTime: 0.0,
  modelResourceId: 0,
  importScale: 1.0,
  animation: { resourceId: 0, name: "", paused: false, loops: 1 },
  texture: { textureId: 0, textureSlot: "", materialName: "" },
};
