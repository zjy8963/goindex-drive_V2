const BuildAppJSPlugin = require("./buildAppJSPlugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const cdnDependencies = require("./dependencies-cdn");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_G2INDEX_VERSION = require('./package.json').g2index

let publicPath = process.env.VUE_APP_CDN_PATH || "/";

let externals = {};
cdnDependencies.forEach((item) => {
  externals[item.name] = item.library;
});

const cdn = {
  css: cdnDependencies.map((e) => e.css).filter((e) => e),
  js: cdnDependencies.map((e) => e.js).filter((e) => e),
};
module.exports = {
  publicPath,
  lintOnSave: true,

  configureWebpack: (config) => {
    const configNew = {}
    if (process.env.NODE_ENV === 'production') {
      configNew.externals = externals
      configNew.plugins = [
        // gzip
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false
        })
      ]
    }
    return configNew
  },

  chainWebpack: (config) => {
    config.plugin("BuildAppJSPlugin").use(BuildAppJSPlugin);
    config.plugin("html").tap((args) => {
      if (process.env.NODE_ENV === "production") {
        args[0].cdn = cdn;
      } else {
        args[0].cdn = {
          js: cdnDependencies.filter((e) => e.name === "").map((e) => e.js),
          css: cdnDependencies.filter((e) => e.name === "").map((e) => e.css),
        };
      }
      args[0].inject = false
      return args;
    });
    // https://github.com/vuejs/vue-cli/issues/1559
    config.resolve
      .symlinks(true)
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@utils", resolve("src/utils"))
      .set("@node_modules", resolve("node_modules"));

    if (process.env.npm_config_report) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },

  productionSourceMap: false,

  devServer: {
    publicPath,
    proxy: {
      "/api": {
        // Achirou's Cloud
        target: "https://ossdev.achirou.workers.dev/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: "zh-chs",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
};
