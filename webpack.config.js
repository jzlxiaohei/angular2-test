module.exports = {
    entry: {
        'app':['./src/app/app.ts']
    },
    output: {
        filename: '[name].js',
        path:__dirname,
        libraryTarget:'umd',
        publicPath:'/'
    },
    resolve: {

    },
    module: {
        loaders: [
            //{
            //    test: /[\.jsx|\.js ]$/,
            //    exclude: /node_modules/,
            //    loader: "babel-loader?stage=1&optional[]=runtime"
            //},
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /[\.ts|\.tsx$]/, loader: 'ts-loader' , exclude: [/node_modules/]}
        ]
    }
}
