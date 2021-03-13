import React from "react";
import { render } from "@testing-library/react";

import Box from "./Box";

describe("Box", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Box border />);
    expect(asFragment()).toMatchSnapshot();
  });
});
