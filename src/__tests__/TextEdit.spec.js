//
import React from "react";
import { create } from "react-test-renderer";
import { TextEdit } from "magic-script-components";

describe("TextEdit component", () => {
  test("Matches the snapshot", () => {
    const text = create(
      <TextEdit text="Test Text Edit" width={0.25} height={0.1} />
    );
    expect(text.toJSON()).toMatchSnapshot();
  });
});
