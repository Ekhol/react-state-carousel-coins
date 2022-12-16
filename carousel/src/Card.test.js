import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without failure", () => {
    render(<Card />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});