// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved
// Distributed under Apache 2.0 License. See LICENSE file in the project root for full license information.
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/*.js",
    "src/core/*.js",
    "src/platform/**/*.js",
    "src/react-magic-script/*.js"
  ],
  moduleNameMapper: {
    lumin: "./__mocks__/luminMock.js"
  },
  testEnvironment: "node",
  testMatch: ["**/__tests__/*.js"],
  testPathIgnorePatterns: ["/node_modules/", ".eslintrc.js"]
};
