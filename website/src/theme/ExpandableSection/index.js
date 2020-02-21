// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License.
// See LICENSE file in the project root for full license information.

import React, {useEffect, useState} from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from 'classnames';
import styles from './styles.css';

function ExpandableSection(props) {
  const {children, title, path} = props;
  const [isExpanded, setExpanded] = useState(props.expanded);
  const [content, setContent] = useState('');
  const [contentUrl, setContentUrl] = useState((path !== undefined) ? useBaseUrl(path) : undefined);

  const onClick = (e) => {
    setExpanded(isExpanded ? false : true);
  }

  const renderContent = () => {
    if (!isExpanded) {
      return null;
    }

    if (content !== '' && content !== undefined) {
      return <div dangerouslySetInnerHTML={{__html: content}}></div>;
    }

    return children;
  }

  useEffect(() => {
    if (content === '' && contentUrl !== undefined) {
      fetch(contentUrl)
      .then(response => response.text())
      .then(text => setContent(text))
    }
  });

  return (
    <div>
      <button
        className={classnames('button', styles.button, {})}
        onClick={() => onClick()}
      >{title}</button>
      <h2>
        <a aria-hidden="true" tabindex="-1" class="anchor" id="common-properties"></a>
        <a aria-hidden="true" tabindex="-1" class="hash-link" href="#common-properties" title="Direct link to heading">#</a>
        Common Properties
      </h2>
      <div role="section">
        {/* {renderContent()} */}
        {contentUrl}
      </div>
    </div>
  );
}

export default ExpandableSection;
