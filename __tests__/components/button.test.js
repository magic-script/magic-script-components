// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Button } from "../../src/components/components.js";

describe("Button component", () => {
  test("should contain mapped properties", () => {
    const labelSide = "left";

    const component = renderer.create(<Button textSide={labelSide} />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    expect(json.props).toHaveProperty("labelSide", labelSide);
  });
});
