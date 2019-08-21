// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { ui } from 'lumin';

import { MxsPanel } from '../mxs-panel.js';
import { UiNodeBuilder } from './ui-node-builder.js';
import { ArrayProperty } from '../properties/array-property.js';
import { PrimitiveTypeProperty } from '../properties/primitive-type-property.js';

import { PanelEdgeConstraintLevel } from '../../types/panel-edge-constraint-level.js';
import { PanelCursorTransitionType } from '../../types/panel-cursor-transition-type.js';
import { Side } from '../../types/side.js';

export class PanelBuilder extends UiNodeBuilder {
    constructor(){
        super();

        this._propertyDescriptors['cursorConstrained']  = new PrimitiveTypeProperty('cursorConstrained', 'setCursorConstrained', true, 'boolean');
        this._propertyDescriptors['cursorInitialPosition']  = new PrimitiveTypeProperty('cursorInitialPosition', 'setCursorInitialPosition', true, 'vec3');
        this._propertyDescriptors['cursorTransitionType'] = new EnumProperty('cursorTransitionType', 'setCursorTransitionType', true, PanelCursorTransitionType, 'PanelCursorTransitionType');
        this._propertyDescriptors['cursorVisible']  = new PrimitiveTypeProperty('cursorVisible', 'setCursorVisible', true, 'boolean');

        // edgeConstraint
        const edgeConstraintProperties = [
            new EnumProperty('side', undefined, undefined, Side, 'Side'),
            new PrimitiveTypeProperty('constraintMagnitude', undefined, undefined, 'number')
        ];

        this._propertyDescriptors['edgeConstraint'] = new ClassProperty('edgeConstraint', 'setEdgeConstraint', false, edgeConstraintProperties);

        // edgeConstraintLevel
        const edgeConstraintLevelProperties = [
            new EnumProperty('side', undefined, undefined, Side, 'Side'),
            new EnumProperty('level', undefined, undefined, PanelEdgeConstraintLevel, 'PanelEdgeConstraintLevel')
        ];

        this._propertyDescriptors['edgeConstraintLevel'] = new ClassProperty('edgeConstraintLevel', 'setEdgeConstraintLevel', false, edgeConstraintLevelProperties);

        // PanelShape - new BoundaryShape(size, roundness, offsetopt)
        const panelShapeProperties = [
            new ArrayProperty('size', undefined, undefined, 'vec2'),
            new ArrayProperty('offset', undefined, undefined, 'vec3'),
            new PrimitiveTypeProperty('roundness', undefined, undefined, 'number')
        ];

        this._propertyDescriptors['panelShape'] = new ClassProperty('panelShape', 'setPanelShape', false, panelShapeProperties);

        // Side (EdgeTransition)
        this._propertyDescriptors['side'] = new EnumProperty('side', 'setSide', false, Side, 'Side');
    }


    create(prism, properties) {
        this.throwIfInvalidPrism(prism);

        const element = MxsPanel.Create(prism);

        this.update(element, undefined, properties);

        return element;
    }

    setEdgeConstraint(element, oldProperties, newProperties) {
        const { side, constraintMagnitude } = newProperties;

        if ( side !== undefined && constraintMagnitude !== undefined ) {
            element.setEdgeConstraint(side, constraintMagnitude);
        }
    }

    setEdgeConstraintLevel(element, oldProperties, newProperties) {
        const { side, level } = newProperties;

        if ( side !== undefined && level !== undefined ) {
            element.setEdgeConstraintLevel(side, level);
        }
    }

    setPanelShape(element, oldProperties, newProperties) {
        const { size, roundness } = newProperties;

        if ( size !== undefined, roundness !== undefined ) {
            const offset = this.getPropertyValue('offset', [0,0,0], newProperties);
            const panelShape = new ui.BoundaryShape(size, roundness, offset);
            element.setPanelShape(panelShape);
        }
    }

    setSide(element, oldProperties, newProperties) {
        const side = newProperties.side;
        if (side !== undefined) {
            element.Side = Side[side];
        }
    }
}
