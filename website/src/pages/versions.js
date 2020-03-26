/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import versions from "../../versions.json";

function Version() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const latestVersion = versions[0];
  const pastVersions = versions.filter(version => version !== latestVersion);
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout
      permalink="/versions"
      description="Docusaurus 2 Versions page listing all documented site versions"
    >
      <div className="container margin-vert--xl">
        <h1>MagicScript Components documentation versions</h1>
        <div className="margin-bottom--lg">
          <h3 id="latest">Latest version (Development)</h3>
          <p>Here you can find the latest documentation.</p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to={useBaseUrl("/docs/installation")}>
                    Documentation
                  </Link>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/${latestVersion}`}>
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="latest">Latest version (Stable)</h3>
            <p>Here you can find the latest documentation.</p>
            <table>
              <tbody>
                {pastVersions.map(version => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}/installation`)}>
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag/${version}`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Version;
