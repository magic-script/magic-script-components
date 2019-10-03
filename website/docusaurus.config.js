/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "MagicScript Components",
  tagline:
    "Framework to build mixed reality applications with React, declarative elements and JavaScript",
  url: "https://components.magicscript.org",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "magic-script", // Usually your GitHub org/user name.
  projectName: "magic-script-components", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "MagicScript",
      logo: {
        alt: "MagicScript Logo",
        src: "img/magicscript.svg"
      },
      links: [
        { to: "docs/installation", label: "Docs", position: "left" },
        { to: "docs/components", label: "API", position: "left" },
        {
          href: "https://github.com/magic-script/magic-script-components",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://www.npmjs.com/package/magic-script-components",
          label: "NPM",
          position: "right"
        }
      ]
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
