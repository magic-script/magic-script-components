import React from 'react';
import PropTypes from 'prop-types';
import mapProperties from '../properties-mapping.js';
import { UiNode } from './types/ui-node.js';
import { TypeValidator } from './util/type-validators.js';

export function WebView(props) {
  return React.createElement('webView', mapProperties('WebView', props));
}

WebView.propTypes = {
  ...UiNode.PropTypes,

  // Properties
  scrollBy: PropTypes.arrayOf(TypeValidator.arrayOf(2)),
  url: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

WebView.defaultProps = {
  ...UiNode.DefaultProps,
};