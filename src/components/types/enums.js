export const Alignment = {
  topLeft: 'top-left',
  topCenter: 'top-center',
  topRight: 'top-right',
  centerLeft: 'center-left',
  centerCenter: 'center-center',
  centerRight: 'center-right',
  bottomLeft: 'bottom-left',
  bottomCenter: 'bottom-center',
  bottomRight: 'bottom-right'
};

export const AnchorPoint = Alignment;

export const AudioAction = {
  pause: 'pause',
  start: 'start',
  stop: 'stop',
  resume: 'resume'
};

export const ButtonType = {
  icon: 'icon',
  iconWithLabel: 'icon-with-label',
  text: 'text',
  textWithIcon: 'text-with-icon'
};

export const CursorEdgeScrollMode = {
  always: 'always',
  auto: 'auto',
  never: 'never'
};

export const DateFormat = {
  auto: 'auto',
  MMDDYYYY: 'MM/DD/YYYY', 
  DDMMYYYY: 'DD/MM/YYYY', 
  MMYYYY: 'MM/YYYY', 
  DDYYYY: 'DD/YYYY'
};

export const DialogLayout = {
  standard: 'standard',
  wide: 'wide'
};

export const DialogType = {
  custom: 'custom',
  timed: 'timed',
  noAction: 'no-action',
  singleAction: 'single-action',
  dualAction: 'dual-action'
};

export const FitMode = {
  stretch: 'stretch',
  aspectFill: 'aspect-fill',
  aspectFit: 'aspect-fit'
};

export const FontStyle = {
  normal: 'normal',
  italic: 'italic'
};

export const FontWeight = {
  extraLight: 'extra-light',
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  bold: 'bold',
  extraBold: 'extra-bold'
};

export const LabelDisplayMode = {
  always: 'always',
  hover:'hover'
};

export const LightType = {
  directional: 'directional',
  point: 'point',
  spot: 'spot'
};

export const Orientation = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

export const ScrollBarVisibility = {
  always: 'always',
  auto: 'auto',
  off: 'off'
};

export const ScrollDirection = Orientation;

export const Side = {
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  top: 'top'
};

export const SpinnerType = {
  spriteAnimation: 'sprite-animation',
  particlePackage: 'particle-package'
};

export const SystemIcon = {
  actions: 'actions',
  actionsLeft: 'actions-left',
  actionsOff: 'actions-off',
  actionsRight: 'actions-right',
  add: 'add',
  addressBook: 'address-book',
  albumAdd: 'album-add',
  albumRemove: 'album-remove',
  alphabetical: 'alphabetical',
  analytics: 'analytics',
  arrowDown: 'arrow-down',
  arrowLeft: 'arrow-left',
  arrowRight: 'arrow-right',
  arrowUp: 'arrow-up',
  autoPlacement: 'auto-placement',
  backspace: 'backspace',
  battery: 'battery',
  block: 'block',
  blockCamera: 'block-camera',
  blockCookie: 'block-cookie',
  blockLocation: 'block-location',
  blockMicrophone: 'block-microphone',
  bluetooth: 'bluetooth',
  bluetoothOff: 'bluetooth-off',
  bookmark: 'bookmark',
  bookmarkAdd: 'bookmark-add',
  brightness: 'brightness',
  calendar: 'calendar',
  camera: 'camera',
  cameraIris: 'camera-iris',
  carriageReturn: 'carriage-return',
  chat: 'chat',
  check: 'check',
  checkSelection: 'check-selection',
  chevronDown: 'chevron-down',
  chevronLeft: 'chevron-left',
  chevronRight: 'chevron-right',
  chevronUp: 'chevron-up',
  clipboard: 'clipboard',
  clock: 'clock',
  close: 'close',
  closedCaption: 'closed-caption',
  cloud: 'cloud',
  cloudOff: 'cloud-off',
  collection: 'collection',
  controller: 'controller',
  cookie: 'cookie',
  copy: 'copy',
  creditCard: 'credit-card',
  cut: 'cut',
  cvCameraPrivilege: 'cv-camera-privilege',
  doNotDisturb: 'do-not-disturb',
  dot: 'dot',
  download: 'download',
  downloadCloud: 'download-cloud',
  dropdown: 'dropdown',
  edit: 'edit',
  effectsPalette: 'effects-palette',
  eject: 'eject',
  emoji: 'emoji',
  enter: 'enter',
  exit: 'exit',
  extraction: 'extraction',
  eyeTracking: 'eye-tracking',
  fastForward: 'fast-forward',
  fastForwardTenSecond: 'fast-forward-ten-second',
  file: 'file',
  filter: 'filter',
  flag: 'flag',
  flagChina: 'flag-china',
  flagFrance: 'flag-france',
  flagGermany: 'flag-germany',
  flagJapan: 'flag-japan',
  flagSouthKorea: 'flag-south-korea',
  flagUk: 'flag-uk',
  flagUsa: 'flag-usa',
  follow: 'follow',
  frame: 'frame',
  gameController: 'game-controller',
  genericThreeDimensional: 'generic-three-dimensional',
  grid: 'grid',
  hamburger: 'hamburger',
  handOrientationLeft: 'hand-orientation-left',
  handOrientationRight: 'hand-orientation-right',
  heart: 'heart',
  heartAdd: 'heart-add',
  help: 'help',
  history: 'history',
  home: 'home',
  image: 'image',
  info: 'info',
  keyboard: 'keyboard',
  keyboardCapital: 'keyboard-capital',
  keyboardLanguage: 'keyboard-language',
  keyboardLetter: 'keyboard-letter',
  keyboardNumber: 'keyboard-number',
  link: 'link',
  listView: 'list-view',
  localAreaServer: 'local-area-server',
  marqueeSelection: 'marquee-selection',
  merge: 'merge',
  mesh: 'mesh',
  microphone: 'microphone',
  microphoneMute: 'microphone-mute',
  minimize: 'minimize',
  mobile: 'mobile',
  more: 'more',
  move: 'move',
  multipleSelection: 'multiple-selection',
  music: 'music',
  musicPause: 'music-pause',
  musicPlay: 'music-play',
  networkServer: 'network-server',
  next: 'next',
  notification: 'notification',
  objectRecognition: 'object-recognition',
  openWith: 'open-with',
  origin: 'origin',
  passableWorld: 'passable-world',
  paste: 'paste',
  pause: 'pause',
  permission: 'permission',
  person: 'person',
  personAdd: 'person-add',
  personBlock: 'person-block',
  personFollow: 'person-follow',
  personThree: 'person-three',
  personTwo: 'person-two',
  personUnFollow: 'person-un-follow',
  personVoip: 'person-voip',
  phone: 'phone',
  phoneEndCall: 'phone-end-call',
  phoneIncomingCall: 'phone-incoming-call',
  phoneSwitchCall: 'phone-switch-call',
  pin: 'pin',
  placeholderBluetooth: 'placeholder-bluetooth',
  play: 'play',
  playlistRepeatOff: 'playlist-repeat-off',
  playlistRepeatOn: 'playlist-repeat-on',
  playlistRepeatSong: 'playlist-repeat-song',
  playlistShuffle: 'playlist-shuffle',
  playlistShuffleOff: 'playlist-shuffle-off',
  power: 'power',
  previous: 'previous',
  privacy: 'privacy',
  privateView: 'private-view',
  publicView: 'public-view',
  rearrange: 'rearrange',
  refresh: 'refresh',
  replay: 'replay',
  report: 'report',
  resize: 'resize',
  restoreMedia: 'restore-media',
  revolver: 'revolver',
  rewindTenSecond: 'rewind-ten-second',
  screenshot: 'screenshot',
  search: 'search',
  securityLock: 'security-lock',
  securityNotSecure: 'security-not-secure',
  securityUnlock: 'security-unlock',
  send: 'send',
  settings: 'settings',
  share: 'share',
  shareScreen: 'share-screen',
  shiftDisabled: 'shift-disabled',
  shiftEnabled: 'shift-enabled',
  shiftEnabledPermanent: 'shift-enabled-permanent',
  '6Dof': '6-dof',
  sleep: 'sleep',
  slideShow: 'slide-show',
  snooze: 'snooze',
  space: 'space',
  star: 'star',
  stop: 'stop',
  stream: 'stream',
  streamOff: 'stream-off',
  summon: 'summon',
  tablet: 'tablet',
  tabNew: 'tab-new',
  tabNewImage: 'tab-new-image',
  tabViewAll: 'tab-view-all',
  tag: 'tag',
  text: 'text',
  thumbsDown: 'thumbs-down',
  thumbsDownLeft: 'thumbs-down-left',
  thumbsDownRight: 'thumbs-down-right',
  thumbsUp: 'thumbs-up',
  thumbsUpLeft: 'thumbs-up-left',
  thumbsUpRight: 'thumbs-up-right',
  topChart: 'top-chart',
  trash: 'trash',
  undoReply: 'undo-reply',
  unknownDevice: 'unknown-device',
  update: 'update',
  upload: 'upload',
  uploadCloud: 'upload-cloud',
  view: 'view',
  viewSource: 'view-source',
  voiceFeedback: 'voice-feedback',
  voip: 'voip',
  volume: 'volume',
  volumeMute: 'volume-mute',
  warning: 'warning',
  webXr: 'web-xr',
  wifi: 'wifi',
  wifiNoBar: 'wifi-no-bar',
  wifiNoSignal: 'wifi-no-signal',
  wifiOff: 'wifi-off',
  wifiOneBar: 'wifi-one-bar',
  wifiSecure: 'wifi-secure',
  wifiSecureNoBar: 'wifi-secure-no-bar',
  wifiSecureNoSignal: 'wifi-secure-no-signal',
  wifiSecureOneBar: 'wifi-secure-one-bar',
  wifiUnknown: 'wifi-unknown',
  windowNew: 'window-new',
  windowPopUpBlock: 'window-pop-up-block',
  windowViewAll: 'window-view-all',
  work: 'work',
  workspaces: 'workspaces',
  zoomIn: 'zoom-in',
  zoomOut: 'zoom-out'
};

export const TextAlign = {
  left: 'left',
  center: 'center',
  right: 'right'
};

export const TextEntryMode = {
  email: 'email',
  none: 'none',
  normal: 'normal',
  numeric: 'numeric',
  ur: 'url'
};

export const TimeFormat = {
  auto: 'auto',
  hhmmss: 'hh:mm:ss', 
  hhmmssp: 'hh:mm:ss p', 
  hhmm: 'hh:mm', 
  hhmmp: 'hh:mm p',  
  mmss: 'mm:ss'
};

export const ToggleType = {
  default: 'default',
  checkbox: 'checkbox',
  radio: 'radio',
};

export const VideoAction = {
  pause: 'pause',
  start: 'start',
  stop: 'stop'
};

export const ViewMode = {
  fullArea: 'full-area',
  leftRight: 'left-right'
};
