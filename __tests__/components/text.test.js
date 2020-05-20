// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import { Text } from "../../src/components/components.js";

describe("Text component", () => {
  test("should contain mapped properties", () => {
    const alignment = "top-left";
    const charSpacing = 0.01;
    const textAlignment = "center";

    const boundsSize = {
      boundsSize: [0.6, 0.4],
      wrap: true,
    };

    const fontParameters = {
      fontStyle: "normal",
      fontWeight: "regular",
      fontSize: 0.05,
      allCaps: true,
    };

    const component = renderer.create(
      <Text
        anchorPoint={alignment}
        letterSpacing={charSpacing}
        textAlign={textAlignment}
        width={boundsSize.boundsSize[0]}
        height={boundsSize.boundsSize[1]}
        multiline={boundsSize.wrap}
        fontStyle={fontParameters.fontStyle}
        fontWeight={fontParameters.fontWeight}
        fontSize={fontParameters.fontSize}
        allCaps={fontParameters.allCaps}
      >
        MagicScript Components
      </Text>
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();

    expect(json.props).toHaveProperty("alignment", alignment);
    expect(json.props).toHaveProperty("charSpacing", charSpacing);
    expect(json.props).toHaveProperty("textAlignment", textAlignment);
    expect(json.props).toHaveProperty("boundsSize.wrap", true);
    expect(json.props).toHaveProperty("boundsSize.boundsSize", [0.6, 0.4]);
    expect(json.props).toHaveProperty(
      "fontParameters.fontStyle",
      fontParameters.fontStyle
    );
    expect(json.props).toHaveProperty(
      "fontParameters.fontWeight",
      fontParameters.fontWeight
    );
    expect(json.props).toHaveProperty(
      "fontParameters.fontSize",
      fontParameters.fontSize
    );
    expect(json.props).toHaveProperty(
      "fontParameters.allCaps",
      fontParameters.allCaps
    );
  });
});
