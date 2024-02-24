import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import axios from "axios";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  QueryClientProvider: jest.fn(({ children }) => children),
}));

const queryClient = new QueryClient();

describe("App component", () => {
  test("renders App component with Search component inside QueryClientProvider", () => {
    render(<App />);

    expect(QueryClientProvider).toHaveBeenCalledWith(
      expect.objectContaining({ client: queryClient }),
      {}
    );
  });
});
