/*
    ./webpack.config.js
*/
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ template: "./client/index.html", filename: "index.html", inject: "body" });

module.exports = {
    entry: "index.tsx",
    // configure the output directory and publicPath for the devServer
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    devtool: "eval",
    module: {
        loaders: [
            // .ts(x) files should first pass through the Typescript loader, and then through babel
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                include: path.resolve("client"),
                exclude: /node_modules/,
            },
            /* {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }, {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }, */
        ],
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    /* externals: {
        react: "React",
        "react-dom": "ReactDOM",
    }, */
    plugins: [HtmlWebpackPluginConfig],
    resolve: {
        extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
        ],
        modules: [
            "client",
            "node_modules",
        ],
    },
};
