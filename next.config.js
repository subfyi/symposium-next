const withOptimizedImages = require('next-optimized-images')
module.exports = withOptimizedImages({
  env: {
    ENDPOINT: 'https://api.iseser.com',
    DOMAIN: 'https://iseser.com'
  },
  trailingSlash: true
})
