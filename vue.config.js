// vue.config.js
module.exports = {
  publicPath: '/',
  pwa: {
    name: 'LIVE',
    msTileColor: '#222222',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
