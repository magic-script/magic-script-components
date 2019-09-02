//
import React from "react";
import { create } from "react-test-renderer";
import { TimePicker } from "magic-script-components";

describe("TimePicker component", () => {
  test("Matches the snapshot", () => {
    const timepicker = create(<TimePicker label="Test TimePicker" />);
    expect(timepicker.toJSON()).toMatchSnapshot();
  });
});
