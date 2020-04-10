// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License.
// See LICENSE file in the project root for full license information.

import React from "react";
import Tabs from "../Tabs";
import TabItem from "../TabItem";
import useBaseUrl from "@docusaurus/useBaseUrl";
import GifPlayer from "@mayankmohit/react-gif-player";

function PlatformTabs(props) {
  const { component, extension } = props;

  const toTagFormat = (str) => {
    const tagName = (str.length > 0) ? str[0].toUpperCase() + str.slice(1) : str;
    return `<${tagName}>`
  };

  const provideImage = (platform) => {
    if (extension === 'gif') {
      return (
        <GifPlayer style={{ maxHeight: '400px' }} gif={useBaseUrl(`img/components/${component}/${platform}.gif`)} still={useBaseUrl(`img/components/${component}/${platform}.png`)}  />
      )
    }
    return (
      <img style={{ maxHeight: '400px' }} src={useBaseUrl(`img/components/${component}/${platform}.${extension || 'png'}`)} alt={`${toTagFormat(component)} on ${platform}`} />
    )
  }

  return (
    <div>
      <Tabs
        defaultValue="lumin"
        values={[
          { label: "Lumin", value: "lumin", },
          { label: "iOS", value: "ios", },
          { label: "Android", value: "android", },
        ]
        }>
        <TabItem value="lumin">
          {provideImage("lumin")}
        </TabItem>
        <TabItem value="ios">
          {provideImage("ios")}
        </TabItem>
        <TabItem value="android">
          {provideImage("android")}
        </TabItem>
      </Tabs>
    </div>
  );
}

export default PlatformTabs;
