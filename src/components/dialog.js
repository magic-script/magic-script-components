import React from "react";
import PropTypes from "prop-types";
import { TypeValidator } from "./util/type-validators.js";
import { UiNode } from "./types/ui-node.js";

import mapProperties from "../properties-mapping.js";
import {
  SystemIcon,
  DialogLayout,
  DialogType,
  ButtonType,
} from "./types/enums.js";

export function Dialog(props) {
  return React.createElement("dialog", mapProperties("Dialog", props));
}

Dialog.propTypes = {
  ...UiNode.PropTypes,

  scrolling: PropTypes.bool,

  title: PropTypes.string,
  message: PropTypes.string,

  layout: PropTypes.oneOf(Object.values(DialogLayout)),
  type: PropTypes.oneOf(Object.values(DialogType)),

  buttonType: PropTypes.oneOf(Object.values(ButtonType)),
  cancelText: PropTypes.string,
  cancelIcon: PropTypes.oneOf(Object.values(SystemIcon)),
  confirmText: PropTypes.string,
  confirmIcon: PropTypes.oneOf(Object.values(SystemIcon)),
  expireTime: TypeValidator.range(0, 1000) // value in range 0 to 1000 seconds
};

Dialog.defaultProps = {
  ...UiNode.DefaultProps,

  scrolling: false,

  title: "",
  message: "",

  layout: DialogLayout.standard,
  type: DialogType.dualAction,

  buttonType: ButtonType.iconWithLabel
};
