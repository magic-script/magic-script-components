// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { DropdownList } from "../src/components/components.js";

test("DropdownList component", () => {
  const textSize = 0.08;
  const listTextSize = 0.05;

  const component = renderer.create(
    <DropdownList fontSize={textSize} listFontSize={listTextSize} />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty("textSize", textSize);
  expect(json.props).toHaveProperty("listTextSize", listTextSize);
});
