import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

describe("Running Test for the Text component", () => {
  test("Testing to see if Text component mounts", () => {
    render(<Text value="Init" disabled={false} bgColor="#95fe13" />);
    const component = screen.getByText("Init");
    expect(component).toBeVisible();
  });

  it("Testing to see if the Text component changes background color when disable", () => {
    render(<Text value="ice" bgColor="red" disabled={true} />);
    expect(screen.getByText("ice")).toHaveStyle("background-color: #a8a8a7");
  });
});
