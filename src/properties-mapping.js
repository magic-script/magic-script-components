import { componentInternalProperties } from './internal-properties.js';
import { getPropertyValue } from './property-mappers.js';

import {
  mapBoundsSize,
  mapFontParameters
} from './property-mappers.js';

function setPropertyMapper (name) {
  return (properties) => getPropertyValue(properties, name);
}

// Provides map-function or name for each internalProperty
const propertyMapper = {
  // TransformNode
  localPosition: setPropertyMapper('position'),
  localRotation: (publicProperties) => getPropertyValue(publicProperties, 'rotation'),
  localScale: (publicProperties) => getPropertyValue(publicProperties, 'scale'),
  localTransform: (publicProperties) => getPropertyValue(publicProperties, 'transform'),
  // UiNode
  alignment: (publicProperties) => getPropertyValue(publicProperties, 'anchorPoint'),
  // Text
  boundsSize: mapBoundsSize,
  charSpacing: (publicProperties) => getPropertyValue(publicProperties, 'letterSpacing'),
  fontParameters: mapFontParameters,
  textAlignment: (publicProperties) => getPropertyValue(publicProperties, 'textAlign'),
  // TODO: How to handle cases when the same property (fontSize) is used in multiple places?
  // (e.g. as textSize and in fontParameters.fontSize)
  textSize: (publicProperties) => getPropertyValue(publicProperties, 'fontSize'),
}

// Generic function for assembling internal properties from the public properties
function mapComponentProperties(internalPropertiesNames, publicProperties) {
  const internalProperties = {};
  
  internalPropertiesNames.forEach(name => {
    const mapper = propertyMapper[name];
    const value = (typeof mapper === 'function')
      ? mapper(publicProperties)
      : getPropertyValue(publicProperties, name);

    if (value !== undefined) {
      internalProperties[name] = value
    }
  });

  return internalProperties;
}

// Custom mapping function for Button component
// function mapButtonProperties(publicProperties) {
//   const internalProperties = {};
//   // Custom mapping code from publicProperties ...
//   return internalProperties;
// }

// Provides map-function for each component
const componentPropertyMapper = {
  Text: (properties) => mapComponentProperties(componentInternalProperties['Text'], properties), // Generic map-function
  //Button: mapButtonProperties // Custom map-function for the Button
}

// Usage:
// const internalProperties = mapProperties('Text', publicProperties);
export default function mapProperties(componentName, properties) {
  return componentPropertyMapper[componentName](properties);
}