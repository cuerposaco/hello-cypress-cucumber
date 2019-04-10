import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://news.google.com";

Given(/^I open Google News page$/, function() {
    cy.visit(url);
});

Then(/^I see "Google News" in the title$/, function() {
    cy.title().should("include", "Google News");
});