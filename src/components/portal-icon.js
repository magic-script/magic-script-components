import React from 'react';
import PropTypes from 'prop-types';
import mapProperties from '../properties-mapping.js';

export function PortalIcon(props) {
  return React.createElement('portalIcon', mapProperties('PortalIcon', props));
}

PortalIcon.propTypes = {
};

PortalIcon.defaultProps = {
};