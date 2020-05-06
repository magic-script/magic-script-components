import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import { FontStyle, FontWeight, TextAlign } from './types/enums.js';
import mapProperties from '../properties-mapping.js';

export function Text (props) {
  const internalProperties = mapProperties('Text', props);
  console.log('Text: ', props, internalProperties)
  return React.createElement('text', internalProperties);
}

Text.propTypes = {
  ...UiNode.PropTypes,

  children: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf([TextAlign.left, TextAlign.center, TextAlign.right]),
  textColor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(TypeValidator.arrayOf(4)),
      PropTypes.exact({ 
        h:PropTypes.number.isRequired,
        s: PropTypes.number.isRequired,
        l: PropTypes.number.isRequired
      }),
      PropTypes.exact({
        l: PropTypes.number.isRequired,
        c: PropTypes.number.isRequired,
        h: PropTypes.number.isRequired
      }),
      PropTypes.exact({
        c: PropTypes.number.isRequired,
        m: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        k: PropTypes.number.isRequired
      }),
      PropTypes.exact({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        a: PropTypes.number.isRequired,
        type: PropTypes.string
      }),
    ]),
  width: PropTypes.number,
  height: PropTypes.number,
  multiline: PropTypes.bool,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOf([
    FontWeight.extraLight,
    FontWeight.light,
    FontWeight.regular,
    FontWeight.medium,
    FontWeight.bold,
    FontWeight.extraBold
  ]),
  fontStyle: PropTypes.oneOf([FontStyle.normal, FontStyle.italic]),
  letterSpacing: PropTypes.number,
  lineSpacing: PropTypes.number,
  allCaps: PropTypes.bool,
}

Text.defaultProps = {
  ...UiNode.DefaultProps,

  children: '',
  textAlign: TextAlign.left,
  textColor: 'white',
  width: 0,
  height: 0,
  multiline: false,
  fontSize: 0.08,
  fontWeight: FontWeight.regular,
  fontStyle: FontStyle.normal,
  letterSpacing: 0.0,
  lineSpacing: 1.0,
  allCaps: false
}
