// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
    devServer: {
    proxy: 'https://wx.maoyan.com'  
  }
}