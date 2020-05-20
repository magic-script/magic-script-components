// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Audio } from "../../src/components/components.js";

describe("Audio component", () => {
  test("should contain mapped properties", () => {
    const fileName = "file_path/file.name";
    const soundLooping = true;
    const soundMute = false;
    const soundPitch = 1;
    const soundVolumeLinear = 1;
    const streamedFileOffset = 0.5;

    const component = renderer.create(
      <Audio
        path={fileName}
        looping={soundLooping}
        mute={soundMute}
        pitch={soundPitch}
        volume={soundVolumeLinear}
        seekTo={streamedFileOffset}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    expect(json.props).toHaveProperty("fileName", fileName);
    expect(json.props).toHaveProperty("soundLooping", soundLooping);
    expect(json.props).toHaveProperty("soundMute", soundMute);
    expect(json.props).toHaveProperty("soundPitch", soundPitch);
    expect(json.props).toHaveProperty("soundVolumeLinear", soundVolumeLinear);
    expect(json.props).toHaveProperty("streamedFileOffset", streamedFileOffset);
  });
});
