import React from "react";
import { render, screen } from "@testing-library/react";
import ListTopics from "./index";
import Topic from "./index";

describe("Tests of Topic", () => {
  it("Render elements on screen", () => {
    render(
      <Topic
        title={"Learn to Budget"}
        description={"A playlist to learn budgeting"}
        category={"PLAYLISTS"}
        url={"https://letmegooglethat.com/?q=Learn%20to%20Budget"}
      />
    );
    const titleElement = screen.queryByText(/Learn to Budget/i);
    expect(titleElement).toBeInTheDocument();
    const descriptionElement = screen.getByText(
      /A playlist to learn budgeting/i
    );
    expect(descriptionElement).toBeInTheDocument();
    const tagElement = screen.getByText("Playlists");
    expect(tagElement).toBeInTheDocument();
  });
});
