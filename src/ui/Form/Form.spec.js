import React from "react";
import { render } from "@testing-library/react";

import Form from "./Form";

describe("Form", () => {
  it("should take a snapshot", () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
