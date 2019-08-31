//
import React from "react";
import { create } from "react-test-renderer";
import { ListViewItem } from "magic-script-components";

describe("ListViewItem component", () => {
  test("Matches the snapshot", () => {
    const listviewitem = create(<ListViewItem />);
    expect(listviewitem.toJSON()).toMatchSnapshot();
  });
});
