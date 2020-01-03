const path = require('path')

module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        overlay: {
            warnings: false,
            error: false
        },
        open: true,
        proxy: {
            '/index.php': {
                target: 'http://www.jushifang.cn',
                changeOrigin: true
            },
            '/registUser': {
                target: 'http://10.31.160.200:9091',
                changeOrigin: true
            },
            'registUserrev': {
                target: 'http://10.31.160.200:9091',
                changeOrigin: true
            },
            'loginByUsername': {
                target: 'http://10.31.160.200:9091',
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
            // '/forgetPassword':{
            //     target:'http://10.31.160.200:9091',
            //     changeOrigin:true
            // },
        }
    },

    chainWebpack: config => {
        config.resolve.alias
            .set('assets', path.join(__dirname, './src/assets'))
            .set('components', path.join(__dirname, './src/components'))
            .set('@', path.join(__dirname, './src'))
    }
}