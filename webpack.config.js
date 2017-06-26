var path = require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './entry.js',
	output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'output.js'
	},
  	module: {
		loaders: [
		    {
			    test: /\.js$/,
			    exclude: /(node_modules|bower_components)/,
			    loader: 'jsx-loader',
			    query: {
			        presets: ['es2015']
			    }
		    }
		]
	},
	plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};