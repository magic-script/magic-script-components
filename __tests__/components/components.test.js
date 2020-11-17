// Copyright (c) 2020 Magic Leap, Inc. All Rights Reserved

import React from "react";
import renderer from "react-test-renderer";

import {
  Slider,
  View,
  Toggle,
  ToggleGroup,
  TextEdit,
  Image,
  ScrollBar,
  ScrollView,
  ListViewItem,
  GridLayout,
  LinearLayout,
  DropdownListItem,
  Panel,
  Tab,
  PageView,
  WebView,
  ColorPicker,
  TimePicker,
  DatePicker,
  CircleConfirmation,
  Light,
  Line,
  Prism,
  Scene,
} from "../../src/components/components";

describe("Components", () => {
  describe("Slider", () => {
    test("should create component", () => {
      const component = renderer.create(<Slider width={0.5}/>);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("View", () => {
    test("should create component", () => {
      const component = renderer.create(<View />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Toggle", () => {
    test("should create component", () => {
      const component = renderer.create(<Toggle />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("ToggleGroup", () => {
    test("should create component", () => {
      const component = renderer.create(<ToggleGroup />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("TextEdit", () => {
    test("should create component", () => {
      const component = renderer.create(<TextEdit />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Image", () => {
    test("should create component", () => {
      const component = renderer.create(<Image />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("ScrollBar", () => {
    test("should create component", () => {
      const component = renderer.create(<ScrollBar length={0.5}/>);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("ScrollView", () => {
    test("should create component", () => {
      const aabb = {
        min: [-0.5, -0.5, -0.1],
        max: [0.5, 0.5, 0.1],
      };
      const component = renderer.create(<ScrollView scrollBounds={aabb}/>);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("ListViewItem", () => {
    test("should create component", () => {
      const component = renderer.create(<ListViewItem />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("GridLayout", () => {
    test("should create component", () => {
      const component = renderer.create(<GridLayout />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("LinearLayout", () => {
    test("should create component", () => {
      const component = renderer.create(<LinearLayout />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("DropdownListItem", () => {
    test("should create component", () => {
      const component = renderer.create(<DropdownListItem />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Panel", () => {
    test("should create component", () => {
      const component = renderer.create(<Panel />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Tab", () => {
    test("should create component", () => {
      const component = renderer.create(<Tab />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("PageView", () => {
    test("should create component", () => {
      const component = renderer.create(<PageView />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("WebView", () => {
    test("should create component", () => {
      const component = renderer.create(<WebView width={0.5} height={0.5} />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("ColorPicker", () => {
    test("should create component", () => {
      const component = renderer.create(<ColorPicker />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("TimePicker", () => {
    test("should create component", () => {
      const component = renderer.create(<TimePicker />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("DatePicker", () => {
    test("should create component", () => {
      const component = renderer.create(<DatePicker />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("CircleConfirmation", () => {
    test("should create component", () => {
      const component = renderer.create(<CircleConfirmation />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Light", () => {
    test("should create component", () => {
      const component = renderer.create(<Light />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Line", () => {
    test("should create component", () => {
      const component = renderer.create(<Line points={[[0,0,0], [1,1,1]]}/>);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Prism", () => {
    test("should create component", () => {
      const component = renderer.create(<Prism size={[1,1,1]}/>);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Scene", () => {
    test("should create component", () => {
      const component = renderer.create(<Scene />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });
});
