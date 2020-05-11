import { componentInternalProperties } from './internal-properties.js';
import { getPropertyValue } from './property-mappers.js';

import {
  mapBoundsSize,
  mapFontParameters,
  mapSize,
  mapProgressColor
} from './property-mappers.js';

function setPropertyMapper (propertyName) {
  return (properties) => getPropertyValue(properties, propertyName);
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