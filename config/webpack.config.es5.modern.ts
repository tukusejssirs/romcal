import webpackMerge from "webpack-merge";
import baseConfig from "../webpack.config";
import { ConfigurationFactory } from "webpack";
import { join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const es5Config: ConfigurationFactory = async (env, { mode, ...rest }) => {
    const resolvedBaseConfig = await baseConfig(env, { mode, ...rest });
    return webpackMerge(resolvedBaseConfig, {
        entry: {
            romcal: [join(__dirname, "/../src/index.es5.ts"), join(__dirname, "/../src/index.ts")],
        },

        output: {
            filename: "[name].bundle.js",
            chunkFilename: "[name].bundle.js",
            path: join(__dirname, "../dist/es5/modern"),
            library: "romcal",
            libraryTarget: "umd",
            auxiliaryComment: "romcal - The Liturgical Calendar generator",
        },

        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: "html-loader",
                },
                {
                    test: /\.ts(x?)$/,
                    exclude: [/node_modules/, "/src/**/*.test.ts"],
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    [
                                        "@babel/preset-env",
                                        {
                                            useBuiltIns: "usage",
                                            corejs: "3",
                                            debug: false,
                                            ignoreBrowserslistConfig: true,
                                            targets: {
                                                browsers: [
                                                    "defaults",
                                                    "not IE 11",
                                                    "not IE_Mob 11",
                                                ],
                                            },
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            loader: "ts-loader",
                            options: {
                                configFile: join(__dirname, "tsconfig.es5.json"),
                                colors: true,
                            },
                        },
                    ],
                },
            ],
        },

        optimization: {
            splitChunks: {
                chunks: "all",
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    // Externalize all includes from node_modules except core-js
                    vendor: {
                        chunks: "all",
                        test: /[\\/]node_modules[\\/]/,
                        priority: 20,
                    },
                    // Create a common chunk for reusable code
                    common: {
                        name: "common",
                        minChunks: 2,
                        chunks: "async",
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                },
            },
        },

        plugins: [
            // Find out where the bloat is
            new BundleAnalyzerPlugin({
                analyzerMode: "disabled",
                generateStatsFile: true,
            }),
            // Generate test HTML page
            new HtmlWebpackPlugin({
                hash: true,
                title: "romcal - Test Page",
                template: "src/index.html",
                base: "./dist",
                meta: {
                    charset: {
                        charset: "utf-8",
                    },
                    "X-UA-Compatible": {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge",
                    },
                },
                minify: false,
            }),
        ],
    });
};

export default es5Config;