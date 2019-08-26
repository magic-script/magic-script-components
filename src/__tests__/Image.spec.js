//
import React from "react";
import { create } from "react-test-renderer";
import { Image } from "magic-script-components";

describe("Image component", () => {
  test("Matches the snapshot", () => {
    const image = create(
      <Image filePath="test_file.png" width={0.2} height={0.2} />
    );
    expect(image.toJSON()).toMatchSnapshot();
  });
});
