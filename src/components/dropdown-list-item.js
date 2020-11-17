import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { ColorProp } from './common-props';

export function DropdownListItem(props) {
  return React.createElement('dropdownListItem', mapProperties('DropdownListItem', props));
}

DropdownListItem.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  id: PropTypes.number,
  label: PropTypes.string,
  selected: PropTypes.bool
};

DropdownListItem.defaultProps = {
  ...UiNode.DefaultProps,

  id: 0,
  label: '',
  selected: false
};