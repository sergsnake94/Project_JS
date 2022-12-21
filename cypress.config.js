const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'crsrgo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ['**/cypress/e2e/1-getting-started','**/cypress/e2e/2-advanced-examples'],
    baseUrl: 'https://reqres.in'
  },
});
