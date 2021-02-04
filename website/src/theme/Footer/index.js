// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License.
// See LICENSE file in the project root for full license information.

import React from "react";
import ScriptLoader from "react-script-loader-hoc";
import CookieConsent, { Cookie } from "react-cookie-consent";

const MLFooter = ({ scriptsLoadedSuccessfully }) => {
  return <CookieConsent
          location="bottom"
          buttonText="Accept All Cookies"
          cookieName="defaultCookie"
          style={{ background: "#4A4A4AEE", color: "#F8F8F8", fontSize: "15px", fontWeight: "bold", paddingLeft: 80, paddingRight: 80 }}
          buttonStyle={{ flex: "0 1 auto", background: "#F8F8F8", color: "#4A4A4A", fontSize: "16px", fontWeight: "bold", borderRadius: 4, padding: 13 }}
          expires={30}
        >
          Magic Leap uses cookies to enhance your user experience, improve our websites, and deliver ads that may interest you.
          <div />
          <a style={{ color: "#F8F8F8", fontSize: "16px" , fontWeight: "normal" }} href="https://www.magicleap.com/legal/cookie-policy">Learn More</a>
        </CookieConsent>
};

export default ScriptLoader()(MLFooter);