import { PrismController } from 'lumin';
import { ReactMagicScript } from '../../react-magic-script/react-magic-script.js';

export class MxsPrismController extends PrismController {
    constructor(appComponent) {
        super();      
        this._app = appComponent;
        this._containers = new WeakMap();
    }

    onAttachPrism() {
        // TODO: name should be injected
        this.getRoot().setName('_root');
        try {
            ReactMagicScript.render(this._app, this.getContainer());
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    getContainer(nodeName) {
        const prism = this.getPrism();
        const root = this.getRoot();
        const parent = nodeName ? this.findChild(nodeName) : root;
      
        let container = this._containers[parent];
      
        if (!container) {
            container = { parent, prism };
            this._containers[parent] = container;
        }

        return container;
    }

    findChild(nodeName) {
        const root = this.getRoot();

        return root.getName() === nodeName
            ? root
            : root.findChild(nodeName);
    }
}