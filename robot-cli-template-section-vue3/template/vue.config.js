const { defineConfig } = require('@vue/cli-service')
const CodeRobotCliSectionPlugin = require("code-robot-cli-section-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new CodeRobotCliSectionPlugin()
    ]
  },
})
