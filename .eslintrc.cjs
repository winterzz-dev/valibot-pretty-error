const { configure, presets } = require('eslint-kit')

module.exports = configure({
  presets: [
    presets.imports({ sort: { newline: true } }),
    presets.prettier(),
    presets.typescript(),
  ],
})
