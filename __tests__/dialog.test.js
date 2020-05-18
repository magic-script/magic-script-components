// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Dialog } from "../src/components/components.js";

test("Dialog component", () => {
  const scrolling = true;

  const component = renderer.create(<Dialog scrollEnabled={scrolling} />);

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty("scrolling", scrolling);
});
