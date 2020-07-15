module.exports = {

    devServer: {
        open: true,
        contentBase: 'src',
        port: 666,
        hot: true,
        proxy: {
            "/api": {
                target: "http://59.111.92.205:8088/api",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}