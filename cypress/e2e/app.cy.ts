describe("template spec", () => {
  it("The application shall provide a search form", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Search");
    cy.get("input");
  });

  it('The search shall be triggerable by clicking the "Search" button', () => {
    cy.visit("http://localhost:3000");
    cy.contains("Search");
    cy.get("input").type("Learn to Budget");
    cy.get("button").contains("Search").click();
    cy.contains("Learn to Budget").should("exist");
  });

  it("The search shall be triggerable by pressing the Enter key", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Search");
    cy.get("input").type("Learn to Budget{enter}");
    cy.contains("Learn to Budget").should("exist");
  });

  it("A loading state shall be shown while search results are loading", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Search");
    cy.get("input").type("Learn to Budget{enter}");
    cy.get('[data-testid="loading"]').should("exist");
  });

  it("Search results shall show result title and description", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Search");
    cy.get("input").type("Learn to Budget{enter}");
    cy.contains("Learn to Budget").should("exist");
    cy.contains("A playlist to learn budgeting").should("exist");
  });

  it("Clicking a search result title shall open its URLs in a new tab", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        cy.stub(win, "open");
      },
    });

    cy.contains("Search");
    cy.get("input").type("Learn to Budget{enter}");
    cy.get("a").invoke("removeAttr", "target").click();
  });

  it("Search results shall be marked as their content type", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        cy.stub(win, "open");
      },
    });

    cy.contains("Search");
    cy.get("input").type("Learn to Budget{enter}");
    cy.contains("Playlists").should("exist");
  });

  it("  The user shall be informed if no search results match their query", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        cy.stub(win, "open");
      },
    });

    cy.contains("Search");
    cy.get("input").type("abababababa{enter}");
    cy.contains("There are no results matching your query.").should("exist");
  });
});
