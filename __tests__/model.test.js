// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Model } from "../src/components/components.js";

test("Model component", () => {
  const modelPath = "resources/model.glb";

  const component = renderer.create(<Model path={modelPath} />);

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty("modelPath", modelPath);
});
