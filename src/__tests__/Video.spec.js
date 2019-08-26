//
import React from "react";
import { create } from "react-test-renderer";
import { Video } from "magic-script-components";

describe("Video component", () => {
  test("Matches the snapshot", () => {
    const video = create(<Video videoPath="test_file.mp4" />);
    expect(video.toJSON()).toMatchSnapshot();
  });
});
