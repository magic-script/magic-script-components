declare module "magic-script-components" {

  // Components:
  // --------------------------------------------------------------------------------

  interface ViewProps {
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

  interface TextProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    children?: any;
    text?: string;
    textColor?: vec4;
    textSize?: number;
    allCaps?: boolean;
    charSpacing?: number;
    lineSpacing?: number;
    textAlignment?: HorizontalTextAlignment;
    style?: FontStyle;
    weight?: FontWeight;
    boundsSize?: { boundsSize?: vec2; wrap?: boolean; };
    fontParameters?: { style?: FontStyle; weight?: FontWeight; fontSize?: number; tracking?: number; allCaps?: boolean; };
  }

  const Text: React.FC<TextProps>;

  interface TextEditProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    children?: any;
    text?: string;
    textColor?: vec4;
    textSize?: number;
    textAlignment?: HorizontalTextAlignment;
    charLimit?: number;
    charSpacing?: number;
    cursorEdgeScrollMode?: CursorEdgeScrollMode;
    lineSpacing?: number;
    textPadding?: vec4;
    hint?: string;
    hintColor?: vec4;
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
  }

  const TextEdit: React.FC<TextEditProps>;

  interface ButtonProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    children?: any;
    text?: string;
    textColor?: vec4;
    textSize?: number;
    iconSize?: vec2;
    iconColor?: vec4;
    width?: number;
    height?: number;
    roundness?: number;
    onClick?: (event: any) => void;
  }

  const Button: React.FC<ButtonProps>;

  interface ImageProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    ui?: boolean;
    opaque?: boolean;
    color?: vec4;
    texCoords?: vec4;
    imageFrameResource?: number;
    renderResource?: number;
    width?: number;
    height?: number;
  }

  const Image: React.FC<ImageProps>;

  interface ScrollBarProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    thumbSize?: number;
    thumbPosition?: number;
    orientation?: Orientation;
    width?: number;
    height?: number;
  }

  const ScrollBar: React.FC<ScrollBarProps>;

  interface ScrollViewProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    scrollBarVisibility?: ScrollBarVisibility;
    scrollDirection?: ScrollDirection;
    scrollMask?: number;
    scrollOffset?: vec3;
    scrollSpeed?: number;
    scrollValue?: number;
    scrollBounds?: { min?: vec3; max?: vec3; };
  }

  const ScrollView: React.FC<ScrollViewProps>;

  interface ListViewProps {
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

  interface ListViewItemProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    backgroundColor?: vec4;
  }

  const ListViewItem: React.FC<ListViewItemProps>;

  interface SpinnerProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    size?: vec2;
    value?: number;
  }

  const Spinner: React.FC<SpinnerProps>;

  interface SliderProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    min?: number;
    max?: number;
    value?: number;
    width?: number;
    height?: number;
  }

  const Slider: React.FC<SliderProps>;

  interface ProgressBarProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    progressColor?: { beginColor?: vec4; endColor?: vec4; };
    min?: number;
    max?: number;
    value?: number;
    width?: number;
    height?: number;
  }

  const ProgressBar: React.FC<ProgressBarProps>;

  interface GridLayoutProps {
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
    itemPadding?: vec4;
    skipInvisibleItems?: boolean;
    columns?: number;
    rows?: number;
    width?: number;
    height?: number;
  }

  const GridLayout: React.FC<GridLayoutProps>;

  interface LinearLayoutProps {
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
    itemPadding?: vec4;
    skipInvisibleItems?: boolean;
    orientation?: Orientation;
    width?: number;
    height?: number;
  }

  const LinearLayout: React.FC<LinearLayoutProps>;

  interface RectLayoutProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    contentAlignment?: Alignment;
    width?: number;
    height?: number;
  }

  const RectLayout: React.FC<RectLayoutProps>;

  interface DropdownListProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    text?: string;
    textColor?: vec4;
    textSize?: number;
    iconSize?: number;
    iconColor?: vec4;
    listMaxHeight?: number;
    listTextSize?: number;
    maxCharacterLimit?: number;
    multiSelect?: boolean;
    showList?: boolean;
    selected?: { id?: number; selected?: boolean; };
  }

  const DropdownList: React.FC<DropdownListProps>;

  interface DropdownListItemProps {
  }

  const DropdownListItem: React.FC<DropdownListItemProps>;

  interface ToggleProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    children?: any;
    text?: string;
    textColor?: vec4;
    textSize?: number;
    on?: boolean;
  }

  const Toggle: React.FC<ToggleProps>;

  interface ToggleGroupProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    allowMultipleOn?: boolean;
    allowAllOff?: boolean;
    allTogglesOff?: boolean;
  }

  const ToggleGroup: React.FC<ToggleGroupProps>;

  interface PanelProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
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

  interface TabProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    children?: any;
    text?: string;
    textColor?: vec4;
    textSize?: number;
  }

  const Tab: React.FC<TabProps>;

  interface DialogProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    children?: any;
    text?: string;
    buttonType?: EclipseButtonType;
    cancelText?: string;
    cancelIcon?: SystemIcon;
    confirmText?: string;
    confirmIcon?: SystemIcon;
    expireTime?: number;
  }

  const Dialog: React.FC<DialogProps>;

  interface PageViewProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    defaultPageAlignment?: Alignment;
    defaultPagePadding?: vec4;
    visiblePage?: number;
    pageAlignment?: { index?: number; alignment?: Alignment; };
    pagePadding?: { index?: number; padding?: vec4; };
    width?: number;
    height?: number;
  }

  const PageView: React.FC<PageViewProps>;

  interface WebViewProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    url?: string;
    action?: WebViewAction;
    scrollBy?: vec2;
    width?: number;
    height?: number;
  }

  const WebView: React.FC<WebViewProps>;

  interface PortalIconProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    children?: any;
    text?: string;
    textColor?: vec4;
    textSize?: number;
    hoverScale?: number;
    hoverZOffset?: number;
    iconActivateAnimation?: string;
    iconContextMenuAnimation?: string;
    iconHoverAnimation?: string;
    iconIdleAnimation?: string;
    iconHoverPosition?: vec3;
    labelDisplayMode?: LabelDisplayMode;
  }

  const PortalIcon: React.FC<PortalIconProps>;

  interface ColorPickerProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    color?: vec4;
  }

  const ColorPicker: React.FC<ColorPickerProps>;

  interface TimePickerProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    color?: vec4;
    time?: string;
    showHint?: boolean;
  }

  const TimePicker: React.FC<TimePickerProps>;

  interface DatePickerProps {
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
    alignment?: Alignment;
    activateResponse?: FocusRequest;
    renderingLayer?: RenderingLayer;
    enabled?: boolean;
    eventPassThrough?: boolean;
    eventPassThroughChildren?: boolean;
    gravityWellEnabled?: boolean;
    eventSoundId?: { soundEvent?: SoundEvent; soundName?: string; };
    gravityWellProperties?: { shape?: { size?: vec2; offset?: vec3; roundness?: number; }; snap?: GravityWellSnap; internalSnap?: boolean; };
    color?: vec4;
    date?: string;
    showHint?: boolean;
  }

  const DatePicker: React.FC<DatePickerProps>;

  interface CircleConfirmationProps {
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

  const CircleConfirmation: React.FC<CircleConfirmationProps>;

  interface ContentProps {
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

  interface ModelProps {
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
    bloomStrength?: number;
    color?: vec4;
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
  }

  const Model: React.FC<ModelProps>;

  interface QuadProps {
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
    bloomStrength?: number;
    color?: vec4;
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
    renderResourceId?: number;
    texCoords?: vec4;
    viewMode?: ViewMode;
    size?: vec2;
  }

  const Quad: React.FC<QuadProps>;

  interface VideoProps {
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
    bloomStrength?: number;
    color?: vec4;
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
    renderResourceId?: number;
    texCoords?: vec4;
    viewMode?: ViewMode;
    size?: vec2;
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

  interface AudioProps {
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
  }

  const Audio: React.FC<AudioProps>;

  interface LightProps {
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
    color?: vec4;
    intensity?: number;
    range?: number;
    spotAngle?: number;
    type?: LightType;
    castsShadows?: boolean;
    useHeadPose?: { on?: boolean; offset?: vec4; };
  }

  const Light: React.FC<LightProps>;

  interface LineProps {
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
    bloomStrength?: number;
    color?: vec4;
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

  // Other Types:
  // --------------------------------------------------------------------------------

  type vec2 = [number, number];

  type vec3 = [number, number, number];

  type vec4 = [number, number, number, number];

  type quat = vec4;

  type mat4 = [vec4, vec4, vec4, vec4];

  type CursorHoverState = 'browser-default' | 'browser-pointer' | 'crosshair' | 'default' | 'move' | 'none' | 'scroll' | 'scroll-e' | 'scroll-n' | 'scroll-ne' | 'scroll-nw' | 'scroll-s' | 'scroll-se' | 'scroll-sw' | 'scroll-w' | 'text-input';

  type Alignment = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

  type FocusRequest = 'gain-focus' | 'lose-focus' | 'none';

  type RenderingLayer = 'background-layer' | 'hud-layer' | 'object-layer' | 'post-hud-layer' | 'post-object-layer' | 'pre-object-layer' | 'rendering-layer-max';

  type SoundEvent = 'activate' | 'context-menu-close' | 'context-menu-item-hover' | 'context-menu-item-select' | 'context-menu-open' | 'dialog-cancel' | 'dialog-confirm' | 'dialog-loop' | 'dialog-open' | 'dropdown-item-hover' | 'dropdown-item-select' | 'dropdown-list-collapse' | 'dropdown-list-expand' | 'dropdown-nested-list-collapse' | 'dropdown-nested-list-expand' | 'focus-gained' | 'focus-lost' | 'hover-enter' | 'hover-exit' | 'long-press' | 'panel-transition-horizontal' | 'panel-transition-vertical' | 'scroll-view-scroll-limit' | 'text-cursor-insert' | 'text-password-hide' | 'text-password-show' | 'text-selection-handle-drop' | 'text-selection-handle-grab' | 'text-word-select' | 'toggle-state-off' | 'toggle-state-on';

  type GravityWellSnap = 'center' | 'center-x' | 'center-y' | 'closest-edge' | 'closest-inside-edge';

  type HorizontalTextAlignment = 'center' | 'justify' | 'left' | 'right';

  type FontStyle = 'normal' | 'italic';

  type FontWeight = 'extra-light' | 'light' | 'regular' | 'medium' | 'bold' | 'extra-bold';

  type CursorEdgeScrollMode = 'always' | 'auto' | 'never';

  type TextEntryMode = 'email' | 'none' | 'normal' | 'numeric' | 'url';

  type ScrollBarVisibility = 'always' | 'auto' | 'off';

  type Orientation = 'horizontal' | 'vertical';

  type ScrollDirection = 'horizontal' | 'vertical';

  type PanelCursorTransitionType = 'center' | 'closest-edge' | 'initial-position';

  type Side = 'bottom' | 'left' | 'right' | 'top';

  type PanelEdgeConstraintLevel = 'heavy' | 'impassable' | 'light' | 'manual' | 'medium' | 'none';

  type EclipseButtonType = 'icon' | 'icon-with-label' | 'text' | 'text-with-icon';

  type SystemIcon = 'actions' | 'actions-left' | 'actions-off' | 'actions-right' | 'add' | 'address-book' | 'album-add' | 'album-remove' | 'alphabetical' | 'analytics' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'auto-placement' | 'backspace' | 'battery' | 'block' | 'block-camera' | 'block-cookie' | 'block-location' | 'block-microphone' | 'bluetooth' | 'bluetooth-off' | 'bookmark' | 'bookmark-add' | 'brightness' | 'calendar' | 'camera' | 'camera-iris' | 'carriage-return' | 'chat' | 'check' | 'check-selection' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'clipboard' | 'clock' | 'close' | 'closed-caption' | 'cloud' | 'cloud-off' | 'collection' | 'controller' | 'cookie' | 'copy' | 'credit-card' | 'cut' | 'cv-camera-privilege' | 'do-not-disturb' | 'dot' | 'download' | 'download-cloud' | 'dropdown' | 'edit' | 'effects-palette' | 'eject' | 'emoji' | 'enter' | 'exit' | 'extraction' | 'eye-tracking' | 'fast-forward' | 'fast-forward-ten-second' | 'file' | 'filter' | 'flag' | 'flag-china' | 'flag-france' | 'flag-germany' | 'flag-japan' | 'flag-south-korea' | 'flag-uk' | 'flag-usa' | 'follow' | 'frame' | 'game-controller' | 'generic-three-dimensional' | 'grid' | 'hamburger' | 'hand-orientation-left' | 'hand-orientation-right' | 'heart' | 'heart-add' | 'help' | 'history' | 'home' | 'image' | 'info' | 'keyboard' | 'keyboard-capital' | 'keyboard-language' | 'keyboard-letter' | 'keyboard-number' | 'link' | 'list-view' | 'local-area-server' | 'marquee-selection' | 'merge' | 'mesh' | 'microphone' | 'microphone-mute' | 'minimize' | 'mobile' | 'more' | 'move' | 'multiple-selection' | 'music' | 'music-pause' | 'music-play' | 'network-server' | 'next' | 'notification' | 'object-recognition' | 'open-with' | 'origin' | 'passable-world' | 'paste' | 'pause' | 'permission' | 'person' | 'person-add' | 'person-block' | 'person-follow' | 'person-three' | 'person-two' | 'person-un-follow' | 'person-voip' | 'phone' | 'phone-end-call' | 'phone-incoming-call' | 'phone-switch-call' | 'pin' | 'placeholder-bluetooth' | 'play' | 'playlist-repeat-off' | 'playlist-repeat-on' | 'playlist-repeat-song' | 'playlist-shuffle' | 'playlist-shuffle-off' | 'power' | 'previous' | 'privacy' | 'private-view' | 'public-view' | 'rearrange' | 'refresh' | 'replay' | 'report' | 'resize' | 'restore-media' | 'revolver' | 'rewind-ten-second' | 'screenshot' | 'search' | 'security-lock' | 'security-not-secure' | 'security-unlock' | 'send' | 'settings' | 'share' | 'share-screen' | 'shift-disabled' | 'shift-enabled' | 'shift-enabled-permanent' | '6-dof' | 'sleep' | 'slide-show' | 'snooze' | 'space' | 'star' | 'stop' | 'stream' | 'stream-off' | 'summon' | 'tablet' | 'tab-new' | 'tab-new-image' | 'tab-view-all' | 'tag' | 'text' | 'thumbs-down' | 'thumbs-down-left' | 'thumbs-down-right' | 'thumbs-up' | 'thumbs-up-left' | 'thumbs-up-right' | 'top-chart' | 'trash' | 'undo-reply' | 'unknown-device' | 'update' | 'upload' | 'upload-cloud' | 'view' | 'view-source' | 'voice-feedback' | 'voip' | 'volume' | 'volume-mute' | 'warning' | 'web-xr' | 'wifi' | 'wifi-no-bar' | 'wifi-no-signal' | 'wifi-off' | 'wifi-one-bar' | 'wifi-secure' | 'wifi-secure-no-bar' | 'wifi-secure-no-signal' | 'wifi-secure-one-bar' | 'wifi-unknown' | 'window-new' | 'window-pop-up-block' | 'window-view-all' | 'work' | 'workspaces' | 'zoom-in' | 'zoom-out';

  type WebViewAction = 'back' | 'forward' | 'reload';

  type LabelDisplayMode = 'always' | 'hover';

  type ShaderType = 'diffuse-normal-spec' | 'pbr' | 'unlit-textured';

  type ViewMode = 'full-area' | 'left-right';

  type VideoAction = 'pause' | 'start' | 'stop';

  type AudioAction = 'pause' | 'start' | 'stop' | 'resume';

  type LightType = 'directional' | 'point' | 'spot';

}
