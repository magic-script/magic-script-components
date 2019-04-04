import { UiNodeBuilder } from './elements/builders/ui-node-builder.js';
import { GroupBuilder } from './elements/builders/group-builder.js';
import { TextBuilder } from './elements/builders/text-builder.js';
import { TextEditBuilder } from './elements/builders/text-edit-builder.js';
import { ButtonBuilder } from './elements/builders/button-builder.js';
import { ImageBuilder } from './elements/builders/image-builder.js';
import { ScrollBarBuilder } from './elements/builders/scroll-bar-builder.js';
import { ScrollViewBuilder } from './elements/builders/scroll-view-builder.js';
import { ListViewBuilder } from './elements/builders/list-view.js-builder.js';
import { ListViewItemBuilder } from './elements/builders/list-view-item-builder.js';
import { LoadingSpinnerBuilder } from './elements/builders/loading-spinner-builder.js';
import { SliderBuilder } from './elements/builders/slider-builder.js';
import { ProgressBarBuilder } from './elements/builders/progress-bar-builder.js';
import { LinearLayoutBuilder } from './elements/builders/linear-layout-builder.js';
import { RectLayoutBuilder } from './elements/builders/rect-layout-builder.js';
import { DropdownListBuilder } from './elements/builders/dropdown-list-builder.js';
import { DropdownListItemBuilder } from './elements/builders/dropdown-list-item-builder.js';
import { ToggleBuilder } from './elements/builders/toggle-builder.js';
import { ToggleGroupBuilder } from './elements/builders/toggle-group-builder.js';
import { PanelBuilder } from './elements/builders/panel-builder.js';
import { TabBuilder } from './elements/builders/tab-builder.js';
import { DialogBuilder } from './elements/builders/dialog-builder.js';
import { PageViewBuilder } from './elements/builders/page-view-builder.js';
import { WebViewBuilder } from './elements/builders/web-view-builder.js';
import { PortalIconBuilder } from './elements/builders/portal-icon-builder.js';
import { ColorPickerBuilder } from './elements/builders/color-picker-builder.js';
import { TimePickerBuilder } from './elements/builders/time-picker-builder.js';
import { DatePickerBuilder } from './elements/builders/date-picker-builder.js';
import { CircleConfirmationBuilder } from './elements/builders/circle-confirmation-builder.js';
import { ModelBuilder } from './elements/builders/model-builder.js';
import { VideoBuilder } from './elements/builders/video-builder.js';
import { AudioBuilder } from './elements/builders/audio-builder.js';

export default {
    version: '1.0',
    platform: 'lumin-runtime',  
    components: {
        // Phase 1
        'view': GroupBuilder,
        'scene': GroupBuilder,
        // 'view': () => new UiNodeBuilder(),
        'text': () => new TextBuilder(),
        'textEdit': () => new TextEditBuilder(),
        'button': () => new ButtonBuilder(),
        'image': () => new ImageBuilder(),
        'scrollBar': () => new ScrollBarBuilder(),
        'scrollView': () => new ScrollViewBuilder(),
        'listView': () => new ListViewBuilder(),
        'listViewItem': () => new ListViewItemBuilder(),
        'model': () => new ModelBuilder,

        // Phase 2
        'spinner': () => new LoadingSpinnerBuilder(),
        'slider': () => new SliderBuilder(),
        'progressBar': () => new ProgressBarBuilder(),
        'linearLayout': () => new LinearLayoutBuilder(),
        'rectLayout': () => new RectLayoutBuilder(),
        'dropdownList': () => new DropdownListBuilder(),
        'dropdownListItem': () => new DropdownListItemBuilder(),
        'toggle': () => new ToggleBuilder(),
        'toggleGroup': () => new ToggleGroupBuilder(),
        'panel': () => new PanelBuilder(),
        'video': () => new VideoBuilder(),
        'audio': () => new AudioBuilder(),
        
        // Phase 3
        'tab': () => new TabBuilder(),
        'dialog': () => new DialogBuilder(),
        'pageView': () => new PageViewBuilder(),
        'webView': () => new WebViewBuilder(),
        'portalIcon': () => new PortalIconBuilder(),
        'colorPicker': () => new ColorPickerBuilder(),
        // 'timePicker': () => new TimePickerBuilder(),
        'datePicker': () => new DatePickerBuilder(),
        'circleConfirmation': () => new CircleConfirmationBuilder()
    }
};
