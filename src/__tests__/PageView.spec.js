//
import React from "react";
import { create } from "react-test-renderer";
import { PageView } from "magic-script-components";

describe("PageView component", () => {
  test("Matches the snapshot", () => {
    const pageview = create(<PageView width={0.2} height={0.2} />);
    expect(pageview.toJSON()).toMatchSnapshot();
  });
});
