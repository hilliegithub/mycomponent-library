import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Running test for the Card component", () => {
  test("testing to see if the Card component is visible", () => {
    render(<Card cardTitle="Peach" />);
    const card = screen.getByText("Peach");
    expect(card).toBeVisible();
  });

  test("Testing to see if the card background changes color when disabled", () => {
    const { container } = render(
      <Card cardTitle="GoodDoggo" bgColor="yellow" disabled={true} />
    );
    //screen.debug();
    const div = container.querySelector("h1")?.parentElement;
    expect(div).toHaveStyle("background-color: #e9f5f9");
  });
});
