import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should show text 'loading'/'spinner'", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(
    container.querySelector("span.spinner-border.spinner-border-sm")
  ).toBeInTheDocument();
});

test("should large click button if isLarge is present", () => {
  const { container } = render(<Button isLarge></Button>);

  expect(container.querySelector("button.btn-lg")).toBeInTheDocument();
});
