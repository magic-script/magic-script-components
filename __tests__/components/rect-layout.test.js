// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { RectLayout } from "../../src/components/components.js";

describe("RectLayout component", () => {
  test("should contain mapped properties", () => {
    const contentAlignment = "top-left";

    const component = renderer.create(
      <RectLayout alignment={contentAlignment} />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    expect(json.props).toHaveProperty("contentAlignment", contentAlignment);
  });
});
