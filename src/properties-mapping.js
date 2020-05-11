import { componentInternalProperties } from './internal-properties.js';
import { getPropertyValue } from './property-mappers.js';

import {
  mapBoundsSize,
  mapFontParameters,
  mapSize,
  mapProgressColor
} from './property-mappers.js';

function setPropertyMapper (name) {
  return (properties) => getPropertyValue(properties, name);
}

// Provides map-function or name for each renamed internalProperty !
const propertyMapper = {
  // TransformNode
  localPosition: setPropertyMapper('position'),
  localRotation: setPropertyMapper('rotation'),
  localScale: setPropertyMapper('scale'),
  localTransform: setPropertyMapper('transform'),
  // Audio
  fileName: setPropertyMapper('path'),
  soundLooping: setPropertyMapper('looping'),
  soundMute: setPropertyMapper('mute'),
  soundPitch: setPropertyMapper('pitch'),
  soundVolumeLinear: setPropertyMapper('volume'),
  streamedFileOffset: setPropertyMapper('seekTo'),
  // Model
  modelPath: setPropertyMapper('path'),
  // Quad, Spinner
  size: mapSize,
  // Video
  timedTextPath: setPropertyMapper('subtitlePath'),
  videoPath: setPropertyMapper('path'),
  // ListView
  scrollingEnabled: setPropertyMapper('scrollEnabled'),
  // DropdownList
  textSize: setPropertyMapper('fontSize'),
  listTextSize: setPropertyMapper('listFontSize'),
  // UiNode
  alignment: setPropertyMapper('anchorPoint'),
  // RectLayout
  contentAlignment: setPropertyMapper('alignment'),
  // Dialog
  scrolling: setPropertyMapper('scrollEnabled'),
  // ProgressColor
  progressColor: mapProgressColor,
  // Text
  charSpacing: setPropertyMapper('letterSpacing'),
  textAlignment: setPropertyMapper('textAlign'),
  textSize: setPropertyMapper('fontSize'),
  boundsSize: mapBoundsSize,
  fontParameters: mapFontParameters,
  // Button
  labelSide: setPropertyMapper('textSide')
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