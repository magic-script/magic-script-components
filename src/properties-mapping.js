
function extractValue(properties, key, defaultValue = undefined) {
  const style = properties.style;
  if (style !== undefined && style[key] !== undefined) {
    return style[key];
  }

  return (properties[key] !== undefined) ? properties[key] : defaultValue;
}

function mapBoundsSize(publicProperties) {
  var width = extractValue(publicProperties, 'width');
  var height = extractValue(publicProperties, 'height');
  var multiline = extractValue(publicProperties, 'multiline');
  if (width === undefined && height === undefined && multiline === undefined) {
    return undefined;
  }

  if (width === undefined) { width = 0 }
  if (height === undefined) { height = 0 }
  if (multiline === undefined) { multiline = false }

  // TODO: What if any of the prop (width, height, multiplie) is undefined? The app on Lumin will crash, won't it?
  // Should we provide default values in such cases?
  return {
    boundsSize: [width, height],
    wrap: multiline
  };
}

function mapFontParameters(publicProperties) {
  var fontStyle = extractValue(publicProperties, 'fontStyle');
  var fontWeight = extractValue(publicProperties, 'fontWeight');
  var fontSize = extractValue(publicProperties, 'fontSize');
  var allCaps = extractValue(publicProperties, 'allCaps');
  if (fontStyle === undefined && fontWeight === undefined && fontSize === undefined && allCaps === undefined) {
    return undefined;
  }

  // TODO: How to handle default values?
  if (fontStyle === undefined) { fontStyle = 'normal' }
  if (fontWeight === undefined) { fontWeight = 'regular' }
  if (fontSize === undefined) { fontSize = 0.08 }
  if (allCaps === undefined) { allCaps = false }

  return { fontStyle, fontWeight, fontSize, allCaps };
}

// Provides map-function or name for each internalProperty
const propertyMapper = {
  // TransformNode
  localPosition: 'position',
  localRotation: 'rotation',
  localScale: 'scale',
  localTransform: 'transform',
  // UiNode
  alignment: 'anchorPoint',
  // Text
  boundsSize: mapBoundsSize,
  charSpacing: 'letterSpacing',
  fontParameters: mapFontParameters,
  textAlignment: 'textAlign',
  // TODO: How to handle cases when the same property (fontSize) is used in multiple places?
  // (e.g. as textSize and in fontParameters.fontSize)
  textSize: 'fontSize',
}

// Property name list for the base components
const nodeInternalProperties = ['debug', 'children', 'name', 'visible', 'skipRaycast'];
const transformNodeInternalProperties = [...nodeInternalProperties, 'localPosition', 'localRotation', 'localScale', 'localTransform', 'anchorPosition'];
const renderNodeInternalProperties = [...transformNodeInternalProperties, 'color', 'isOpaque'];
const uiNodeInternalProperties = [...transformNodeInternalProperties, 'alignment', 'enabled', 'hideBounds'];
const uiLayoutInternalProperties = [...uiNodeInternalProperties, 'width', 'height'];

// Provides list of the internal property names per component
const componentInternalProperties = {
  Text: [...uiNodeInternalProperties, 'textAlignment', 'textColor', 'letterSpacing', 'lineSpacing', 'fontParameters', 'boundsSize'],
  Button: [...uiNodeInternalProperties, 'iconSize', 'iconColor']
}

// Generic function for assembling internal properties from the public properties
function mapComponentProperties(internalPropertiesNames, publicProperties) {
  const internalProperties = {};
  internalPropertiesNames.forEach(name => {
    const mapperValue = propertyMapper[name];
    var value = undefined;
    if (typeof mapperValue === 'function') {
      value = mapperValue(publicProperties);
    } else if ((typeof mapperValue === 'string')) {
      value = extractValue(publicProperties, mapperValue);
    } else {
      value = extractValue(publicProperties, name);
      if (value !== undefined) {
        console.log('Unchanged property: ', name, value);
      }
    }

    if (value !== undefined) {
      internalProperties[name] = value
    }
  });

  return internalProperties;

  // TODO: Should we allow all public props to pass through if they do not match any of the internal prop?
  // const customPublicProperties = Object.keys(publicProperties)
  //   .filter(name => internalPropertiesNames[name] === undefined)
  //   .reduce((obj, key) => {
  //     obj[key] = publicProperties[key];
  //     return obj;
  //   }, {});

  // return { ...customPublicProperties, ...internalProperties };
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