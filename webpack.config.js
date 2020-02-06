/* eslint-disable padded-blocks */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = (env = {}) => {

  const { mode = "development" } = env;

  const isProd = mode === "production";
  const isDev = mode === "development";

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "Hello World",
        buildTime: new Date().toISOString(),
        template: "public/index.html"
      })
    ];

    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: "main-[hash:8].css"
      })
      );
    }

    return plugins;
  };

  return {
    mode: isProd ? "production" : isDev && "development",

    output: {
      filename: isProd ? "main-[hash:8].js" : undefined,
      publicPath: "/"
    },

    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendors",
            test: /node_modules/,
            chunks: "all",
            enforce: true
          }
        }
      }
    },

    module: {
      rules: [

        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },

        // Loading images
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:7].[ext]"
              }
            }
          ]
        },

        // Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]"
              }
            }
          ]
        },

        // Loading CSS
        {
          test: /\.(css)$/,
          use: [...getStyleLoaders(), "style-loader", {
            loader: "postcss-loader",
            options: { sourceMap: true, config: { path: "./src/postcss.config.js" } }
          }]
        },

        // Loading SASS/SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), {
            loader: "postcss-loader",
            options: { sourceMap: true, config: { path: "./src/postcss.config.js" } }
          }, "sass-loader"]
        }

      ]
    },

    plugins: getPlugins(),

    devServer: {
      contentBase: path.join(__dirname, "dist/"),
      open: true,
      historyApiFallback: true
    }
  };
};
