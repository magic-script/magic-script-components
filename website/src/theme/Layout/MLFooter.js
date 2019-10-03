// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License.
// See LICENSE file in the project root for full license information.

import React from "react";
import ScriptLoader from "react-script-loader-hoc";

function createMarkup() {
  return {
    __html: window.startCookieControl.load({
      apiKey: "bd100834001edf98bd5458ce61e48ca552418f9c",
      footerSelector: "#foot-boi"
    })
  };
}

const MLFooter = ({ scriptsLoadedSuccessfully }) => {
  if (!scriptsLoadedSuccessfully) return null;
  return <section id="foot-boi" dangerouslySetInnerHTML={createMarkup()} />;
};

export default ScriptLoader(
  "https://magicleap.com/assets/js/cookie-control-js/cookie-control-vanilla.min.js"
)(MLFooter);
