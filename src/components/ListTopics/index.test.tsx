import React from "react";
import { render, screen } from "@testing-library/react";
import ListTopics from "./index";

describe("Tests of ListTopics", () => {
  it("Render without anything", () => {
    render(<ListTopics topics={undefined} isPending={false} error={null} />);
    const linkElement = screen.queryByText(/Learn to Budget/i);
    expect(linkElement).not.toBeInTheDocument();
  });

  it("Render without found a match", () => {
    render(<ListTopics topics={[]} isPending={false} error={null} />);
    const linkElement = screen.queryByText(
      /There are no results matching your query./i
    );
    expect(linkElement).toBeInTheDocument();
  });

  it("Render result found", () => {
    render(
      <ListTopics
        topics={[
          {
            id: "91011",
            title: "Learn to Budget",
            url: "https://letmegooglethat.com/?q=Learn%20to%20Budget",
            description: "A playlist to learn budgeting",
            category: "PLAYLISTS",
          },
        ]}
        isPending={false}
        error={null}
      />
    );
    const linkElement = screen.queryByText(/Learn to Budget/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("Render loading waiting data", () => {
    render(
      <ListTopics
        topics={[
          {
            id: "91011",
            title: "Learn to Budget",
            url: "https://letmegooglethat.com/?q=Learn%20to%20Budget",
            description: "A playlist to learn budgeting",
            category: "PLAYLISTS",
          },
        ]}
        isPending={true}
        error={null}
      />
    );
    const linkElement = screen.getByTestId("loading");
    expect(linkElement).toBeInTheDocument();
  });

  it("Render a error message from API error", () => {
    render(
      <ListTopics
        topics={[
          {
            id: "91011",
            title: "Learn to Budget",
            url: "https://letmegooglethat.com/?q=Learn%20to%20Budget",
            description: "A playlist to learn budgeting",
            category: "PLAYLISTS",
          },
        ]}
        isPending={false}
        error={Error("error")}
      />
    );
    const linkElement = screen.getByText(
      /An error occurred in the request, please try again./i
    );
    expect(linkElement).toBeInTheDocument();
  });
});
