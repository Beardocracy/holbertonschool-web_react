const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: './src/index.js',
        output: {
                path: path.resolve('dist'),
		filename: 'bundle.js',
	},
	mode: 'development',
	devServer: {
                contentBase: '../dist/',
		compress: true,
		port: 8564,
                hot: true,
	},
	devtool: 'inline-source-map',
	plugins: [ new HtmlWebpackPlugin({template: './dist/index.html'}) ],
        performance: {
                maxAssetSize: 10000,
        },
	module: {
		rules: [
		{ 
		    	test: /\.css$/, 
		    	use: ["style-loader", "css-loader"] 
		},
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				'file-loader',
				{
					loader: 'image-webpack-loader',
					options: {
						bypassOnDebug: true, // webpack@1.x
						disable: true, // webpack@2.x and newer
					},
				},
			],
		},
                {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                                loader: 'babel-loader',
                                options: {
                                        presets: ['@babel/preset-env', '@babel/react']
                                }
                        }
                },
                {
                        test: /\.jsx$/,
                        exclude: /node_modules/,
                        use: {
                                loader: 'babel-loader',
                                options: {
                                        presets: ['@babel/preset-env', '@babel/react']
                                }
                        }
                },
		],
	},
}