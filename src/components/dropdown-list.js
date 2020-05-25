import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";

import mapProperties from "../properties-mapping.js";

export function DropdownList(props) {
  return React.createElement(
    "dropdownList",
    mapProperties("DropdownList", props)
  );
}

DropdownList.propTypes = {
  ...UiNode.PropTypes,

  text: PropTypes.string,
  textColor: PropTypes.oneOfType([
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
  fontSize: PropTypes.number,
  iconSize: PropTypes.arrayOf(TypeValidator.arrayOf(2)),
  iconColor: PropTypes.oneOfType([
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
  listMaxHeight: PropTypes.number,
  listFontSize: PropTypes.number,
  maxCharacterLimit: PropTypes.number,
  multiSelect: PropTypes.bool,
  selected: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, selected: PropTypes.bool })
  ),
  showList: PropTypes.bool,
};

DropdownList.defaultProps = {
  ...UiNode.DefaultProps,

  text: "",
  textColor: "white",
  fontSize: 0.08,
  iconSize: [0.05, 0.05],
  iconColor: "white",
  listMaxHeight: 0,
  listFontSize: 0,
  maxCharacterLimit: 0,
  multiSelect: false,
  selected: [],
  showList: false,
};
