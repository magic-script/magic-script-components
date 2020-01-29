// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License.
// See LICENSE file in the project root for full license information.

import React, {fetch, useState} from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";

function ExpandableSection(props) {
  const {children, title} = props;
  const [isExpanded, setExpanded] = useState(props.expanded);

  const onClick = (e) => {
    setExpanded(isExpanded ? false : true);
  }

  return (
    <div>
      <button
        onClick={() => onClick()}
      >{title}</button>
      <div role="section">
        {isExpanded && children}
      </div>
    </div>
  );
}

export default ExpandableSection;
