/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, Children} from 'react';

import classnames from 'classnames';

import styles from './styles.module.css';

const keys = {
  left: 37,
  right: 39,
};

function Tabs(props) {
  const {block, children, defaultValue, values} = props;
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const tabRefs = [];

  const focusNextTab = (tabs, target) => {
    const next = tabs.indexOf(target) + 1;

    if (!tabs[next]) {
      tabs[0].focus();
    } else {
      tabs[next].focus();
    }
  };

  const focusPreviousTab = (tabs, target) => {
    const prev = tabs.indexOf(target) - 1;

    if (!tabs[prev]) {
      tabs[tabs.length - 1].focus();
    } else {
      tabs[prev].focus();
    }
  };

  const handleKeydown = (tabs, target, event) => {
    switch (event.keyCode) {
      case keys.right:
        focusNextTab(tabs, target);
        break;
      case keys.left:
        focusPreviousTab(tabs, target);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div role="tabpanel" className="margin-vert--md">
        {
          Children.toArray(children).filter(
            child => child.props.value === selectedValue,
          )[0]
        }
      </div>
      <ul
        role="tablist"
        aria-orientation="horizontal"
        className={classnames('tabs', {
          'tabs--block': block,
        })}>
        {values.map(({value, label}, index) => (
          <li
            role="tab"
            tabIndex={index}
            aria-selected={selectedValue === value}
            className={classnames('tab-item', styles.tabItem, {
              'tab-item--active': selectedValue === value,
            })}
            key={value}
            ref={tabControl => tabRefs.push(tabControl)}
            onKeyDown={event => handleKeydown(tabRefs, event.target, event)}
            onFocus={() => setSelectedValue(value)}
            onClick={() => setSelectedValue(value)}>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
