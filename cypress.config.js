const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  // rapport dedié mochawesome
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",

    setupNodeEvents(on, config) {
      const envName = config.env.configFile || "recette_env" 
      const envConfig = require(`./cypress/config/${envName}.json`)
      config = {...config,...envConfig}
      // implement node event listeners here
      const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin")
      cypressGrepPlugin(config)

      return config
    },
  },
});
