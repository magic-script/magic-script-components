function mapBoundsSize (publicProperties) {
  return {
    boundsSize: [publicProperties.width, publicProperties.height],
    wrap: publicProperties.multiline
  };
}

// Provides map-function or name for each internalProperty
const propertyMapper = {
  alignment: 'anchorPoint', // Generic mapping for properties having different names only!
  boundsSize: mapBoundsSize // Custom map-function for boundsSize
}

// Property name list for the base components
const transformInternalProperties = ['localPosition', 'localRotation'];
const uiInternalProperties = [...transformInternalProperties, 'alignment', 'enabled'];

// Provides list of the internal property names per component
const componentInternalProperties = {
  Text: [...uiInternalProperties, 'boundsSize', 'allCaps'],
  Button: [...uiInternalProperties, 'iconSize', 'iconColor']
}

// Generic function for assembling internal properties from the public properties
function mapComponentProperties(internalPropertiesNames, publicProperties) {
  const internalProperties = {};
  internalPropertiesNames.forEach( name => {
    internalProperties[name] = (typeof propertyMapper[name] === 'function')
      ? propertyMapper[name](publicProperties)
      : publicProperties[name];
  });
  return internalProperties;
}

// Custom mapping function for Button component
function mapButtonProperties(publicProperties) {
  const internalProperties = {};
  // Custom mapping code from publicProperties ...
  return internalProperties;
}

// Provides map-function for each component
const componentPropertyMapper = {
  Text: (properties) => mapComponentProperties(componentInternalProperties['Text'], properties), // Generic map-function
  Button: mapButtonProperties // Custom map-function for the Button
}

// Usage:
// const internalProperties = mapProperties('Text', publicProperties);
export default function mapProperties (componentName, properties) {
    return componentPropertyMapper[componentName](properties);
}