import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "../theme";
import { ThemeToggle } from "../theme";

test("toggles between light and dark", () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  );

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent(/light mode/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent(/dark mode/i);
});
