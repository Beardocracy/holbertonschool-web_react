const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
        entry: {
		header: './modules/header/header.js',
    		body: './modules/body/body.js',
    		footer: './modules/footer/footer.js',	
	},
        output: {
        	path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
		clean: true,
	},
	mode: 'development',
	plugins: [new HtmlWebpackPlugin()],
	devServer: {
		contentBase: './public',
		compress: true,
		port: 8564,
	},
	devtool: 'inline-source-map',
	optimization: {
    		splitChunks: {
      			chunks: 'all',
    		},
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
		}
		]
	},
	performance: {
		maxAssetSize: 10000,
	},
}
