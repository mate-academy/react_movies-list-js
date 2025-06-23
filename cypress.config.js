const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5175', // ✅ CORRETO
    supportFile: false,
  },
});
