//
import React from "react";
import { create } from "react-test-renderer";
import { Text } from "magic-script-components";

describe("Text component", () => {
  test("Matches the snapshot", () => {
    const text = create(<Text text="Test Text" />);
    expect(text.toJSON()).toMatchSnapshot();
  });
});
