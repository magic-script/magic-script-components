// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ImmersiveApp, ModelNode, TransformNode, ui } from 'lumin';

import { NativeFactory } from '../../core/native-factory.js';
import { MxsLandscapeApp } from './mxs-landscape-app.js';
import { MxsPrismController } from './controllers/mxs-prism-controller.js';

import { UiNodeEvents } from './types/ui-node-events.js';

export class PlatformFactory extends NativeFactory {
    constructor(componentMapping) {
        super(componentMapping);

        // { type, builder }
        this.elementBuilders = {};
        this.controllerBuilders = {};

        // Storing the app in order to get access to nodes prism
        this._app;
    }

    isController(element) {
        return element instanceof MxsPrismController;
    }

    setComponentEvents(element, properties) {
        const eventHandlers = Object.keys(properties)
            .filter(key => key.length > 2 && key.startsWith('on'))
            .map(key => ({ name: key, handler: properties[key] }));

        for (const pair of eventHandlers) {
            const eventDescriptor = UiNodeEvents[pair.name];

            if (eventDescriptor !== undefined) {
                if (typeof pair.handler === 'function') {
                    element[eventDescriptor.subName]((eventData) => {
                        pair.handler(new eventDescriptor.dataType(eventData));
                    });
                } else {
                    throw new TypeError(`The event handler for ${pair.name} is not a function`);
                }
            } else {
                throw new TypeError(`Event ${pair.name} is not recognized event`);
            }
        }
    }

    createElement(name, container, ...args) {
        if (typeof name !== 'string')
        {
            throw new Error('PlatformFactory.createElement expects "name" to be string');
        }

        let element;
        if (this._mapping.elements[name] !== undefined) {
            element = this._createElement(name, container, ...args);
            Object.defineProperty(element, 'childController', {
                enumerable: true,
                writable: true,
                configurable: false,
                value: undefined
            });
        } else if (this._mapping.controllers[name] !== undefined) {
            element = this._createController(name, container, ...args);
        } else {
            throw new Error(`Unknown tag: ${name}`);
        }

        Object.defineProperty(element, 'addChild$Universal', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: (child) => {
                if (this.isController(element)) {
                    if (this.isController(child)) {
                        element.addChildController(child);
                    } else {
                        element.addChild(child);
                        if (child.childController !== undefined) {
                            element.addChildController(child.childController);
                        }
                    }
                } else {
                    if (this.isController(child)) {
                        element.childController = child;
                        const handler = () => {
                            element.addChild(child.getRoot());
                            child.removeListener('onAttachPrism', handler);
                        };

                        child.addListener('onAttachPrism', handler);
                    } else {
                        element.childController = child.childController;
                        this._addChildNodeToParentNode(element, child);
                    }
                }
            }
        });

        return element;
    }

    _createElement(name, container, ...args) {
        if (this.elementBuilders[name] === undefined) {
            const createBuilder = this._mapping.elements[name];
            this.elementBuilders[name] = createBuilder();
        }

        const prism = container.controller.getPrism();
        const element = this.elementBuilders[name].create(prism, ...args);

        // TODO: Move setComponentEvents to the builders !!!
        this.setComponentEvents(element, args[0]); // args = [props]

        return element;
    }

    _createController(name, container, ...args) {
        if (this.controllerBuilders[name] === undefined) {
            const createBuilder = this._mapping.controllers[name];
            this.controllerBuilders[name] = createBuilder();
        }

        return this.controllerBuilders[name].create(...args);
    }

    updateElement(name, ...args) {
        if (typeof name !== 'string')
        {
            throw new Error('PlatformFactory.updateElement expects "name" to be string');
        }

        if (this._mapping.elements[name] !== undefined) {
            this.elementBuilders[name].update(...args);
        } else if (this._mapping.controllers[name] !== undefined) {
            this.controllerBuilders[name].update(...args);
        } else {
            throw new Error(`Unknown tag: ${name}`);
        }
    }

    // TODO: Should be replaced by Proxy.addChild(parent, child)
    // after replacing builders with proxies
    _addChildNodeToParentNode(parent, child) {
        if (parent instanceof ui.UiScrollView) {
            if (child instanceof ui.UiScrollBar) {
                parent.setScrollBar(child.Orientation, child);
            }

            if (child instanceof TransformNode) {
                if (child.offset !== undefined) {
                    parent.setScrollContent(child, child.offset);
                } else {
                    parent.setScrollContent(child);
                }
            }
        } else if (parent instanceof ui.UiListView) {
            if (child instanceof ui.UiScrollBar) {
                parent.setScrollBar(child);
            }
            if (child instanceof ui.UiListViewItem) {
                const { Padding, ItemAlignment } = child;
                if (Padding !== undefined) {
                    if (ItemAlignment !== undefined) {
                        parent.addItem(child, Padding, ItemAlignment);
                    } else {
                        parent.addItem(child, Padding);
                    }
                } else {
                    parent.addItem(child);
                }
            }
        } else if (parent instanceof ui.UiLinearLayout || parent instanceof ui.UiGridLayout) {
            const { Padding, ItemAlignment } = child;
            if (Padding !== undefined) {
                if (ItemAlignment !== undefined) {
                    parent.addItem(child, Padding, ItemAlignment);
                } else {
                    parent.addItem(child, Padding);
                }
            } else {
                parent.addItem(child);
            }
        } else if (parent instanceof ui.UiSlider) {
            if (child instanceof TransformNode) {
                if (child.offset !== undefined) {
                    parent.setSliderModel(child, child.offset);
                } else {
                    parent.setSliderModel(child);
                }
            }
        } else if (parent instanceof ui.UiRectLayout) {
            if (child instanceof TransformNode) {
                parent.setContent(child);
            }
        } else if (parent instanceof ui.UiDropDownList) {
            if (child instanceof TransformNode) {
                if (child.offset !== undefined) {
                    parent.ButtonModel(child, child.offset);
                } else {
                    parent.ButtonModel(child);
                }
            }
            if (child instanceof ui.DropDownListItem) {
                const list = parent.getList();
                list.push(child);
                parent.setList(list);
            }
            // ListFont: Font2dResource(fontDesc, fontFile, a_absolutePath)
            // fontDesc = Font2dDesc(advanceDir, flowDir, tileSize, quality, minAlpha)
        } else if (parent instanceof ui.UiDialog) {
            if (child instanceof TransformNode) {
                parent.setDialogContent(child);
            }
        } else if (parent instanceof ui.UiToggle) {
            if (child instanceof TransformNode) {
                if (child.offset !== undefined) {
                    parent.setToggleModel(child, child.offset);
                } else {
                    parent.setToggleModel(child);
                }
            }
        } else if (parent instanceof ui.UiPanel) {
            if (child instanceof ui.UiPanel) {
                if (child.Side !== undefined) {
                    parent.setEdgeTransition(child.Side, child);
                }
            }
        } else if (parent instanceof ui.UiPortalIcon) {
            if (child instanceof ModelNode) {
                parent.setIconModel(child, child.offset);
            } else if (child instanceof TransformNode) {
                parent.setBackgroundModel(child, child.offset);
            }
        } else if (parent instanceof ui.UiButton) {
            if (child instanceof TransformNode) {
                if (child.offset !== undefined) {
                    parent.setButtonModel(child, child.offset);
                } else {
                    parent.setButtonModel(child);
                }
            }
        } else {
            parent.addChild(child);
        }
    }

    addChildElement(parent, child) {
        if (typeof child === 'string') {
            parent.setText(child);
        } else if (typeof child === 'number') {
            parent.setText(child.toString());
        } else {
            parent.addChild$Universal(child);
        }
    }

    _removeChildNodeToParentNode(parent, child) {
        if (parent instanceof ui.UiScrollView) {
            // ScrollBar: child is <UiScrollBar, orientation>
            if (child instanceof ui.UiScrollBar) {
                parent.setScrollBar(child);
            }
            // ScrollContent: child is <TransformNode, vec3>
        } else if (parent instanceof ui.UiListView) {
            // ScrollBar: child is UiSCrollBar
            // ListViewItem: use addItem instead of addChild
        } else if (parent instanceof ui.UiSlider) {
            // SliderModel: child is <Node, vec3>
        } else if (parent instanceof ui.UiRectLayout) {
            // Content: child is TransformNode
        } else if (parent instanceof ui.UiDropDownList) {
            // ButtonModel: child is <Node, vec3>
            // List: child is array of DropDownListItem(s)
            // ListFont: Font2dResource(fontDesc, fontFile, a_absolutePath)
            // fontDesc = Font2dDesc(advanceDir, flowDir, tileSize, quality, minAlpha)
        } else if (parent instanceof ui.UiDialog) {
            // DialogContent: child is TransformNode
        } else if (parent instanceof ui.UiToggle) {
            // ToggleModel: child is <Node, vec3>
        } else if (parent instanceof ui.UiPanel) {
            // EdgeTransition: child is <side, UiPanel>
        } else if (parent instanceof ui.UiPortalIcon) {
            // BackgroundModel: child is <Node, vec3>
            // IconModel: : child is <Node, vec3>
        }
    }

    // TODO(tcuadra): Expose listView.removeItem(ListViewItem) overload
    //                to avoid the need to perform this lookup
    _getListViewIndex(listView, item) {
        for (let i = 0; i < listView.getItemCount(); i++) {
            if (item === listView.getItem(i)) {
                return i;
            }
        }
        return -1;
    }

    removeChildElement(parent, child) {
        if (typeof child === 'string' || typeof child === 'number') {
            parent.setText('');
        } else {
            if (this.isController(child)) {
                if ( !this.isController(parent) ) {
                    throw new Error('Removing controller from non-controller parent');
                }
                parent.removeChildController(child);
            } else if (this.isController(parent)) {
                parent.getRoot().removeChild(child);
                parent.getPrism().deleteNode(child);
            } else if (parent instanceof ui.UiListView) {
                parent.removeItem(this._getListViewIndex(parent, child));
            } else {
                parent.removeChild(child);

                const prism = this._app.getPrism(child.getPrismId());
                prism.deleteNode(child);
            }
        }
    }

    appendChildToContainer(container, child) {
        console.log(child);
        console.log(container);

        if (this.isController(child)){
            container.controller.addChildController(child);
            container.parent.addChild(child.getRoot());
        } else {
            container.controller.getRoot().addChild(child);
        }
    }

    removeChildFromContainer(container, child) {
        if (this.isController(child)) {
            container.controller.removeChildController(child);
        } else {
            container.controller.getRoot().removeChild(child);
        }
    }

    createApp(appComponent) {
        if (typeof appComponent !== 'object') {
            throw new TypeError('Invalid argument: PlatformFactory.createContainer expects "component" to be an object');
        }

        const appType = appComponent.props.type;

        let app;

        if (appType === 'landscape') {
            app = new MxsLandscapeApp(appComponent, 0.5);
        } else if (appType === 'immersive') {
            app = new ImmersiveApp(0.5);
            app.type = 'immersiveApp';
        } else {
            throw new TypeError(`Invalid argument: Unknown app type: ${appType}`);
        }

        // Saving the app so the factory can get access to the nodes prism
        this._app = app;
        return app;
    }
}
