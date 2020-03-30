/// <reference path='./XrClientBridge.d.ts' />

declare module "magic-script-components" {

  // Components:
  // --------------------------------------------------------------------------------

  interface AppProps {
    type: 'landscape' | 'immersive';
    volumeSize: vec3;
  }

  interface ViewProps extends ContentProps, EventHandlerProps {
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
  }

  const View: React.FC<ViewProps>;

  interface TextProps extends ViewProps, EventHandlerProps {
    text?: string;
    textColor?: color;
    textSize?: number;
    allCaps?: boolean;
    charSpacing?: number;
    lineSpacing?: number;
    textAlignment?: HorizontalTextAlignment;
    style?: FontStyle;
    weight?: FontWeight;
    boundsSize?: { boundsSize?: vec2; wrap?: boolean; };
    fontParameters?: { style?: FontStyle; weight?: FontWeight; fontSize?: number; tracking?: number; allCaps?: boolean; };
    fontDescription?: FontDescription;
    filePath?: string;
    absolutePath?: boolean;
  }

  const Text: React.FC<TextProps>;

  interface TextEditProps extends ViewProps, EventHandlerProps {
    text?: string;
    textColor?: color;
    textSize?: number;
    textAlignment?: HorizontalTextAlignment;
    charLimit?: number;
    charSpacing?: number;
    cursorEdgeScrollMode?: CursorEdgeScrollMode;
    lineSpacing?: number;
    textPadding?: vec4;
    hint?: string;
    hintColor?: color;
    multiline?: boolean;
    password?: boolean;
    scrolling?: boolean;
    textEntry?: TextEntryMode;
    scrollBarVisibility?: ScrollBarVisibility;
    scrollSpeed?: number;
    scrollValue?: number;
    fontParameters?: { style?: FontStyle; weight?: FontWeight; fontSize?: number; tracking?: number; allCaps?: boolean; };
    width?: number;
    height?: number;
    fontDescription?: FontDescription;
    filePath?: string;
    absolutePath?: boolean;
  }

  const TextEdit: React.FC<TextEditProps>;

  interface ButtonProps extends ViewProps, EventHandlerProps {
    text?: string;
    textColor?: color;
    textSize?: number;
    iconSize?: vec2;
    iconColor?: color;
    width?: number;
    height?: number;
    roundness?: number;
  }

  const Button: React.FC<ButtonProps>;

  interface ImageProps extends ViewProps, EventHandlerProps {
    ui?: boolean;
    opaque?: boolean;
    color?: color;
    texCoords?: vec4;
    imageFrameResource?: number;
    renderResource?: number;
    width?: number;
    height?: number;
    icon?: SystemIcon;
    filePath?: string;
    resourceId?: bigint;
    absolutePath?: boolean;
    useFrame?: boolean;
  }

  const Image: React.FC<ImageProps>;

  interface ScrollBarProps extends ViewProps, EventHandlerProps {
    thumbSize?: number;
    thumbPosition?: number;
    orientation?: Orientation;
    length?: number;
    thickness?: number;
  }

  const ScrollBar: React.FC<ScrollBarProps>;

  interface ScrollViewProps extends ViewProps, EventHandlerProps {
    scrollBarVisibility?: ScrollBarVisibility;
    scrollDirection?: ScrollDirection;
    scrollMask?: number;
    scrollOffset?: vec3;
    scrollSpeed?: number;
    scrollValue?: number;
    scrollBounds?: { min?: vec3; max?: vec3; };
  }

  const ScrollView: React.FC<ScrollViewProps>;

  interface ListViewProps extends EventHandlerProps {
    name?: string;
    parentedBoneName?: string;
    skipRaycast?: boolean;
    triggerable?: boolean;
    visible?: boolean;
    visibilityInherited?: boolean;
    anchorPosition?: vec3;
    localPosition?: vec3;
    localRotation?: quat;
    localScale?: vec3;
    localTransform?: mat4;
    cursorHoverState?: CursorHoverState;
    offset?: vec3;
    padding?: vec4;
    itemAlignment?: { index?: number; alignment?: Alignment; };
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    cursorEdgeScrollMode?: CursorEdgeScrollMode;
    defaultItemAlignment?: Alignment;
    defaultItemPadding?: vec4;
    orientation?: Orientation;
    scrollBarVisibility?: ScrollBarVisibility;
    scrollingEnabled?: boolean;
    scrollSpeed?: number;
    scrollValue?: number;
    scrollToItem?: number;
    skipInvisibleItems?: boolean;
    itemPadding?: { index?: number; padding?: vec4; };
    width?: number;
    height?: number;
  }

  const ListView: React.FC<ListViewProps>;

  interface ListViewItemProps extends ViewProps, EventHandlerProps {
    backgroundColor?: color;
  }

  const ListViewItem: React.FC<ListViewItemProps>;

  interface SpinnerProps extends ViewProps, EventHandlerProps {
    size?: vec2;
    value?: number;
    type?: LoadingSpinnerType;
    id?: bigint;
    path?: string;
    height?: number;
    determinate?: boolean;
  }

  const Spinner: React.FC<SpinnerProps>;

  interface SliderProps extends ViewProps, EventHandlerProps {
    min?: number;
    max?: number;
    value?: number;
    width?: number;
    height?: number;
  }

  const Slider: React.FC<SliderProps>;

  interface ProgressBarProps extends ViewProps, EventHandlerProps {
    progressColor?: { beginColor?: color; endColor?: color; };
    min?: number;
    max?: number;
    value?: number;
    width?: number;
    height?: number;
  }

  const ProgressBar: React.FC<ProgressBarProps>;

  interface GridLayoutProps extends EventHandlerProps {
    name?: string;
    parentedBoneName?: string;
    skipRaycast?: boolean;
    triggerable?: boolean;
    visible?: boolean;
    visibilityInherited?: boolean;
    anchorPosition?: vec3;
    localPosition?: vec3;
    localRotation?: quat;
    localScale?: vec3;
    localTransform?: mat4;
    cursorHoverState?: CursorHoverState;
    offset?: vec3;
    padding?: vec4;
    itemAlignment?: { row?: number; column?: number; alignment?: Alignment; };
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    defaultItemAlignment?: Alignment;
    defaultItemPadding?: vec4;
    skipInvisibleItems?: boolean;
    columns?: number;
    rows?: number;
    itemPadding?: { row?: number; column?: number; padding?: vec4; };
    width?: number;
    height?: number;
  }

  const GridLayout: React.FC<GridLayoutProps>;

  interface LinearLayoutProps extends EventHandlerProps {
    name?: string;
    parentedBoneName?: string;
    skipRaycast?: boolean;
    triggerable?: boolean;
    visible?: boolean;
    visibilityInherited?: boolean;
    anchorPosition?: vec3;
    localPosition?: vec3;
    localRotation?: quat;
    localScale?: vec3;
    localTransform?: mat4;
    cursorHoverState?: CursorHoverState;
    offset?: vec3;
    padding?: vec4;
    itemAlignment?: { index?: number; alignment?: Alignment; };
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    defaultItemAlignment?: Alignment;
    defaultItemPadding?: vec4;
    skipInvisibleItems?: boolean;
    orientation?: Orientation;
    itemPadding?: { index?: number; padding?: vec4; };
    width?: number;
    height?: number;
  }

  const LinearLayout: React.FC<LinearLayoutProps>;

  interface RectLayoutProps extends ViewProps, EventHandlerProps {
    contentAlignment?: Alignment;
    width?: number;
    height?: number;
  }

  const RectLayout: React.FC<RectLayoutProps>;

  interface DropdownListProps extends ViewProps, EventHandlerProps {
    text?: string;
    textColor?: color;
    textSize?: number;
    iconSize?: vec2;
    iconColor?: color;
    listMaxHeight?: number;
    listTextSize?: number;
    maxCharacterLimit?: number;
    multiSelect?: boolean;
    showList?: boolean;
    selected?: { id?: number; selected?: boolean; };
  }

  const DropdownList: React.FC<DropdownListProps>;

  interface DropdownListItemProps extends EventHandlerProps {
    label?: string;
    id?: number;
  }

  const DropdownListItem: React.FC<DropdownListItemProps>;

  interface ToggleProps extends ViewProps, EventHandlerProps {
    text?: string;
    textColor?: color;
    textSize?: number;
    on?: boolean;
    height?: number;
    type?: ToggleType;
  }

  const Toggle: React.FC<ToggleProps>;

  interface ToggleGroupProps extends ViewProps, EventHandlerProps {
    allowMultipleOn?: boolean;
    allowAllOff?: boolean;
    allTogglesOff?: boolean;
  }

  const ToggleGroup: React.FC<ToggleGroupProps>;

  interface PanelProps extends ViewProps, EventHandlerProps {
    cursorConstrained?: boolean;
    cursorInitialPosition?: vec3;
    cursorTransitionType?: PanelCursorTransitionType;
    cursorVisible?: boolean;
    edgeConstraint?: { side?: Side; constraintMagnitude?: number; };
    edgeConstraintLevel?: { side?: Side; level?: PanelEdgeConstraintLevel; };
    panelShape?: { size?: vec2; offset?: vec3; roundness?: number; };
    side?: Side;
  }

  const Panel: React.FC<PanelProps>;

  interface TabProps extends ViewProps, EventHandlerProps {
    text?: string;
    textColor?: color;
    textSize?: number;
    type?: EclipseLabelType;
  }

  const Tab: React.FC<TabProps>;

  interface DialogProps extends ViewProps, EventHandlerProps {
    text?: string;
    buttonType?: EclipseButtonType;
    cancelText?: string;
    cancelIcon?: SystemIcon;
    confirmText?: string;
    confirmIcon?: SystemIcon;
    expireTime?: number;
    message?: string;
    title?: string;
    type?: DialogType;
    layout?: DialogLayout;
    scrolling?: boolean;
  }

  const Dialog: React.FC<DialogProps>;

  interface PageViewProps extends ViewProps, EventHandlerProps {
    defaultPageAlignment?: Alignment;
    defaultPagePadding?: vec4;
    visiblePage?: number;
    pageAlignment?: { index?: number; alignment?: Alignment; };
    pagePadding?: { index?: number; padding?: vec4; };
    width?: number;
    height?: number;
  }

  const PageView: React.FC<PageViewProps>;

  interface WebViewProps extends ViewProps, EventHandlerProps {
    url?: string;
    action?: WebViewAction;
    scrollBy?: vec2;
    width?: number;
    height?: number;
  }

  const WebView: React.FC<WebViewProps>;

  interface PortalIconProps extends ViewProps, EventHandlerProps {
    text?: string;
    textColor?: color;
    textSize?: number;
    hoverScale?: number;
    hoverZOffset?: number;
    iconActivateAnimation?: string;
    iconContextMenuAnimation?: string;
    iconHoverAnimation?: string;
    iconIdleAnimation?: string;
    iconHoverPosition?: vec3;
    labelDisplayMode?: LabelDisplayMode;
    iconSize?: PortalIconSize;
  }

  const PortalIcon: React.FC<PortalIconProps>;

  interface ColorPickerProps extends ViewProps, EventHandlerProps {
    color?: color;
    height?: number;
  }

  const ColorPicker: React.FC<ColorPickerProps>;

  interface TimePickerProps extends ViewProps, EventHandlerProps {
    color?: color;
    time?: string;
    showHint?: boolean;
    label?: string;
    labelSide?: Side;
    defaultTime?: string;
  }

  const TimePicker: React.FC<TimePickerProps>;

  interface DatePickerProps extends ViewProps, EventHandlerProps {
    color?: color;
    date?: string;
    showHint?: boolean;
    label?: string;
    labelSide?: Side;
    defaultDate?: string;
    yearMin?: number;
    yearMax?: number;
  }

  const DatePicker: React.FC<DatePickerProps>;

  interface CircleConfirmationProps extends ViewProps, EventHandlerProps {
    radius?: number;
  }

  const CircleConfirmation: React.FC<CircleConfirmationProps>;

  interface ContentProps extends EventHandlerProps {
    name?: string;
    parentedBoneName?: string;
    skipRaycast?: boolean;
    triggerable?: boolean;
    visible?: boolean;
    visibilityInherited?: boolean;
    anchorPosition?: vec3;
    localPosition?: vec3;
    localRotation?: quat;
    localScale?: vec3;
    localTransform?: mat4;
    cursorHoverState?: CursorHoverState;
    offset?: vec3;
    padding?: vec4;
    itemAlignment?: Alignment;
  }

  const Content: React.FC<ContentProps>;

  interface ModelProps extends ContentProps, EventHandlerProps {
    bloomStrength?: number;
    color?: color;
    drmContent?: boolean;
    shader?: ShaderType;
    renderingLayer?: RenderingLayer;
    backFaceCulls?: { on?: boolean; renderStateIndex?: number; };
    blooms?: { on?: boolean; renderStateIndex?: number; };
    castsShadows?: { on?: boolean; renderStateIndex?: number; };
    frontFaceCulls?: { on?: boolean; renderStateIndex?: number; };
    isOpaque?: { on?: boolean; renderStateIndex?: number; };
    isUI?: { on?: boolean; renderStateIndex?: number; };
    pushesStencil?: { on?: boolean; renderStateIndex?: number; };
    readsClip?: { on?: boolean; renderStateIndex?: number; };
    readsDepth?: { on?: boolean; renderStateIndex?: number; };
    receivesLight?: { on?: boolean; renderStateIndex?: number; };
    receivesShadows?: { on?: boolean; renderStateIndex?: number; };
    writesColor?: { on?: boolean; renderStateIndex?: number; };
    writesDepth?: { on?: boolean; renderStateIndex?: number; };
    writesStencil?: { on?: boolean; renderStateIndex?: number; };
    animationPauseState?: boolean;
    animationPlaybackSpeed?: number;
    animationTime?: number;
    modelResourceId?: number;
    animation?: { resourceId?: number; name?: string; paused?: boolean; loops?: number; };
    texture?: { textureId?: number; textureSlot?: string; materialName?: string; };
    modelPath?: string;
    materialPath?: string;
    importScale?: number;
    texturePaths?: number[];
  }

  const Model: React.FC<ModelProps>;

  interface QuadProps extends ContentProps, EventHandlerProps {
    bloomStrength?: number;
    color?: color;
    drmContent?: boolean;
    shader?: ShaderType;
    renderingLayer?: RenderingLayer;
    backFaceCulls?: { on?: boolean; renderStateIndex?: number; };
    blooms?: { on?: boolean; renderStateIndex?: number; };
    castsShadows?: { on?: boolean; renderStateIndex?: number; };
    frontFaceCulls?: { on?: boolean; renderStateIndex?: number; };
    isOpaque?: { on?: boolean; renderStateIndex?: number; };
    isUI?: { on?: boolean; renderStateIndex?: number; };
    pushesStencil?: { on?: boolean; renderStateIndex?: number; };
    readsClip?: { on?: boolean; renderStateIndex?: number; };
    readsDepth?: { on?: boolean; renderStateIndex?: number; };
    receivesLight?: { on?: boolean; renderStateIndex?: number; };
    receivesShadows?: { on?: boolean; renderStateIndex?: number; };
    writesColor?: { on?: boolean; renderStateIndex?: number; };
    writesDepth?: { on?: boolean; renderStateIndex?: number; };
    writesStencil?: { on?: boolean; renderStateIndex?: number; };
    texCoords?: vec4;
    viewMode?: ViewMode;
    size?: vec2;
    subTexture?: string | number;
  }

  const Quad: React.FC<QuadProps>;

  interface VideoProps extends QuadProps, EventHandlerProps {
    looping?: boolean;
    timedTextPath?: string;
    videoPath?: string;
    videoUri?: string;
    volume?: number;
    seekTo?: number;
    action?: VideoAction;
    width?: number;
    height?: number;
  }

  const Video: React.FC<VideoProps>;

  interface AudioProps extends ContentProps, EventHandlerProps {
    action?: AudioAction;
    soundLooping?: boolean;
    soundMute?: boolean;
    soundPitch?: number;
    soundVolumeLinear?: number;
    spatialSoundEnable?: boolean;
    streamedFileOffset?: number;
    spatialSoundDirection?: { channel?: number; channelDirection?: quat; };
    spatialSoundDirectSendLevels?: { channel?: number; gain?: number; gainHf?: number; gainLf?: number; gainMf?: number; };
    spatialSoundDistance?: { channel?: number; minDistance?: number; maxDistance?: number; rolloffFactor?: number; };
    spatialSoundPosition?: { channel?: number; channelPosition?: vec3; };
    spatialSoundRadiation?: { channel?: number; innerAngle?: number; outerAngle?: number; outerGain?: number; outerGainHf?: number; };
    spatialSoundRoomSendLevels?: { channel?: number; gain?: number; gainHf?: number; gainLf?: number; gainMf?: number; };
    fileName?: string;
    loadFile?: boolean;
    absolutePath?: boolean;
    descriptor?: number;
    basePath?: string;
    autoDestroy?: boolean;
    dynamicDecode?: boolean;
  }

  const Audio: React.FC<AudioProps>;

  interface LightProps extends ContentProps, EventHandlerProps {
    color?: color;
    intensity?: number;
    range?: number;
    spotAngle?: number;
    type?: LightType;
    castsShadows?: boolean;
    useHeadPose?: { on?: boolean; offset?: vec4; };
  }

  const Light: React.FC<LightProps>;

  interface LineProps extends ContentProps, EventHandlerProps {
    bloomStrength?: number;
    color?: color;
    drmContent?: boolean;
    shader?: ShaderType;
    renderingLayer?: RenderingLayer;
    backFaceCulls?: { on?: boolean; renderStateIndex?: number; };
    blooms?: { on?: boolean; renderStateIndex?: number; };
    castsShadows?: { on?: boolean; renderStateIndex?: number; };
    frontFaceCulls?: { on?: boolean; renderStateIndex?: number; };
    isOpaque?: { on?: boolean; renderStateIndex?: number; };
    isUI?: { on?: boolean; renderStateIndex?: number; };
    pushesStencil?: { on?: boolean; renderStateIndex?: number; };
    readsClip?: { on?: boolean; renderStateIndex?: number; };
    readsDepth?: { on?: boolean; renderStateIndex?: number; };
    receivesLight?: { on?: boolean; renderStateIndex?: number; };
    receivesShadows?: { on?: boolean; renderStateIndex?: number; };
    writesColor?: { on?: boolean; renderStateIndex?: number; };
    writesDepth?: { on?: boolean; renderStateIndex?: number; };
    writesStencil?: { on?: boolean; renderStateIndex?: number; };
    points?: vec3[];
  }

  const Line: React.FC<LineProps>;

  interface PrismProps extends EventHandlerProps {
    excludeFromAutoFocus?: boolean;
    handGestureFilterConfidenceLevel?: number;
    handGestureFilterPollRate?: number;
    handGestureFilterPositionDelta?: number;
    handGestureHoverDistance?: number;
    handGestureTouchDistance?: number;
    physicsEnabled?: boolean;
    physicsPaused?: boolean;
    physicsWorldMeshEnabled?: boolean;
    prismBloomStrength?: number;
    volumeBloomStrength?: number;
    trackHandGesture?: number;
    trackingAutoHapticOnGesture?: number;
    onDestroy?: () => void;
    anchorUuid?: string;
    size?: vec3;
    position?: vec3;
    positionRelativeToCamera?: boolean;
    orientation?: quat;
    orientationRelativeToCamera?: boolean;
    debug?: boolean;
  }

  const Prism: React.FC<PrismProps>;

  interface SceneProps extends EventHandlerProps {
  }

  const Scene: React.FC<SceneProps>;

  interface EventHandlerProps {
    onActivate?: (eventData: UiEventData) => void;
    onClick?: (eventData: UiEventData) => void;
    onPress?: (eventData: UiEventData) => void;
    onLongPress?: (eventData: UiEventData) => void;
    onRelease?: (eventData: UiEventData) => void;
    onHoverEnter?: (eventData: UiEventData) => void;
    onHoverExit?: (eventData: UiEventData) => void;
    onHoverMove?: (eventData: UiEventData) => void;
    onEnabled?: (eventData: UiEventData) => void;
    onDisabled?: (eventData: UiEventData) => void;
    onFocusGained?: (eventData: UiEventData) => void;
    onFocusLost?: (eventData: UiEventData) => void;
    onFocusInput?: (eventData: UiEventData) => void;
    onUpdate?: (eventData: UiEventData) => void;
    onDelete?: (eventData: UiEventData) => void;
    onCharacterEnter?: (eventData: TextEditEventData) => void;
    onKeyboardEvent?: (eventData: TextEditEventData) => void;
    onTextChanged?: (eventData: TextEditEventData) => void;
    onSliderChanged?: (eventData: SliderEventData) => void;
    onScrollChanged?: (eventData: ScrollViewEventData) => void;
    onProgressBarChanged?: (eventData: ProgressBarEventData) => void;
    onListVisibilityChanged?: (eventData: DropDownListEventData) => void;
    onSelectionChanged?: (eventData: DropDownListEventData) => void;
    onToggleChanged?: (eventData: ToggleEventData) => void;
    onCursorEdge?: (eventData: UiEventData) => void;
    onCursorOffEdge?: (eventData: UiEventData) => void;
    onPanelEnter?: (eventData: UiEventData) => void;
    onPanelExit?: (eventData: UiEventData) => void;
    onDialogCanceled?: (eventData: UiEventData) => void;
    onDialogConfirmed?: (eventData: UiEventData) => void;
    onDialogTimeExpired?: (eventData: UiEventData) => void;
    onColorCanceled?: (eventData: ColorPickerEventData) => void;
    onColorChanged?: (eventData: ColorPickerEventData) => void;
    onColorConfirmed?: (eventData: ColorPickerEventData) => void;
    onTimeChanged?: (eventData: TimePickerEventData) => void;
    onTimeConfirmed?: (eventData: TimePickerEventData) => void;
    onDateChanged?: (eventData: DatePickerEventData) => void;
    onDateConfirmed?: (eventData: DatePickerEventData) => void;
    onConfirmationCanceled?: (eventData: CircleConfirmationEventData) => void;
    onConfirmationCompleted?: (eventData: CircleConfirmationEventData) => void;
    onConfirmationUpdated?: (eventData: CircleConfirmationEventData) => void;
  }

  // Event Data:
  // --------------------------------------------------------------------------------

  interface EventData {
  }

  interface NodeEventData extends EventData {
    AABB?: any;
    AnchorPosition?: any;
    ChildCount?: any;
    CurrentPrismTransform?: any;
    CurrentWorldTransform?: any;
    CursorHoverState?: any;
    LocalAABB?: any;
    LocalTransform?: any;
    Name?: any;
    NodeId?: any;
    ParentedBoneName?: any;
    PrismId?: any;
  }

  interface TransformNodeEventData extends NodeEventData {
    LocalPosition?: any;
    LocalRotation?: any;
    LocalScale?: any;
    PrismPosition?: any;
    WorldPosition?: any;
  }

  interface UiEventData extends TransformNodeEventData {
    Alignment?: any;
    Enabled?: any;
    EventPassThrough?: any;
    GravityWellEnabled?: any;
    GravityWellProperties?: any;
    RenderingLayer?: any;
  }

  interface TextEditEventData extends UiEventData {
    Text?: any;
  }

  interface SliderEventData extends UiEventData {
    Max?: any;
    Min?: any;
    Value?: any;
  }

  interface ScrollViewEventData extends UiEventData {
    ScrollValue?: any;
  }

  interface ProgressBarEventData extends UiEventData {
    Max?: any;
    Min?: any;
    Value?: any;
    ProgressColor?: any;
  }

  interface DropDownListEventData extends UiEventData {
    Alignment?: any;
    Enabled?: any;
    EventPassThrough?: any;
    GravityWellEnabled?: any;
    GravityWellProperties?: any;
    RenderingLayer?: any;
  }

  interface ToggleEventData extends UiEventData {
    On?: any;
    Text?: any;
    TextColor?: any;
    TextSize?: any;
  }

  interface ColorPickerEventData extends UiEventData {
    Color?: any;
  }

  interface TimePickerEventData extends UiEventData {
    Time?: any;
    TimeString?: any;
  }

  interface DatePickerEventData extends UiEventData {
    Date?: any;
    DateString?: any;
  }

  interface CircleConfirmationEventData extends UiEventData {
    Angle?: any;
  }

  // Other Types:
  // --------------------------------------------------------------------------------

  type vec2 = [number, number];

  type vec3 = [number, number, number];

  type vec4 = [number, number, number, number];

  type quat = vec4;

  type mat4 = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];

  type CursorHoverState = 'browser-default' | 'browser-pointer' | 'crosshair' | 'default' | 'move' | 'none' | 'scroll' | 'scroll-e' | 'scroll-n' | 'scroll-ne' | 'scroll-nw' | 'scroll-s' | 'scroll-se' | 'scroll-sw' | 'scroll-w' | 'text-input';

  type Alignment = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

  type FocusRequest = 'gain-focus' | 'lose-focus' | 'none';

  type RenderingLayer = 'background-layer' | 'hud-layer' | 'object-layer' | 'post-hud-layer' | 'post-object-layer' | 'pre-object-layer' | 'rendering-layer-max';

  type SoundEvent = 'activate' | 'context-menu-close' | 'context-menu-item-hover' | 'context-menu-item-select' | 'context-menu-open' | 'dialog-cancel' | 'dialog-confirm' | 'dialog-loop' | 'dialog-open' | 'dropdown-item-hover' | 'dropdown-item-select' | 'dropdown-list-collapse' | 'dropdown-list-expand' | 'dropdown-nested-list-collapse' | 'dropdown-nested-list-expand' | 'focus-gained' | 'focus-lost' | 'hover-enter' | 'hover-exit' | 'long-press' | 'panel-transition-horizontal' | 'panel-transition-vertical' | 'scroll-view-scroll-limit' | 'text-cursor-insert' | 'text-password-hide' | 'text-password-show' | 'text-selection-handle-drop' | 'text-selection-handle-grab' | 'text-word-select' | 'toggle-state-off' | 'toggle-state-on';

  type GravityWellSnap = 'center' | 'center-x' | 'center-y' | 'closest-edge' | 'closest-inside-edge';

  type color = string | number | vec4 | color_hsl | color_lch | color_cmyk | color_rgba;

  type color_hsl = { h: number, s: number, l: number };

  type color_lch = { l: number, c: number, h: number };

  type color_cmyk = { c: number, m: number, y: number, k: number };

  type color_rgba = { r: number, g: number, b: number, a: number, type?: string };

  type HorizontalTextAlignment = 'center' | 'justify' | 'left' | 'right';

  type FontStyle = 'normal' | 'italic';

  type FontWeight = 'extra-light' | 'light' | 'regular' | 'medium' | 'bold' | 'extra-bold';

  type FontDescription = {
    advanceDirection: AdvanceDirection,
    flowDirection: FlowDirection,
    tileSize: number,
    quality?: Quality,
    minAlpha?: number
  };

  type AdvanceDirection = 'down' | 'left' | 'right' | 'up';

  type FlowDirection = 'above' | 'below' | 'left' | 'right';

  type Quality = 'enh1' | 'enh1-aa' | 'enh1-fast' | 'enh2' | 'enh3' | 'exper' | 'fast' | 'std' | 'std-0';

  type CursorEdgeScrollMode = 'always' | 'auto' | 'never';

  type TextEntryMode = 'email' | 'none' | 'normal' | 'numeric' | 'url';

  type ScrollBarVisibility = 'always' | 'auto' | 'off';

  type Orientation = 'horizontal' | 'vertical';

  type ScrollDirection = 'horizontal' | 'vertical';

  type LoadingSpinnerType = 'sprite-animation' | 'particle-package';

  type ToggleType = 'default' | 'checkbox' | 'radio';

  type PanelCursorTransitionType = 'center' | 'closest-edge' | 'initial-position';

  type Side = 'bottom' | 'left' | 'right' | 'top';

  type PanelEdgeConstraintLevel = 'heavy' | 'impassable' | 'light' | 'manual' | 'medium' | 'none';

  type EclipseLabelType = 'B1' | 'B2' | 'B3' | 'B4' | 'C1' | 'C2' | 'C3' | 'C4' | 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7';

  type EclipseButtonType = 'icon' | 'icon-with-label' | 'text' | 'text-with-icon';

  type SystemIcon = 'actions' | 'actions-left' | 'actions-off' | 'actions-right' | 'add' | 'address-book' | 'album-add' | 'album-remove' | 'alphabetical' | 'analytics' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'auto-placement' | 'backspace' | 'battery' | 'block' | 'block-camera' | 'block-cookie' | 'block-location' | 'block-microphone' | 'bluetooth' | 'bluetooth-off' | 'bookmark' | 'bookmark-add' | 'brightness' | 'calendar' | 'camera' | 'camera-iris' | 'carriage-return' | 'chat' | 'check' | 'check-selection' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'clipboard' | 'clock' | 'close' | 'closed-caption' | 'cloud' | 'cloud-off' | 'collection' | 'controller' | 'cookie' | 'copy' | 'credit-card' | 'cut' | 'cv-camera-privilege' | 'do-not-disturb' | 'dot' | 'download' | 'download-cloud' | 'dropdown' | 'edit' | 'effects-palette' | 'eject' | 'emoji' | 'enter' | 'exit' | 'extraction' | 'eye-tracking' | 'fast-forward' | 'fast-forward-ten-second' | 'file' | 'filter' | 'flag' | 'flag-china' | 'flag-france' | 'flag-germany' | 'flag-japan' | 'flag-south-korea' | 'flag-uk' | 'flag-usa' | 'follow' | 'frame' | 'game-controller' | 'generic-three-dimensional' | 'grid' | 'hamburger' | 'hand-orientation-left' | 'hand-orientation-right' | 'heart' | 'heart-add' | 'help' | 'history' | 'home' | 'image' | 'info' | 'keyboard' | 'keyboard-capital' | 'keyboard-language' | 'keyboard-letter' | 'keyboard-number' | 'link' | 'list-view' | 'local-area-server' | 'marquee-selection' | 'merge' | 'mesh' | 'microphone' | 'microphone-mute' | 'minimize' | 'mobile' | 'more' | 'move' | 'multiple-selection' | 'music' | 'music-pause' | 'music-play' | 'network-server' | 'next' | 'notification' | 'object-recognition' | 'open-with' | 'origin' | 'passable-world' | 'paste' | 'pause' | 'permission' | 'person' | 'person-add' | 'person-block' | 'person-follow' | 'person-three' | 'person-two' | 'person-un-follow' | 'person-voip' | 'phone' | 'phone-end-call' | 'phone-incoming-call' | 'phone-switch-call' | 'pin' | 'placeholder-bluetooth' | 'play' | 'playlist-repeat-off' | 'playlist-repeat-on' | 'playlist-repeat-song' | 'playlist-shuffle' | 'playlist-shuffle-off' | 'power' | 'previous' | 'privacy' | 'private-view' | 'public-view' | 'rearrange' | 'refresh' | 'replay' | 'report' | 'resize' | 'restore-media' | 'revolver' | 'rewind-ten-second' | 'screenshot' | 'search' | 'security-lock' | 'security-not-secure' | 'security-unlock' | 'send' | 'settings' | 'share' | 'share-screen' | 'shift-disabled' | 'shift-enabled' | 'shift-enabled-permanent' | '6-dof' | 'sleep' | 'slide-show' | 'snooze' | 'space' | 'star' | 'stop' | 'stream' | 'stream-off' | 'summon' | 'tablet' | 'tab-new' | 'tab-new-image' | 'tab-view-all' | 'tag' | 'text' | 'thumbs-down' | 'thumbs-down-left' | 'thumbs-down-right' | 'thumbs-up' | 'thumbs-up-left' | 'thumbs-up-right' | 'top-chart' | 'trash' | 'undo-reply' | 'unknown-device' | 'update' | 'upload' | 'upload-cloud' | 'view' | 'view-source' | 'voice-feedback' | 'voip' | 'volume' | 'volume-mute' | 'warning' | 'web-xr' | 'wifi' | 'wifi-no-bar' | 'wifi-no-signal' | 'wifi-off' | 'wifi-one-bar' | 'wifi-secure' | 'wifi-secure-no-bar' | 'wifi-secure-no-signal' | 'wifi-secure-one-bar' | 'wifi-unknown' | 'window-new' | 'window-pop-up-block' | 'window-view-all' | 'work' | 'workspaces' | 'zoom-in' | 'zoom-out';

  type DialogType = 'custom' | 'timed' | 'no-action' | 'single-action' | 'dual-action';

  type DialogLayout = 'standard' | 'wide';

  type WebViewAction = 'back' | 'forward' | 'reload';

  type LabelDisplayMode = 'always' | 'hover';

  type PortalIconSize = 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small';

  type ShaderType = 'diffuse-normal-spec' | 'pbr' | 'unlit-textured';

  type ViewMode = 'full-area' | 'left-right';

  type VideoAction = 'pause' | 'start' | 'stop';

  type AudioAction = 'pause' | 'start' | 'stop' | 'resume';

  type LightType = 'directional' | 'point' | 'spot';

}

declare function print(...args: any[]): void
