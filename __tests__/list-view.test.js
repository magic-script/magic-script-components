// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { ListView } from "../src/components/components.js";

test("ListView component", () => {
  const scrollingEnabled = true;

  const component = renderer.create(
    <ListView scrollEnabled={scrollingEnabled} />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty("scrollingEnabled", scrollingEnabled);
});
