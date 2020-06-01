import { componentInternalProperties } from './internal-properties.js';
import { getPropertyValue } from './property-mappers.js';

import {
  mapBoundsSize,
  mapFontParameters,
  mapSize,
  mapProgressColor
} from './property-mappers.js';

function setPropertyMapper (propertyName, oldApiPropertyName) {
  return (properties) => getPropertyValue(properties, oldApiPropertyName, getPropertyValue(properties, propertyName))
}

// Provides map-function or name for each renamed internalProperty !
const propertyMapper = {
  // TransformNode
  localPosition: setPropertyMapper('position', 'localPosition'),
  localRotation: setPropertyMapper('rotation', 'localRotation'),
  localScale: setPropertyMapper('scale', 'localScale'),
  localTransform: setPropertyMapper('transform', 'localTransform'),
  // Audio
  fileName: setPropertyMapper('path', 'fileName'),
  soundLooping: setPropertyMapper('looping', 'soundLooping'),
  soundMute: setPropertyMapper('mute', 'soundMute'),
  soundPitch: setPropertyMapper('pitch', 'soundPitch'),
  soundVolumeLinear: setPropertyMapper('volume', 'soundVolumeLinear'),
  streamedFileOffset: setPropertyMapper('seekTo', 'streamedFileOffset'),
  // Model
  modelPath: setPropertyMapper('path', 'modelPath'),
  modelResourceId: setPropertyMapper('resourceId', 'modelResourceId'),
  // Quad, Spinner
  size: mapSize,
  // Video
  timedTextPath: setPropertyMapper('subtitlePath', 'timedTextPath'),
  videoPath: setPropertyMapper('path', 'videoPath'),
  // ListView
  scrollingEnabled: setPropertyMapper('scrollEnabled', 'scrollingEnabled'),
  // DropdownList
  textSize: setPropertyMapper('fontSize', 'textSize'),
  listTextSize: setPropertyMapper('listFontSize', 'listTextSize'),
  // UiNode
  alignment: setPropertyMapper('anchorPoint', 'alignment'),
  // RectLayout
  contentAlignment: setPropertyMapper('alignment', 'contentAlignment'),
  // Dialog
  scrolling: setPropertyMapper('scrollEnabled', 'scrolling'),
  // ProgressBar
  progressColor: mapProgressColor,
  // Text
  charSpacing: setPropertyMapper('letterSpacing', 'charSpacing'),
  textAlignment: setPropertyMapper('textAlign', 'textAlignment'),
  textSize: setPropertyMapper('fontSize', 'textSize'),
  boundsSize: mapBoundsSize,
  fontParameters: mapFontParameters,
  // Button
  labelSide: setPropertyMapper('textSide', 'labelSide'),
}

// Generic function for assembling internal properties from the public properties
function mapComponentProperties (internalPropertiesNames, publicProperties) {
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

function setComponentPropertyMapper (componentName) {
  return (publicProperties) => mapComponentProperties(componentInternalProperties[componentName], publicProperties);
}

// Custom mapping function for Button component
// function mapButtonProperties(publicProperties) {
//   const internalProperties = {};
//   // Custom mapping code from publicProperties ...
//   return internalProperties;
// }

// Provides map-function for each component
const componentPropertyMapper = {
  Scene: setComponentPropertyMapper('Scene'),
  Prism: setComponentPropertyMapper('Prism'),
  Audio: setComponentPropertyMapper('Audio'),
  Light: setComponentPropertyMapper('Light'),
  Line: setComponentPropertyMapper('Line'),
  Model: setComponentPropertyMapper('Model'),
  Quad: setComponentPropertyMapper('Quad'),
  Video: setComponentPropertyMapper('Video'),
  RectLayout: setComponentPropertyMapper('RectLayout'),
  LinearLayout: setComponentPropertyMapper('LinearLayout'),
  GridLayout: setComponentPropertyMapper('GridLayout'),
  Panel: setComponentPropertyMapper('Panel'),
  View: setComponentPropertyMapper('View'),
  WebView: setComponentPropertyMapper('WebView'),
  PageView: setComponentPropertyMapper('PageView'),
  ScrollView: setComponentPropertyMapper('ScrollView'),
  ScrollBar: setComponentPropertyMapper('ScrollBar'),
  ListView: setComponentPropertyMapper('ListView'),
  ListViewItem: setComponentPropertyMapper('ListViewItem'),
  DropdownList: setComponentPropertyMapper('DropdownList'),
  Text: setComponentPropertyMapper('Text'),
  TextEdit: setComponentPropertyMapper('TextEdit'),
  Button: setComponentPropertyMapper('Button'),
  Tab: setComponentPropertyMapper('Tab'),
  ProgressBar: setComponentPropertyMapper('ProgressBar'),
  Slider: setComponentPropertyMapper('Slider'),
  Spinner: setComponentPropertyMapper('Spinner'),
  Dialog: setComponentPropertyMapper('Dialog'),
  Image: setComponentPropertyMapper('Image'),
  Toggle: setComponentPropertyMapper('Toggle'),
  ToggleGroup: setComponentPropertyMapper('ToggleGroup'),
  CircleConfirmation: setComponentPropertyMapper('CircleConfirmation'),
  ColorPicker: setComponentPropertyMapper('ColorPicker'),
  DatePicker: setComponentPropertyMapper('DatePicker'),
  TimePicker: setComponentPropertyMapper('TimePicker')
  //Custom: mapCustomProperties
}

// Usage:
// const internalProperties = mapProperties('Text', publicProperties);
export default function mapProperties(componentName, properties) {
  return componentPropertyMapper[componentName](properties);
}