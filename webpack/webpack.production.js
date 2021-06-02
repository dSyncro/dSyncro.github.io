const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "dsyncro.min.css"
        })
    ],
    output: {
        filename: "dsyncro.min.js"
    }
});