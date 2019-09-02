//
import React from "react";
import { create } from "react-test-renderer";
import { ColorPicker } from "magic-script-components";

describe("ColorPicker component", () => {
  test("Matches the snapshot", () => {
    const colorpicker = create(<ColorPicker />);
    expect(colorpicker.toJSON()).toMatchSnapshot();
  });
});
