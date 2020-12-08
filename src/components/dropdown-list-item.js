import React from 'react';
import PropTypes from 'prop-types';
import mapProperties from '../properties-mapping.js';

export function DropdownListItem(props) {
  return React.createElement('dropdownListItem', mapProperties('DropdownListItem', props));
}

DropdownListItem.propTypes = {
  // Properties
  id: PropTypes.number,
  label: PropTypes.string
};

DropdownListItem.defaultProps = {
  id: 0,
  label: ''
};