var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var extractPlugin = new ExtractTextPlugin({
  filename: "main.css"

});


module.exports = {
  entry: [
    "./src/public/js/app.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    //publicPath: "/public"
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }]
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.sass$/,
        use: extractPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })

      },
      {
        test: /\.handlebars$/,
        use: [{
          loader: "handlebars-loader",
          query: {
            partialDirs: path.join(__dirname, "src", "views", "partials")
          }

        }],


      },
      {
        test: /\.(jpg|png|jpeg|ico|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "img/",
            publicPath: "img/"
          }
        }]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  // devtool: "inline-source-map",
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery"
    }),
    extractPlugin,
    new HtmlWebpackPlugin({
      template: "./src/views/home.handlebars"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    })

  ]
};
