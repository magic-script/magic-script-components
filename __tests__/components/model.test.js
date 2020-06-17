// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Model } from "../../src/components/components.js";

describe("Model component", () => {
  test("should contain mapped properties", () => {
    const modelPath = "file_path/file.name";
    const resourceId = 12345;

    const component = renderer.create(<Model path={modelPath} resourceId={resourceId} />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    expect(json.props).toHaveProperty("modelPath", modelPath);
    expect(json.props).toHaveProperty("modelResourceId", resourceId);
  });
});
