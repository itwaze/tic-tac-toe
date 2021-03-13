import React from "react";
import { render } from "@testing-library/react";

import Typography from "./Typography";

describe("Typography", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Typography>test text</Typography>);
    expect(asFragment()).toMatchSnapshot();
  });
});
