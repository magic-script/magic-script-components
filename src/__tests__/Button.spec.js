//
import React from "react";
import { create } from "react-test-renderer";
import { Button } from "magic-script-components";

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(
      <Button text="Test Button" width={0.25} height={0.1} />
    );
    expect(button.toJSON()).toMatchSnapshot();
  });
});
