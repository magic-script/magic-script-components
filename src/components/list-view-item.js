import React from 'react';
import PropTypes from 'prop-types';
import { UiNode } from './types/ui-node.js';
import mapProperties from '../properties-mapping.js';
import { ColorProp } from './common-props.js';

export function ListViewItem(props) {
  return React.createElement('listViewItem', mapProperties('ListViewItem', props));
}

ListViewItem.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  backgroundColor: ColorProp
};

ListViewItem.defaultProps = {
  ...UiNode.DefaultProps
};
