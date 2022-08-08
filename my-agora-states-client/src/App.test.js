import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';

it("practice", () => {
  render(<App />);
  const nameElement = screen.getByText(/My Agora States/i);
  expect(nameElement).toBeInTheDocument();
});
