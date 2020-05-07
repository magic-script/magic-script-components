import React from 'react'
import PropTypes from 'prop-types'
import { TypeValidator } from './util/type-validators.js';
import { UiNode } from './types/ui-node.js';
import { Side, SystemIcon } from './types/enums.js';
import mapProperties from '../properties-mapping.js';

export function Button (props) {
  const internalProperties = mapProperties('Button', props);
  console.log('Button: ', props, internalProperties)
  return React.createElement('button', internalProperties);
}

Button.propTypes = {
  ...UiNode.PropTypes,

  children: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  outline: PropTypes.bool,
  fontSize: PropTypes.number,
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
  textSide: PropTypes.oneOf([
    Side.bottom,
    Side.left,
    Side.right,
    Side.top
  ]),
  iconColor: PropTypes.oneOfType([
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
  iconPath: PropTypes.string,
  iconSize: PropTypes.arrayOf(TypeValidator.arrayOf(2)),
  iconType: PropTypes.oneOf([
      SystemIcon
  ])
}

Button.defaultProps = {
  ...UiNode.DefaultProps,

  children: '',
  width: 0,
  height: 0,
  outline: false,
  fontSize: 0.08,
  textColor: 'white',
  textSide: Side.left,
  iconColor: 'white',
  iconSize: 0.08,
}
