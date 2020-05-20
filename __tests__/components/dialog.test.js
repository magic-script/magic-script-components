// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Dialog } from "../../src/components/components.js";

describe("Dialog component", () => {
  test("should contain mapped properties", () => {
    const scrolling = true;

    const component = renderer.create(<Dialog scrollEnabled={scrolling} />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    expect(json.props).toHaveProperty("scrolling", scrolling);
  });
});
