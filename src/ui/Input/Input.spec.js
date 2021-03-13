import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});
