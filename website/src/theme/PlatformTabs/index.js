// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License.
// See LICENSE file in the project root for full license information.

import React from "react";
import Tabs from "../Tabs";
import TabItem from "../TabItem";
import useBaseUrl from "@docusaurus/useBaseUrl";

function PlatformTabs(props) {
  const {component} = props;

  const toTagFormat = (str) => {
    const tagName =  (str.length > 0) ? str[0].toUpperCase() + str.slice(1) : str; 
    return `<${tagName}>`
  };

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
        <img style={{maxHeight: '400px'}} src={useBaseUrl(`img/components/${component}/lumin.png`)} alt={`${toTagFormat(component)} on Lumin`} />
      </TabItem>
      <TabItem value="ios">
        <img style={{maxHeight: '400px'}} src={useBaseUrl(`img/components/${component}/ios.png`)} alt={`${toTagFormat(component)} on iOS`} />
      </TabItem>
      <TabItem value="android">
        <img style={{maxHeight: '400px'}} src={useBaseUrl(`img/components/${component}/android.png`)} alt={`${toTagFormat(component)} on Android`} />
      </TabItem>
      </Tabs>
    </div>
  );
}

export default PlatformTabs;
