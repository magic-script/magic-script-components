// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
import { TransformNode as _TransformNode } from 'lumin';
import { NodeEventData } from './node-event-data.js';

export class TransformNodeEventData extends NodeEventData {
    constructor(nativeEvent) {
        super(nativeEvent);

        this._addGetProperties([
            'LocalPosition',
            'LocalRotation',
            'LocalScale',
            'PrismPosition',
            'WorldPosition'
        ]);
    }

    getRigidBody() {
        // -> lumin. PhysicsRigidBody
        const rigidBody = this._nativeEvent.getRigidBody();

        return {
            AngularDamping: rigidBody.getAngularDamping(),
            AngularVelocity: rigidBody.getAngularVelocity(),
            // getBodyType: rigidBody
            CenterOfMass: rigidBody.getCenterOfMass(),
            ColliderFlags: rigidBody.getColliderFlags(),
            CollidesWithFlags: rigidBody.getCollidesWithFlags(),
            InertiaTensor: rigidBody.getInertiaTensor(),
            LinearDamping: rigidBody.getLinearDamping(),
            LinearVelocity: rigidBody.getLinearVelocity(),
            Mass: rigidBody.getMass(),
            MaxAngularVelocity: rigidBody.getMaxAngularVelocity(),
            SleepThreshold: rigidBody.getSleepThreshold(),
            Node: new NodeEventData(),
            isColliderFlagSet: (flag) => rigidBody.isColliderFlagSet(flag),
            isCollidesWithFlagSet: (flag) => rigidBody.isCollidesWithFlagSet(flag)
        };
    }

    static isSupported(object) {
        return (object instanceof _TransformNode);
    }
}