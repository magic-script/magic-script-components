// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Spinner } from "../src/components/components.js";

test("Spinner component", () => {
  const size = [0.3, 0.3];

  const component = renderer.create(
    <Spinner width={size[0]} height={size[1]} />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty("size", size);
});
