// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { PrismController } from 'lumin';
import { ReactMagicScript } from '../../../react-magic-script/react-magic-script.js'

export class AppPrismController extends PrismController {
    constructor(appComponent) {
        super();
        this._app = appComponent;
        this._containers = new WeakMap();
    }

    getRootNodeName(componentName) {
        return componentName === undefined
            ? '__root_prism_controller_'
            : `__root_prism_controller_${componentName.trim().replace(' ', '_')}`;
    }

    findChild(nodeName) {
        const root = this.getRoot();
        return root.getName() === nodeName ? root : root.findChild(nodeName);
    }

    getContainer(nodeName) {
        const parent = nodeName === undefined
            ? this.getRoot()
            : this.findChild(nodeName);

        let container = this._containers[parent];

        if (container === undefined) {
            container = { parent: parent, controller: this };
            this._containers[parent] = container;
        }

        return container;
    }

    onAttachPrism(prism) {
        const rootNodeName = this.getRootNodeName(this._app.props.name);
        this.getRoot().setName(rootNodeName);

        try {
            ReactMagicScript.render(this._app, this.getContainer());
        } catch (error) {
            console.log(`${error.name} - ${error.message}\n${error.stack}`);
            throw error;
        }
    }

    onDetachPrism(prism) {
        this.deleteSceneGraph();
    }
}