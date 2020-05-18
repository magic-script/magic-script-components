// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Quad } from "../src/components/components.js";

test("Quad component", () => {
  const size = [0.5, 0.4];

  const component = renderer.create(<Quad width={size[0]} height={size[1]} />);

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty("size", size);
});
