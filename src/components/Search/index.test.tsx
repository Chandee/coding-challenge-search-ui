import React from "react";
import { render, screen } from "@testing-library/react";
import Search from ".";
import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query");

describe("Search component", () => {
  test("renders SearchInput and ListTopics with correct props", () => {
    const mockData = {
      data: [
        {
          id: "151617",
          title: "10 Ways to Save Money",
          url: "https://letmegooglethat.com/?q=10%20Ways%20to%20Save%20Money",
          description: "Tips to spend less and save more",
          category: "BLOG_POSTS",
        },
      ],
    };
    const mockError = null;
    const mockIsFetching = false;
    const refetchMock = jest.fn();

    //@ts-ignore
    useQuery.mockReturnValue({
      data: mockData,
      error: mockError,
      isFetching: mockIsFetching,
      refetch: refetchMock,
    });

    render(<Search />);

    expect(screen.getByText("Search")).toBeInTheDocument();

    expect(screen.getByText(/10 Ways to Save Money/i)).toBeInTheDocument();
  });
});
