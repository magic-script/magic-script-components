---
id: circleConfirmation
title: CircleConfirmation
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs extension='gif' component='circleconfirmation' />​

## Description

CircleConfirmation is the UI element intended to confirm powering off. The user moves the control knob using the touchpad of the Control. When the user makes a complete circle with the control knob, CircleConfirmation signals this to the client code. The client code can then power off upon confirmation receipt.

## Example

```javascript
import React from 'react';
import { View, CircleConfirmation, Scene, Prism } from 'magic-script-components';

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
    }

    onConfirmationCanceled = event => {
        console.log("onConfirmationCanceled");
    };
    onConfirmationUpdated = event => {
        console.log("onConfirmationUpdated");
    };
    onConfirmationCompleted = event => {
        console.log("onConfirmationCompleted");
    };


    render() {
        return (
            <Scene>
                <Prism size={[2, 2, 1]} >
                    <View name='main-view' alignment={'center-center'}>
                        <CircleConfirmation
                            onConfirmationCanceled={this.onConfirmationCanceled}
                            onConfirmationCompleted={this.onConfirmationCompleted}
                            onConfirmationUpdated={this.onConfirmationUpdated}
                            radius={0.2}
                        ></CircleConfirmation>
                    </View>
                </Prism>
            </Scene>
        );
    }
}
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name   | Type   | Default Value | Required | Description                                                                                                                                                                       |
| ------ | ------ |    :------:   | :------: |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius | number |      0.2      |    N     |The radius of the circle the control knob travels to complete the confirmation. The default height is 0.1 (100mm). Setting the value to '0' sets the height to the default height. |
