// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Audio } from "../../src/components/components.js";

describe("TransformNode component", () => {
  test("should contain mapped properties", () => {
    const localPosition = [1, 1, 1];
    const localRotation = [1, 1, 1, 1];
    const localScale = [1, 1, 1];
    const localTransform = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];

    // TransformNode is base component - there is no way to build it alone
    const component = renderer.create(
      <Audio
        // TransformNodeProps
        position={localPosition}
        rotation={localRotation}
        scale={localScale}
        transform={localTransform}
        path={""} // mock required prop
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    // TransformNodeProps
    expect(json.props).toHaveProperty("localPosition", localPosition);
    expect(json.props).toHaveProperty("localRotation", localRotation);
    expect(json.props).toHaveProperty("localScale", localScale);
    expect(json.props).toHaveProperty("localTransform", localTransform);
  });
});
