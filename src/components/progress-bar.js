import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";

import mapProperties from "../properties-mapping.js";

export function ProgressBar(props) {
  return React.createElement(
    "progressBar",
    mapProperties("ProgressBar", props)
  );
}

ProgressBar.propTypes = {
  ...UiNode.PropTypes,

  beginColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(TypeValidator.arrayOf(4)),
    PropTypes.exact({
      h: PropTypes.number.isRequired,
      s: PropTypes.number.isRequired,
      l: PropTypes.number.isRequired,
    }),
    PropTypes.exact({
      l: PropTypes.number.isRequired,
      c: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
    }),
    PropTypes.exact({
      c: PropTypes.number.isRequired,
      m: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      k: PropTypes.number.isRequired,
    }),
    PropTypes.exact({
      r: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
      a: PropTypes.number.isRequired,
      type: PropTypes.string,
    }),
  ]),
  endColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(TypeValidator.arrayOf(4)),
    PropTypes.exact({
      h: PropTypes.number.isRequired,
      s: PropTypes.number.isRequired,
      l: PropTypes.number.isRequired,
    }),
    PropTypes.exact({
      l: PropTypes.number.isRequired,
      c: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
    }),
    PropTypes.exact({
      c: PropTypes.number.isRequired,
      m: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      k: PropTypes.number.isRequired,
    }),
    PropTypes.exact({
      r: PropTypes.number.isRequired,
      g: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
      a: PropTypes.number.isRequired,
      type: PropTypes.string,
    }),
  ]),

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
