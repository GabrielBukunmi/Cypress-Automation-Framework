const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //this timeout will apply to all spec file i.e all .js test
  //if it is removed, the default timeout by cypress in project setting will be applied
  defaultCommandTimeout: 9000,
  env:{
    url:"https:rahulshettyacademy.com"
  },
  projectId: "6x76ku",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/examples/*.js'
  },
});
