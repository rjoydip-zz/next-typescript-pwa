const composePlugins = require('next-compose-plugins')
const plugins = [
  require('next-purgecss')({
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
    purgeCssPaths: [
      './pages/**/*.{js,jsx,ts,tsx,css}',
      './components/**/*.{js,jsx,ts,tsx,css}',
      '*.{js,jsx,ts,tsx,css}',
    ],
  }),
]
const nextConfig = {}

module.exports = composePlugins([...plugins], nextConfig)
