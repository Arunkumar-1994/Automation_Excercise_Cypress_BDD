const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: "4wxgcp",
  reporter: 'cypress-mochawesome-reporter',
  // defaultCommandTimeout: 100000, // for HTML reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber()),
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/*.feature",
    experimentalStudio : true, 
  },
});
