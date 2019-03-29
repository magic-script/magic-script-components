import { GroupBuilder } from './elements/builders/group-builder.js';
import { UiNodeBuilder } from './elements/builders/ui-node-builder.js';
import { TextBuilder } from './elements/builders/text-builder.js';
import { TextEditBuilder } from './elements/builders/text-edit-builder.js';
import { ButtonBuilder } from './elements/builders/button-builder.js';
import { ImageBuilder } from './elements/builders/image-builder.js';
import { ScrollBarBuilder } from './elements/builders/scroll-bar-builder.js';
import { ScrollViewBuilder } from './elements/builders/scroll-view-builder.js';
import { ListViewBuilder } from './elements/builders/list-view.js-builder.js';
import { ListViewItemBuilder } from './elements/builders/list-view-item-builder.js';

import { ModelNodeBuilder } from './elements/builders/model-node-builder.js';

export default {
    version: '1.0',
    platform: 'lumin-runtime',  
    components: {
        // 'view': GroupBuilder,
        'view': () => new UiNodeBuilder(),
        'text': () => new TextBuilder(),
        'textEdit': () => new TextEditBuilder(),
        'button': () => new ButtonBuilder(),
        'image': () => new ImageBuilder(),
        'scrollBar': () => new ScrollBarBuilder(),
        'scrollView': () => new ScrollViewBuilder(),
        'listView': () => new ListViewBuilder(),
        'listViewItem': () => new ListViewItemBuilder(),
        'model': () => new ModelNodeBuilder
    }
};
