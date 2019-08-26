//
import React from "react";
import { create } from "react-test-renderer";
import { Audio } from "magic-script-components";

describe("Audio component", () => {
  test("Matches the snapshot", () => {
    const audio = create(<Audio fileName="test_file.avi" />);
    expect(audio.toJSON()).toMatchSnapshot();
  });
});
