var gulp = require('gulp')
var webpack =  require('webpack')
var _  =require('lodash')

var webpackConfig = require('./webpack.config.js')
const WebpackDevServer = require('webpack-dev-server')


gulp.task('default',function(){
    webpack(webpackConfig,function(err){
        if(err) console.error(err);
    })
})

gulp.task('dev-server',function () {
    var config = _.merge({},webpackConfig)

    var port = 8080
    config.debug = true
    for(var i in config.entry) {
        var eItem = config.entry[i]
        eItem.unshift('webpack/hot/dev-server')
        eItem.unshift('webpack-dev-server/client?http://0.0.0.0:'+port)
    }
    config.plugins = config.plugins ||[];
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    console.log(config)
    new WebpackDevServer(webpack(config),{
        publicPath:config.output.publicPath,
        hot:true,
        inline: true,
        stats: {
            colors:true
        },
        proxy: [ {
            path:/\/api(.*)/,
            target:'http://localhost:3001'
        } ],
        lazy: false
        //historyApiFallback: true
    }).listen(port,'localhost',function (err) {
        if(err) console.error(err);
    })
})