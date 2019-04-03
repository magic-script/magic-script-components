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
import { VideoBuilder } from './elements/builders/video-builder.js';
import { AudioBuilder } from './elements/builders/audio-builder.js';
import { TabBuilder } from './elements/builders/tab-builder.js';
import { DialogBuilder } from './elements/builders/dialog-builder.js';

import { ModelBuilder } from './elements/builders/model-builder.js';




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
        'pageView': () => { throw new Error('Page View is not supported yet'); },
        'webView': () => { throw new Error('Web View is not supported yet'); },
        'portalIcon': () => { throw new Error('Portal Icon is not supported yet'); },
        'colorPicker': () => { throw new Error('Color Picker is not supported yet'); },
        'timePicker': () => { throw new Error('Time Picker is not supported yet'); },
        'datePicker': () => { throw new Error('Date Picker is not supported yet'); },
        'circleConfirmation': () => { throw new Error('Circle Confirmation is not supported yet'); }
    }
};
