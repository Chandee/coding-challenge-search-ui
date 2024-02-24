import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from ".";

describe("Test of SearchInput", () => {
  test("calls refetch function when form is submitted", () => {
    const refetchMock = jest.fn();

    render(<SearchInput refetch={refetchMock} inputRef={null} />);

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /search/i,
      }),
      { target: { value: "test input" } }
    );
    fireEvent.submit(screen.getByText("Search"));

    expect(refetchMock).toHaveBeenCalledTimes(1);
  });
});
