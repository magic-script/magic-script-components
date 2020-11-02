import { componentInternalProperties } from './internal-properties.js';
import { getPropertyValue } from './property-mappers.js';

import {
  mapBoundsSize,
  mapFontParameters,
  mapSize,
  mapProgressColor
} from './property-mappers.js';

function setPropertyMapper (publicPropertyName) {
  return (properties) => {
    return getPropertyValue(properties, publicPropertyName);
  }
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
  // Image
  filePath: setPropertyMapper('path'),
  // Model
  modelPath: setPropertyMapper('path'),
  modelResourceId: setPropertyMapper('resourceId'),
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
  // ProgressBar
  progressColor: mapProgressColor,
  // Text
  charSpacing: setPropertyMapper('letterSpacing'),
  textAlignment: setPropertyMapper('textAlign'),
  textSize: setPropertyMapper('fontSize'),
  boundsSize: mapBoundsSize,
  fontParameters: mapFontParameters,
  // Button
  labelSide: setPropertyMapper('textSide'),
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

// Provides map-function for each component
const componentPropertyMapper = {
  Audio: setComponentPropertyMapper('Audio'),
  Button: setComponentPropertyMapper('Button'),
  CircleConfirmation: setComponentPropertyMapper('CircleConfirmation'),
  ColorPicker: setComponentPropertyMapper('ColorPicker'),
  Content: setComponentPropertyMapper('Content'),
  DatePicker: setComponentPropertyMapper('DatePicker'),
  Dialog: setComponentPropertyMapper('Dialog'),
  DropdownList: setComponentPropertyMapper('DropdownList'),
  DropdownListItem: setComponentPropertyMapper('DropdownListItem'),
  GridLayout: setComponentPropertyMapper('GridLayout'),
  Image: setComponentPropertyMapper('Image'),
  Light: setComponentPropertyMapper('Light'),
  Line: setComponentPropertyMapper('Line'),
  LinearLayout: setComponentPropertyMapper('LinearLayout'),
  ListView: setComponentPropertyMapper('ListView'),
  ListViewItem: setComponentPropertyMapper('ListViewItem'),
  Model: setComponentPropertyMapper('Model'),
  PageView: setComponentPropertyMapper('PageView'),
  Panel: setComponentPropertyMapper('Panel'),
  PortalIcon: setComponentPropertyMapper('PortalIcon'),  
  Prism: setComponentPropertyMapper('Prism'),
  ProgressBar: setComponentPropertyMapper('ProgressBar'),
  Quad: setComponentPropertyMapper('Quad'),
  RectLayout: setComponentPropertyMapper('RectLayout'),
  Scene: setComponentPropertyMapper('Scene'),
  ScrollBar: setComponentPropertyMapper('ScrollBar'),
  ScrollView: setComponentPropertyMapper('ScrollView'),
  Slider: setComponentPropertyMapper('Slider'),
  Spinner: setComponentPropertyMapper('Spinner'),
  Tab: setComponentPropertyMapper('Tab'),
  Text: setComponentPropertyMapper('Text'),
  TextEdit: setComponentPropertyMapper('TextEdit'),
  TimePicker: setComponentPropertyMapper('TimePicker'),
  Toggle: setComponentPropertyMapper('Toggle'),
  ToggleGroup: setComponentPropertyMapper('ToggleGroup'),
  Video: setComponentPropertyMapper('Video'),
  View: setComponentPropertyMapper('View'),
  WebView: setComponentPropertyMapper('WebView'),
  //Custom: mapCustomProperties
}

// Usage:
// const internalProperties = mapProperties('Text', publicProperties);
export default function mapProperties(componentName, properties) {
  return componentPropertyMapper[componentName](properties);
}