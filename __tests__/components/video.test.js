// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Video } from "../../src/components/components.js";

describe("Video component", () => {
  test("should contain mapped properties", () => {
    const videoPath = "file_path/file.name";
    const timedTextPath = "file_path/subtitle_file.name";

    const component = renderer.create(
      <Video path={videoPath} subtitlePath={timedTextPath} v />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    expect(json.props).toHaveProperty("videoPath", videoPath);
    expect(json.props).toHaveProperty("timedTextPath", timedTextPath);
  });
});
