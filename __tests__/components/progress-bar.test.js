// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { ProgressBar } from "../../src/components/components.js";

describe("ProgressBar component", () => {
  test("should contain mapped properties", () => {
  const progressColor = {
    beginColor: "white",
    endColor: "blue",
  };

  const component = renderer.create(
    <ProgressBar
      beginColor={progressColor.beginColor}
      endColor={progressColor.endColor}
    />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty(
    "progressColor.beginColor",
    progressColor.beginColor
  );
  expect(json.props).toHaveProperty(
    "progressColor.endColor",
    progressColor.endColor
  );
});
});
