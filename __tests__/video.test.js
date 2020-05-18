// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Video } from "../src/components/components.js";

test("Video component", () => {
  const videoPath = "resources/video.mp4";
  const timedTextPath = "resources/subtitles.txt";

  const component = renderer.create(
    <Video path={videoPath} subtitlePath={timedTextPath} />
  );

  const json = component.toJSON();
  expect(json).toMatchSnapshot();

  expect(json.props).toHaveProperty("videoPath", videoPath);
  expect(json.props).toHaveProperty("timedTextPath", timedTextPath);
});
