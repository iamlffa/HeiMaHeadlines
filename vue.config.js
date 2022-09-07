const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, /* 关闭Eslint检查*/ 
  configureWebpack: {
    resolve: {
      alias: {
        // 为路径起别名 @ 是 './src' 的别名 脚手架默认配置
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
})
