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
  'hideBounds',
  'onClick',
  'onActivate',
  'onPressed',
  'onLongPress',
  'onRelease',
  'onHoverEnter',
  'onHoverExit',
  'onHoverMove',
  'onEnabled',
  'onDisabled',
  'onFocusGained',
  'onFocusLost',
  'onFocusInput',
  'onUpdate',
  'onDeleted',
  'onEvent',
  'onUpdateLoop'
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
    'fileName',
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
    'itemPadding',
    'defaultItemAlignment',
    'defaultItemPadding'
  ],
  GridLayout: [
    ...uiLayoutInternalProperties,
    'columns',
    'rows',
    'itemAlignment',
    'itemPadding',
    'defaultItemAlignment',
    'defaultItemPadding'
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
    'scrollBounds',
    'onScrollChanged'
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
    'selected',
    'onSelectionChanged',
    'onListVisibilityChanged'
  ],
  DropdownListItem: [
      ...uiNodeInternalProperties,
      'id',
      'label'
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
    'absolutePath',
    'onTextChanged'
  ],
  TextEdit: [
    ...textContainerInternalProperties,
    'text',
    'width',
    'height',
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
    'selectedEnd',
    'onToggleChanged'
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
    'height',
    'onProgressBarChanged'
  ],
  Slider: [
    ...uiNodeInternalProperties,
    'min',
    'max',
    'value',
    'width',
    'height',
    'onSliderChanged'
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
    'message',
    'onDialogConfirmed',
    'onDialogCanceled',
    'onDialogTimeExpired'
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
    'type',
    'height',
    'on',
    'onToggleChanged'
  ],
  ToggleGroup: [
    ...uiNodeInternalProperties,
    'allowMultipleOn',
    'allowAllOff',
    'allTogglesOff'
  ],
  CircleConfirmation: [
    ...uiNodeInternalProperties,
    'radius',
    'onConfirmationCompleted',
    'onConfirmationCanceled',
    'onConfirmationUpdated'
  ],
  ColorPicker: [
    ...uiNodeInternalProperties,
    'color',
    'height',
    'onColorChanged',
    'onColorConfirmed',
    'onColorCanceled'
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
    'defaultDate',
    'onDateChanged',
    'onDateConfirmed'
  ],
  TimePicker: [
    ...uiNodeInternalProperties,
    'color',
    'time',
    'showHint',
    'label',
    'labelSide',
    'defaultTime',
    'onTimeChanged',
    'onTimeConfirmed'
  ],
  PortalIcon: [],
  Content: []
};

export { componentInternalProperties }