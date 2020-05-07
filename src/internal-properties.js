// Property name list for the base components
const nodeInternalProperties = ['debug', 'children', 'name', 'visible', 'skipRaycast'];
const transformNodeInternalProperties = [...nodeInternalProperties, 'localPosition', 'localRotation', 'localScale', 'localTransform', 'anchorPosition'];
const renderNodeInternalProperties = [...transformNodeInternalProperties, 'color', 'isOpaque'];
const uiNodeInternalProperties = [...transformNodeInternalProperties, 'alignment', 'enabled', 'hideBounds'];
const uiLayoutInternalProperties = [...uiNodeInternalProperties, 'width', 'height'];
const textContainerInternalProperties = [...uiNodeInternalProperties, 'textColor', 'textSize'];


// Provides list of the internal property names per component
const componentInternalProperties = {
  Text: [
    ...textContainerInternalProperties,
    'allCaps',
    'charSpacing',
    'lineSpacing',
    'textAlignment',
    'style',
    'weight',
    'boundsSize',
    'fontParameters'
  ],
  Button: [
    ...textContainerInternalProperties,
    'iconSize',
    'iconColor'
  ]
};

export { componentInternalProperties }