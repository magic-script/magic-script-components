/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const versions = require('./versions.json');

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
    colorMode: {
      respectPrefersColorScheme: false
    },
    navbar: {
      title: "MagicScript",
      logo: {
        alt: "MagicScript Logo",
        src: "img/magicscript.svg"
      },
      items: [
        {
          to: 'versions',
          label: `Versions`,
          position: 'left',
          style: {
            whiteSpace: 'nowrap',
            padding: '0.25rem 0.5rem 0.2rem 0.25rem',
            fontSize: 'calc(0.9 * var(--ifm-font-size-base))',
            fontColor: 'black',
            textDecoration: 'underline',
          },
        },
        { to: "docs/installation", label: "Docs", position: "left", activeBasePath: 'docs',},
        { to: "docs/components", label: "API", position: "left" },
        {
          href: "https://www.magicscript.org/",
          label: "Lumin",
          position: "left"
        },
        {
          href: "https://www.npmjs.com/package/magic-script-components",
          label: "NPM",
          position: "right"
        },
        {
          href: "https://github.com/magic-script/magic-script-components",
          label: "GitHub",
          position: "right"
        },
        {
          href:
            "https://developer.magicleap.com/learn/guides/magicscript-overview",
          label: "Developer Portal",
          position: "right"
        }
      ]
    },
    footer: {
      style: 'light',
      links: []
    },
    algolia: {
      apiKey: "4a2801e1f42c5488e5db0eb1ed45b5ba",
      indexName: "magicscript_components",
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
