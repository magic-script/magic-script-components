//
import React from "react";
import { create } from "react-test-renderer";
import { Model } from "magic-script-components";

describe("Model component", () => {
  test("Matches the snapshot", () => {
    const model = create(
      <Model modelPath="" materialPath="" texturePath="" textureName="" />
    );
    expect(model.toJSON()).toMatchSnapshot();
  });
});
