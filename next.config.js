const composePlugins = require('next-compose-plugins')
const plugins = [
  require('next-purgecss')({
    purgeCssPaths: [
      './pages/**/*.{js,jsx,ts,tsx,css}',
      './components/**/*.{js,jsx,ts,tsx,css}',
      '*.{js,jsx,ts,tsx,css}',
      './utils/prefers-dark.ts',
    ]
  }),
]
const nextConfig = {}

module.exports = composePlugins([...plugins], nextConfig)
