// Property name list for the base components
const nodeInternalProperties = ['debug', 'children', 'name', 'visible', 'skipRaycast'];
const transformNodeInternalProperties = [...nodeInternalProperties, 'localPosition', 'localRotation', 'localScale', 'localTransform', 'anchorPosition'];
const renderNodeInternalProperties = [...transformNodeInternalProperties, 'color', 'isOpaque'];
const uiNodeInternalProperties = [...transformNodeInternalProperties, 'alignment', 'enabled', 'hideBounds'];
const uiLayoutInternalProperties = [...uiNodeInternalProperties, 'width', 'height'];

// Provides list of the internal property names per component
const componentInternalProperties = {
  Text: [
    ...uiNodeInternalProperties,
    'textAlignment',
    'textColor',
    'letterSpacing',
    'lineSpacing',
    'fontParameters',
    'boundsSize'
  ],
  Button: [
    ...uiNodeInternalProperties,
    'iconSize','iconColor'
  ]
};

export { componentInternalProperties }