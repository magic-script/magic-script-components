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
        { to: "docs/components", label: "Docs", position: "left" },
        {
          href: "https://github.com/magic-script/magic-script-components",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Magic Leap, Inc.`
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
