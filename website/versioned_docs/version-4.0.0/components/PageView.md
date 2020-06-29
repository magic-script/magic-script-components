---
id: pageView
title: PageView
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs  extension='gif' component='pageview'/>​

## Description

The PageView component is used to switch between displaying individual page node hierarchies. Use the PageView component to toggle between individual page node hierarchies. By default, the width and height of the PageView is `0` to allow the page view to expand to fit the content. You can constrain one or both values. There is no padding for views by default. Unless otherwise set, all pages within the view are aligned to the top left.

## Example

```javascript
import React from 'react';
import { View, PageView, GridLayout, Image, Scene, Prism } from 'magic-script-components';

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 0, photoIndex: 0 };
    this.photos = [
      { image: require('../../resources/contact1.jpg') },
      { image: require('../../resources/contact2.jpg') },
      { image: require('../../resources/contact1.jpg') },
      { image: require('../../resources/contact2.jpg') }
    ];
  }

  renderGalleryPage() {
    return (
      <GridLayout key={"page1"} anchorPoint={'center-center'} columns={2} defaultItemPadding={[0.02, 0.02, 0.02, 0.02]}>
        <Image filePath={this.photos[0].image} width={0.2} height={0.2} onClick={event => this.setState({ pageIndex: 1, photoIndex: 0 })} />
        <Image filePath={this.photos[1].image} width={0.2} height={0.2} onClick={event => this.setState({ pageIndex: 1, photoIndex: 1 })} />
        <Image filePath={this.photos[2].image} width={0.2} height={0.2} onClick={event => this.setState({ pageIndex: 1, photoIndex: 2 })} />
        <Image filePath={this.photos[3].image} width={0.2} height={0.2} onClick={event => this.setState({ pageIndex: 1, photoIndex: 3 })} />
      </GridLayout>
    )
  }

  renderPhotoPage(photoIndex) {
    return (
      <Image key={"page2"} filePath={this.photos[photoIndex].image} width={0.5} height={0.5} onClick={event => this.setState({ pageIndex: 0 })} />
    )
  }

  render() {
    const { pageIndex, photoIndex } = this.state
    return (
      <Scene>
        <Prism size={[1, 1, 0.2]} >
          <View name="main-view" anchorPoint={'center-center'}>
            <PageView anchorPoint={'center-center'} name='page-view' visiblePage={pageIndex}>
              {this.renderGalleryPage()}
              {this.renderPhotoPage(photoIndex)}
            </PageView>
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

| Name   | Type   | Default Value | Required | Description                                                                                  |
| ------ | ------ | :-----------: | :------: | -------------------------------------------------------------------------------------------- |
| width  | number |      `0`      |    N     | The width of the page view. The default (`0`) allows the view to expand to fit the content.  |
| height | number |      `0`      |    N     | The height of the page view. The default (`0`) allows the view to expand to fit the content. |

## Element Properties

| Name        | Type   | Default Value | Description                               |
| ----------- | ------ | :-----------: | ----------------------------------------- |
| visiblePage | number |      `0`      | The index (zero based) of the added pages |
