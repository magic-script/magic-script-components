import configuration from './configuration.js';

export default {
    _init() {
        this._nativeFactory = new configuration.nativeFactory(configuration.nativeMapping);
    },

    bootstrap(app) {
        this._init();

        this._app = this._nativeFactory.createApp(app);
    },

    getContainer(nodeName) {
        return this._app.getContainer(nodeName);
    }
}

export {
    Audio,
    Button,
    CircleConfirmation,
    ColorPicker,
    Content,
    DatePicker,
    Dialog,
    DropdownList,
    DropdownListItem,
    GridLayout,
    Image,
    Light,
    Line,
    LinearLayout,
    ListView,
    ListViewItem,
    Model,
    PageView,
    Panel,
    PortalIcon,
    ProgressBar,
    Quad,
    RectLayout,
    ScrollBar,
    ScrollView,
    Slider,
    Spinner,
    Tab,
    Text,
    TextEdit,
    TimePicker,
    Toggle,
    ToggleGroup,
    Video,
    View,
    WebView
} from './components.js'