module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "style-resources-loader",
                        options: {
                            patterns: [
                                "./assets/styles/*.scss",
                                "./assets/styles/*.scss",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ],
    },
    // ...
};
console.log("asdasasdasdasdasdasd")