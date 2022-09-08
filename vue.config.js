const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/ajax': {
        //前端所有以/ajax开头的请求  都链接下面的域名
        target: 'https://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
})
