const path = require('path')

module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/index.php': {
                target: 'http://www.qinqin.net',
                changeOrigin: true
            },
            '/api/goods/get-goods-detail-img': {
                target: 'http://cmsjapi.ffquan.cn/',
                changeOrigin: true
            },
            '/order/add': {
                target: 'http://10.31.160.135:9098',
                changeOrigin: true
            }
        }
    },

    chainWebpack: config => {
        config.resolve.alias
            .set('assets', path.join(__dirname, './src/assets'))
            .set('components', path.join(__dirname, './src/components'))
            .set('@', path.join(__dirname, './src'))
    }
}