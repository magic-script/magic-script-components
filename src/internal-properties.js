// Property name list for the base components
const nodeInternalProperties = [
  'debug',
  'children',
  'name',
  'visible',
  'skipRaycast'
];
const transformNodeInternalProperties = [
  ...nodeInternalProperties,
  'localPosition',
  'localRotation',
  'localScale',
  'localTransform',
  'anchorPosition'
];
const renderNodeInternalProperties = [
  ...transformNodeInternalProperties,
  'color',
  'isOpaque'
];
const uiNodeInternalProperties = [
  ...transformNodeInternalProperties,
  'alignment',
  'enabled',
  'hideBounds'
];
const uiLayoutInternalProperties = [
  ...uiNodeInternalProperties,
  'width',
  'height'
];
const uiPositionalLayoutInternalProperties = [
  ...uiLayoutInternalProperties,
  'defaultItemAlignment',
  'defaultItemPadding',
  'skipInvisibleItems'
];
const textContainerInternalProperties = [
  ...uiNodeInternalProperties,
  'textColor',
  'textSize'
];


// Provides list of the internal property names per component
const componentInternalProperties = {
  Scene: [
    'onAppStart',
    'onAppPause',
    'onAppResume'
  ],
  Prism: [
    'size',
    'position',
    'orientation',
    'excludeFromAutoFocus',
    'handGestureFilterConfidenceLevel',
    'handGestureFilterPollRate',
    'handGestureFilterPositionDelta',
    'handGestureHoverDistance',
    'handGestureTouchDistance',
    'physicsEnabled',
    'physicsPaused',
    'physicsWorldMeshEnabled',
    'prismBloomStrength',
    'volumeBloomStrength',
    'trackHandGesture',
    'trackingAutoHapticOnGesture',
    'onDestroy'
  ],
  Audio: [
    ...transformNodeInternalProperties,
    'action',
    'soundLooping',
    'soundMute',
    'soundPitch',
    'soundVolumeLinear',
    'spatialSoundEnable',
    'streamedFileOffset',
    'spatialSoundDirection',
    'spatialSoundDirectSendLevels',
    'spatialSoundDistance',
    'spatialSoundPosition',
    'spatialSoundRadiation',
    'spatialSoundRoomSendLevels',
    'loadFile',
    'absolutePath',
    'descriptor',
    'basePath',
    'autoDestroy',
    'dynamicDecode'
  ],
  Light: [
    ...transformNodeInternalProperties,
    'color',
    'intensity',
    'range',
    'spotAngle',
    'type',
    'castsShadows',
    'useHeadPose'
  ],
  Line: [
    ...renderNodeInternalProperties,
    'points'
  ],
  Model: [
    ...renderNodeInternalProperties,
    'animationPauseState',
    'animationPlaybackSpeed',
    'animationTime',
    'modelResourceId',
    'animation',
    'texture',
    'modelPath',
    'materialPath',
    'importScale',
    'defaultTextureIndex',
    'defaultTextureSlot',
    'defaultMaterialName',
  ],
  Quad: [
    ...renderNodeInternalProperties,
    'texCoords',
    'viewMode',
    'size',
    'renderResource'
  ],
  Video: [
    ...renderNodeInternalProperties,
    'width',
    'height',
    'volume',
    'viewMode',
    'looping',
    'timedTextPath',
    'videoPath',
    'volume',
    'seekTo',
    'action'
  ],
  RectLayout: [
    ...uiLayoutInternalProperties,
    'contentAlignment',
    'padding'
  ],
  LinearLayout: [
    ...uiPositionalLayoutInternalProperties,
    'orientation',
    'itemAlignment',
    'itemPadding'
  ],
  GridLayout: [
    ...uiLayoutInternalProperties,
    'columns',
    'rows',
    'itemAlignment',
    'itemPadding'
  ],
  Panel: [
    ...uiNodeInternalProperties,
    'cursorConstrained',
    'cursorInitialPosition',
    'cursorTransitionType',
    'cursorVisible',
    'edgeConstraint',
    'edgeConstraintLevel',
    'panelShape',
    'side'
  ],
  View: [
    ...uiNodeInternalProperties
  ],
  WebView: [
    ...uiNodeInternalProperties,
    'url',
    'action',
    'scrollBy',
    'height',
    'width'
  ],
  PageView: [
    ...uiNodeInternalProperties,
    'defaultPageAlignment',
    'defaultPagePadding',
    'visiblePage',
    'pageAlignment',
    'pagePadding',
    'height',
    'width'
  ],
  ScrollView: [
    ...uiNodeInternalProperties,
    'scrollBarVisibility',
    'scrollDirection',
    'scrollMask',
    'scrollOffset',
    'scrollSpeed',
    'scrollValue',
    'scrollBounds'
  ],
  ScrollBar: [
    ...uiNodeInternalProperties,
    'thumbSize',
    'thumbPosition',
    'thickness',
    'length',
    'orientation'
  ],
  ListView: [
    ...uiNodeInternalProperties,
    'cursorEdgeScrollMode',
    'defaultItemAlignment',
    'defaultItemPadding',
    'orientation',
    'scrollBarVisibility',
    'scrollingEnabled',
    'scrollSpeed',
    'scrollValue',
    'scrollToItem',
    'skipInvisibleItems',
    'itemAlignment',
    'itemPadding',
    'width',
    'height'
  ],
  ListViewItem: [
    ...uiNodeInternalProperties,
    'backgroundColor',
    'padding',
    'itemAlignment',
    'id',
    'label',
    'selected'
  ],
  DropdownList: [
    ...uiNodeInternalProperties,
    'text',
    'textColor',
    'textSize',
    'iconSize',
    'iconColor',
    'listMaxHeight',
    'listTextSize',
    'maxCharacterLimit',
    'multiSelect',
    'showList',
    'selected'
  ],
  Text: [
    ...textContainerInternalProperties,
    'allCaps',
    'charSpacing',
    'lineSpacing',
    'textAlignment',
    'style',
    'weight',
    'boundsSize',
    'fontParameters',
    'fontDescription',
    'filePath',
    'absolutePath'
  ],
  TextEdit: [
    ...textContainerInternalProperties,
    'textAlignment',
    'charLimit',
    'charSpacing',
    'cursorEdgeScrollMode',
    'lineSpacing',
    'textPadding',
    'hint',
    'hintColor',
    'multiline',
    'password',
    'scrolling',
    'textEntry',
    'scrollBarVisibility',
    'scrollSpeed',
    'scrollValue',
    'fontParameters',
    'fontDescription',
    'filePath',
    'absolutePath',
    'selectedBegin',
    'selectedEnd'
  ],
  Button: [
    ...textContainerInternalProperties,
    'iconSize',
    'iconColor',
    'height',
    'width',
    'roundness',
    'type',
    'iconPath',
    'iconType',
    'iconScale',
    'labelSide',
    'labelDisplayMode',
    'outlineButton'
  ],
  Tab: [
    ...textContainerInternalProperties,
    'type',
    'text'
  ],
  ProgressBar: [
    ...uiNodeInternalProperties,
    'progressColor',
    'min',
    'max',
    'value',
    'width',
    'height'
  ],
  Slider: [
    ...uiNodeInternalProperties,
    'min',
    'max',
    'value',
    'width',
    'height'
  ],
  Spinner: [
    ...uiNodeInternalProperties,
    'size',
    'value',
    'type',
    'resourceId',
    'resourcePath',
    'determinate'
  ],
  Dialog: [
    ...uiNodeInternalProperties,
    'buttonType',
    'cancelText',
    'cancelIcon',
    'confirmText',
    'confirmIcon',
    'expireTime',
    'type',
    'layout',
    'scrolling',
    'title',
    'message'
  ],
  Image: [
    ...uiNodeInternalProperties,
    'ui',
    'opaque',
    'color',
    'texCoords',
    'imageFrameResource',
    'renderResource',
    'absolutePath',
    'useFrame',
    'icon',
    'filePath',
    'resourceId',
    'height',
    'width'
  ],
  Toggle: [
    ...textContainerInternalProperties,
    'height',
    'on'
  ],
  ToggleGroup: [
    ...uiNodeInternalProperties,
    'allowMultipleOn',
    'allowAllOff',
    'allTogglesOff'
  ],
  CircleConfirmation: [
    ...uiNodeInternalProperties,
    'radius'
  ],
  ColorPicker: [
    ...uiNodeInternalProperties,
    'color',
    'height'
  ],
  DatePicker: [
    ...uiNodeInternalProperties,
    'color',
    'date',
    'showHint',
    'label',
    'labelSide',
    'yearMin',
    'yearMax',
    'defaultDate'
  ],
  TimePicker: [
    ...uiNodeInternalProperties,
    'color',
    'time',
    'showHint',
    'label',
    'labelSide',
    'defaultTime'
  ]
};

export { componentInternalProperties }