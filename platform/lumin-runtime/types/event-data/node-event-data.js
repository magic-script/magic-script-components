// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { Node as _Node } from 'lumin';
import { EventData } from './event-data.js';

export class NodeEventData extends EventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'AABB',
            'AnchorPosition',
            'ChildCount',
            'CurrentPrismTransform',
            'CurrentWorldTransform',
            'CursorHoverState',
            'LocalAABB',
            'LocalTransform',
            'Name',
            'NodeId',
            'ParentedBoneName',
            'PrismId'
        ]);
    }

    getChild() {
        // -> Node
        return new NodeEventData(this._nativeEvent.getChild());
    }

    getParent() {
        // -> Node
        return new NodeEventData(this._nativeEvent.getParent());
    }


    getRoot() {
        // -> lumin.RootNode
        return new NodeEventData(this._nativeEvent.getRoot());
    }

    isInLayer(layer) {
        return this._nativeEvent.isInLayer(layer);
    }

    // isInSubtree(node) {}

    isSkipRaycast() {
        return this._nativeEvent.isSkipRaycast();
    }

    isTriggerable() {
        return this._nativeEvent.isTriggerable();
    }

    isVisibilityInherited() {
        return this._nativeEvent.isVisibilityInherited();
    }

    isVisible() {
        return this._nativeEvent.isVisible();
    }

    static isSupported(event) {
        return (event instanceof _Node);
    }
}