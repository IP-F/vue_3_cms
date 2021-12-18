const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    outputDir: './builds',
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://152.136.185.210:5000',
                pathRewrite: { '^/api': '' },
            },
        }
    },
    configureWebpack: config => {
        // 引入注销控制台输出的插件
        config.plugins.push(
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        )
    },
}