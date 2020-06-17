import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";
import { ColorProp } from "./common-props";

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
  textColor: ColorProp,
  fontSize: PropTypes.number,
  iconSize: PropTypes.arrayOf(TypeValidator.arrayOf(2)),
  iconColor: ColorProp,
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
