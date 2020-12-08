import React from 'react';
import PropTypes from 'prop-types';
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';

import mapProperties from '../properties-mapping.js';
import { SystemIcon, DialogLayout, DialogType, ButtonType } from './types/enums.js';

export function Dialog(props) {
  return React.createElement('dialog', mapProperties('Dialog', props));
}

Dialog.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  buttonType: PropTypes.oneOf(Object.values(ButtonType)),
  cancelText: PropTypes.string,
  cancelIcon: PropTypes.oneOf(Object.values(SystemIcon)),
  confirmText: PropTypes.string,
  confirmIcon: PropTypes.oneOf(Object.values(SystemIcon)),
  expireTime: TypeValidator.range(0, 1000), // value in range 0 to 1000 seconds
  layout: PropTypes.oneOf(Object.values(DialogLayout)),
  message: PropTypes.string,
  scrolling: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(Object.values(DialogType)),

  // Events
  onDialogConfirmed: PropTypes.func,
  onDialogCanceled: PropTypes.func,
  onDialogTimeExpired: PropTypes.func,
};

Dialog.defaultProps = {
  ...UiNode.DefaultProps,

  buttonType: ButtonType.iconWithLabel,
  expireTime: 0,
  layout: DialogLayout.standard,
  message: '',
  scrolling: false,
  title: '',
  type: DialogType.dualAction,
};
