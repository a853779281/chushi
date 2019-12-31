const path = require('path')

module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/index.php': {
                target: 'http://www.qinqin.net',
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