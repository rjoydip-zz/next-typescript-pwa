const plugins = []
const nextConfig = {
  webpack: (config) => {
    return config
  },
}

module.exports = require('next-compose-plugins')([...plugins], nextConfig)
