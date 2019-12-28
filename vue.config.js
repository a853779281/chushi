const path = require('path')

<<<<<<< HEAD
module.exports={
    devServer:{
        open:true,
        proxy:{
            '/index.php':{
                target:'http://www.jushifang.cn',
                changeOrigin:true
            }
=======
module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/index.php': {
                target: 'http://www.jushifang.cn',
                changeOrigin: true
            },
>>>>>>> 358b4d8ee7b54ed03154211e6d74eefc239bd883
        }
    },

    chainWebpack: config => {
        config.resolve.alias
            .set('assets', path.join(__dirname, './src/assets'))
            .set('components', path.join(__dirname, './src/components'))
            .set('@', path.join(__dirname, './src'))
    }
}