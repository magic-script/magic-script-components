//
import React from "react";
import { create } from "react-test-renderer";
import { ScrollBar } from "magic-script-components";

describe("ScrollBar component", () => {
  test("Matches the snapshot", () => {
    const scrollbar = create(<ScrollBar width={0.1} />);
    expect(scrollbar.toJSON()).toMatchSnapshot();
  });
});
