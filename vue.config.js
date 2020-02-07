module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'base': '@/base',
        'common': 'components/common',
        'content': 'components/content',
        'assets': '@/assets',
        'api': '@/api',
        'views': '@/views',
      }
    }
  }
}
