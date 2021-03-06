// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Quad, View } from "../../src/components/components.js";
import { ViewMode } from "../../src/components/types/enums.js";

describe("Quad component", () => {
  test("should contain mapped properties", () => {
    const size = [0.5, 0.4];

    const component = renderer.create(
      <Quad width={size[0]} height={size[1]} />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    expect(json.props).toHaveProperty("size", size);
  });
});
