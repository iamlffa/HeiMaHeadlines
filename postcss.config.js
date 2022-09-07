// 这个配置将 px 转换为 vw/vh 需要安装 postcss-px-to-viewport 插件
module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        // viewportWidth 为视口的宽度
        viewportWidth: 375,
      },
    },
  };