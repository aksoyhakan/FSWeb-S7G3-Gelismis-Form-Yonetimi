describe("Form Testi", { keystrokeDelay: 100 }, function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Form Visit", function () {
    cy.visit("http://localhost:3000");
  });

  it("Check submit button disabled as defaut", () => {
    cy.get('[data-cs="submit"]').should("have.disabled", "true");
  });

  it("Check reset button disabled as defaut", () => {
    cy.get('[data-cs="submit"]').should("have.disabled", "true");
  });

  it("Write a name", function () {
    cy.get('[data-cs="name"]')
      .type("Hakan AKSOY")
      .should("have.value", "Hakan AKSOY");
  });

  it("Check reset button active during enter any value in form", () => {
    cy.get('[data-cs="submit"]').should("have.disabled", "false");
  });

  it("Write an e-mail", function () {
    cy.get('[data-cs="email"]')
      .type("aksoyhakan@gmail.com")
      .should("have.value", "aksoyhakan@gmail.com");
  });

  it("Write an password", function () {
    cy.get('[data-cs="password"]')
      .type("Deneme+11")
      .should("have.value", "Deneme+11");
  });

  it("Check terms condition working", function () {
    cy.get('[data-cs="terms"]').check().should("have.checked", "true");
  });

  it("Check reset button working properly", function () {
    cy.get('[data-cs="name"]').type("Hakan ");
    cy.get("[data-cs=reset]").click();
    cy.get('[data-cs="email"]').type("kan@gmail.com");
    cy.get("[data-cs=reset]").click();
    cy.get('[data-cs="password"]').type("Deneme+11");
    cy.get("[data-cs=reset]").click();
    cy.get('[data-cs="name"]').type("Hakan ");
    cy.get('[data-cs="email"]').type("kan@gmail.com");
    cy.get('[data-cs="password"]').type("Deneme+11");
    cy.get('[data-cs="terms"]').check();
    cy.get("[data-cs=reset]").click();
  });

  it("Check submit button working properly", function () {
    cy.get('[data-cs="name"]').type("Hakan AKSOY");
    cy.get('[data-cs="email"]').type("aksoyhakan@gmail.com");
    cy.get('[data-cs="password"]').type("Deneme+11");
    cy.get('[data-cs="terms"]').check();
    cy.get('[data-cs="submit"]').click();
  });
});
