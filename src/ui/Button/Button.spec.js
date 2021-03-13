import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Button>test text</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
