const path = require('path')

module.exports={
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer:{
        overlay:{
            warnings : false,
            error: false
        },
        // open:true,
        proxy:{
            '/index.php':{
                target:'http://www.jushifang.cn',
                changeOrigin:true
            },
            '/registUser':{
                target:'http://10.31.160.200:9091',
                changeOrigin:true
            },
            'registUserrev':{
                target:'http://10.31.160.200:9091',
                changeOrigin:true
            },
            'loginByUsername':{
                target:'http://10.31.160.200:9091',
                changeOrigin:true
            },
            // 'register':{
            //     target:'http://localhost:3000',
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