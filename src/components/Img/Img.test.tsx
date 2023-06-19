import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Img from "./Img";
import React from "react";

describe("Running Test for the Img component", () => {
  test("Testing to see if the Img is visible", () => {
    render(<Img />);
    const image = screen.getByRole("img");
    screen.debug();
    expect(image).toBeVisible();
  });

  test("Testing to see if the Img background changes when disabled", () => {
    render(<Img disabled={true} />);
    const image = screen.getByRole("img");
    expect(image).toHaveStyle("background-color: red");
  });
});
