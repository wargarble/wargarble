const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const Webpack = require("webpack");

const Entries = require("./webpack.manifest.js");
const Prod = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  context: __dirname,
  entry: Entries,
	module: {
    preLoaders: [
			{
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        exclude: /\_dist/,
      },
		],
	  loaders: [
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      },
      {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel',
	      query: {
	        presets: ['es2015'],
	      },
	    },
	  ],
	},
  output: {
    path: __dirname + "/dist/scripts/",
    filename: Prod ? "[name].min.js" : "[name].js",
	},
  plugins: Prod ? [
    new Webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new ExtractTextPlugin("[name].css"),
  ] : [],
  resolve: {
    root: [
      path.resolve(__dirname),
    ],
  },
};
